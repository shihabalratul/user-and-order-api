import { Router } from 'express';
import {
    addSingleOrder,
    createUser,
    deleteSingleUser,
    getAllOrdersFromUser,
    getAllUsers,
    getSingleUser,
    getTotalPriceOfOrders,
    updateSingleUser,
} from './user.controller';

export const userRouter = Router();

// Api Routes
userRouter.post('/users', createUser);
userRouter.get('/users', getAllUsers);
userRouter.get('/users/:userId', getSingleUser);
userRouter.put('/users/:userId', updateSingleUser);
userRouter.delete('/users/:userId', deleteSingleUser);
userRouter.put('/users/:userId/orders', addSingleOrder);
userRouter.get('/users/:userId/orders', getAllOrdersFromUser);
userRouter.get('/users/:userId/orders/total-price', getTotalPriceOfOrders);
