import express from 'express';
import { FriendController } from '../controller/FriendController';

const friendController = new FriendController();

export const friendshipRouter = express.Router();

friendshipRouter.post('/createFriendship', friendController.Create);
friendshipRouter.get('/getAll', friendController.GetAll);
