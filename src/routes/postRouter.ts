import { PostController } from '../controller/PostController';
import express from 'express';

const postController = new PostController();

export const postRouter = express.Router();

postRouter.post('/createPost', postController.CreatePost);
postRouter.get('/getAll', postController.GetAllPosts);