import { UserController } from '../controller/UserController';
import express from 'express';

const userController = new UserController();

export const userRouter = express.Router();

userRouter.post('/createUser', userController.CreateUser);
userRouter.get('/getAll', userController.GetAllUsers);

