import config from '../../config';
import { Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function userMiddlewares(userSchema: Schema<TUser, UserModel>) {
    const hashPass = async (password: string) => {
        const hashedPass = await bcrypt.hash(
            password,
            Number(config.bcrypt_salt),
        ); // Hashing password

        return hashedPass;
    };

    // Password hashing before creating a user
    userSchema.pre('save', async function (next) {
        this.password = await hashPass(this.password);
        next();
    });

    // Password hashing before updating a user
    userSchema.pre('updateOne', async function (next) {
        const data: any = this.getUpdate();

        data.password = await hashPass(data.password);

        this.setUpdate(data);

        next();
    });

    // Common error for unique field duplicates
    const uniqueValueEror = (error: any, next: any) => {
        if (error.code === 11000) {
            const uniqueField = Object.keys(error.keyValue); // Extracting error field name
            const uniqueValue = Object.values(error.keyValue); // Extracting error field value
            next({
                message: `${uniqueField[0]}: '${uniqueValue[0]}' is already used. Please use an unique ${uniqueField[0]}`,
            });
        } else {
            next(error);
        }
    };

    //Handling save query error for duplicate userId and username
    userSchema.post('save', function (error: any, doc: any, next: any): void {
        uniqueValueEror(error, next);
    });

    //Handling updateOne query error for duplicate value for unique fields
    userSchema.post(
        'updateOne',
        function (error: any, doc: any, next: any): void {
            uniqueValueEror(error, next);
        },
    );

    // Remove orders from the  response
    userSchema.post('save', function () {
        this.orders = undefined;
    });
}
