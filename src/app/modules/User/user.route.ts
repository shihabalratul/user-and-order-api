import { Router } from 'express';
import {
    createUser,
    deleteSingleUser,
    getAllUsers,
    getSingleUser,
    updateSingleUser,
} from './user.controller';

export const userRouter = Router();

// Create user in database
userRouter.post('/users', createUser);
userRouter.get('/users', getAllUsers);
userRouter.get('/users/:userId', getSingleUser);
userRouter.put('/users/:userId', updateSingleUser);
userRouter.delete('/users/:userId', deleteSingleUser);
