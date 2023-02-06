import { Request, Response } from 'express';
import { PostBusiness } from '../business/PostBusiness';
import { CustomError } from '../error/CustomError';
import { PostInputDTO } from '../model/postDTO';

export class PostController {
    public CreatePost = async (req: Request, res: Response) => {
        try {
            const input: PostInputDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                createdAt: req.body.createdAt,
                authorId: req.body.authorId
            }

            const postBusiness = new PostBusiness();


        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}