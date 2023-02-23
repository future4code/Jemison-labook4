import express from 'express';
import { FriendController } from '../controller/FriendController';

const friendController = new FriendController();

export const friendshipRouter = express.Router();

friendshipRouter.post('/:user_id', friendController.Create);
friendshipRouter.get('/getAll', friendController.GetAll);
