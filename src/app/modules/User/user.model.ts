/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';
import { TAddress, TName, TOrder, TUser } from './user.interface';

const nameSchema = new Schema<TName>(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
    },
);

const addressSchema = new Schema<TAddress>(
    {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
    },
    {
        _id: false,
    },
);

const orderSchema = new Schema<TOrder>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});

const userSchema = new Schema<TUser>(
    {
        userId: {
            type: Number,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        fullName: {
            type: nameSchema,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        hobbies: {
            type: [String],
            required: true,
        },
        address: {
            type: addressSchema,
            required: true,
        },
        orders: {
            type: [orderSchema],
        },
    },
    {
        // Remove unwanted fields from output JSON data
        toJSON: {
            versionKey: false,
            transform(doc, ret) {
                delete ret.password;
                delete ret._id;
            },
        },
    },
);

//Handling error for duplicate userId and username
userSchema.post('save', function (error: any, doc: any, next: any) {
    if (error.code === 11000) {
        const uniqueField = Object.keys(error.keyValue);
        const uniqueValue = Object.values(error.keyValue);
        next({
            message: `${uniqueField[0]}: '${uniqueValue[0]}' is already used. Please use an unique ${uniqueField[0]}`,
        });
    } else {
        next(error);
    }
});

// Remove orders from the  response
userSchema.post('save', function () {
    this.orders = undefined;
});

export const User = model<TUser>('User', userSchema);
