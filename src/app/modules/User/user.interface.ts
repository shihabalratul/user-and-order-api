import { Model } from 'mongoose';

/* eslint-disable no-unused-vars */
export interface TName {
    firstName: string;
    lastName: string;
}

export interface TAddress {
    street: string;
    city: string;
    country: string;
}

export interface TOrder {
    productName: string;
    price: number;
    quantity: number;
}

export interface TUser {
    userId: number;
    username: string;
    password: string;
    fullName: TName;
    age: number;
    email: string;
    isActive: boolean;
    hobbies: Array<string>;
    address: TAddress;
    orders?: Array<TOrder>;
}

export interface UserModel extends Model<TUser> {
    userExists(userId: number): Promise<boolean>;
}
