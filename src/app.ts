import express from 'express';
import cors from 'cors';
import { userRouter } from './app/modules/User/user.route';

const app = express();

// Parsers
app.use(express.json());
app.use(cors());

// Routing requests
app.use('/api', userRouter);

export default app;
