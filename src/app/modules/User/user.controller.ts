import { Request, Response } from 'express';
import UserValidationSchema from './user.validator';
import { createUserDB } from './user.services';

export const createUser = async (req: Request, res: Response) => {
    try {
        const userData = req.body;
        const validatedUserData = await UserValidationSchema.parse(userData); // Validating api data using zod schema

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
