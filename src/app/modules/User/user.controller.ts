/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import UserValidationSchema from './user.validator';
import {
    createUserDB,
    deleteSingleUserFromDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateSingleUserFromDB,
} from './user.services';

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const validatedUserData = UserValidationSchema.parse(userData); // Validating api data using zod schema

        const result = await createUserDB(validatedUserData);

        res.status(200).send({
            success: true,
            message: 'User created successfully!',
            data: result,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Failed to create user.',
            error: err,
        });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersFromDB();

        res.status(200).send({
            success: true,
            message: 'Users fetched successfully!',
            data: users,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: 'Cannot retrieve all users from server',
            error: err,
        });
    }
};

export const getSingleUser = async (req: Request, res: Response) => {
    try {
        // console.log(req.params);
        const userId = Number(req.params.userId);
        const userData = await getSingleUserFromDB(userId);

        res.status(200).send({
            success: true,
            message: 'Users fetched successfully!',
            data: userData,
        });
    } catch (err: any) {
        userNotFoundError(err, res);
    }
};

export const updateSingleUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const userId = Number(req.params.userId);

        const validatedUserData =
            UserValidationSchema.partial().parse(userData); // Making all the property optional and validating them

        const result = await updateSingleUserFromDB(userId, validatedUserData);

        res.status(200).send({
            success: true,
            message: 'User updated successfully!',
            data: result,
        });
    } catch (err: any) {
        userNotFoundError(err, res);
    }
};

export const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = Number(req.params.userId);

        await deleteSingleUserFromDB(userId);

        res.status(200).send({
            success: true,
            message: 'User deleted successfully!',
            data: null,
        });
    } catch (err: any) {
        userNotFoundError(err, res);
    }
};

// Error handling for when user is not in the database
const userNotFoundError = (err: any, res: Response) => {
    res.status(404).send({
        success: false,
        message: 'User not found',
        error: {
            code: 404,
            decription: err.message,
        },
    });
};
