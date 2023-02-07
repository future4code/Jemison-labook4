import { Console } from 'console';
import { Request, Response } from 'express';
import { PostBusiness } from '../business/PostBusiness';
import { CustomError } from '../error/CustomError';
import { PostInputDTO } from '../model/postDTO';

export class PostController {
    public CreatePost = async (req: Request, res: Response) => {
        try {

            const { photo, description, type, authorId } = req.body

            const input: PostInputDTO = {
                photo,
                description,
                type,
                authorId
            }

            const postBusiness = await new PostBusiness().CreatePost(input);

            res.status(201).send({ message: "Sucess!" })

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
            console.log(err)
        }
    }

    public GetAllPosts = async (req: Request, res: Response): Promise<void> => { 
        try {
            const posts = await new PostBusiness().GetAllPosts();

            res.status(200).send(posts)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}