import { Schema, model } from 'mongoose';
import { Name, User } from './user.interface';

const nameSchema = new Schema<Name>({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
});

const userSchema = new Schema<User>({
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
    fullname: {
        type: nameSchema,
    },
});
