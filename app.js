import express from 'express';
import { config } from 'dotenv';
import userRouter from './routes/User.js'
import taskRouter from './routes/Task.js'

import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
config({
    path: "./data/config.env"
});
export const app = express();
// using middle ware
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/user', userRouter);
app.use('/api/v1/task', taskRouter);


app.use(errorMiddleware);