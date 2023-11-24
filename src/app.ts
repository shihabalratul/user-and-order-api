import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Working properly');
});

export default app;
