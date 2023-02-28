import { Request, Response } from 'express';
import { PostBusiness } from '../business/PostBusiness';
import { CustomError } from '../error/CustomError';
import { PostInputDTO } from '../model/postDTO';
import { post } from '../model/post'

export class PostController {
    CreatePost = async (req: Request, res: Response) => {
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
           
        }
    }

    GetAllPosts = async (req: Request, res: Response): Promise<void> => { 
        try {
            const posts = await new PostBusiness().GetAllPosts();

            res.status(200).send(posts)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    GetPostById = async (req: Request, res: Response): Promise<void> => {
        try {
            const id = req.params.id;

            const post = await new PostBusiness().GetPostById(id)

            const result: post = {
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                createdAt: post.created_at,
                authorId: post.author_id
            }
        

            res.status(200).send({result})
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
            console.log(err)
        }
    }
}
