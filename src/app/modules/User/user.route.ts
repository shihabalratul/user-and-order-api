import { Router } from 'express';
import { createUser } from './user.controller';

export const userRouter = Router();

// Create user in database
userRouter.post('/users', createUser);
