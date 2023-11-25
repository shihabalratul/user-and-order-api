/* eslint-disable @typescript-eslint/no-explicit-any */
import { Schema, model } from 'mongoose';
import { TAddress, TName, TOrder, TUser, UserModel } from './user.interface';
import { userMiddlewares } from './user.middleware';

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

const userSchema = new Schema<TUser, UserModel>(
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

// using all the middlewares
userMiddlewares(userSchema);

// Check if user exists in the database
userSchema.statics.userExists = async function (userId: number) {
    const user = await User.findOne({ userId });

    if (user) {
        return true;
    } else {
        return false;
    }
};

export const User = model<TUser, UserModel>('User', userSchema);
