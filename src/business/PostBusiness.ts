import { PostDatabase } from './../data/PostDatabase';
import { PostInputDTO, InsertPostDTO } from "../model/postDTO";
import { generateId } from "../services/idGenerator";
import { CustomError } from '../error/CustomError';
import moment from 'moment';
import { IncompleteBody, InvalideRequisition, InvalidType, NotFoundBody, NotFoundPhoto } from '../error/PostErrors';


export class PostBusiness {
    CreatePost = async (input: PostInputDTO) => {
        try {
            const postDatabase = new PostDatabase()

            const { photo, description, type, authorId } = input

            if (!photo || !description || !type || !authorId) {
                throw new IncompleteBody();
            }

            if (!input) {
                throw new NotFoundBody();
            }

            if (!input.photo) {
                throw new NotFoundPhoto();
            }

            if (input.type !== "normal" && input.type !== "evento") {
                throw new InvalidType();
            }
        
            const id: string = generateId()


            const createdAt: string = moment().format("YYYY-MM-DD HH:mm:ss").toString()

            const newPost: InsertPostDTO = {
                id,
                photo,
                description,
                type,
                created_at: createdAt,
                author_id: authorId
            }

            await postDatabase.CreatePost(newPost)

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message);
        }
    }

    GetAllPosts = async () => {
        try {
            const postDataBase = await new PostDatabase().GetAllPosts();

            return postDataBase;
        } catch (error: any) {
            throw new InvalideRequisition();
        }
    }

    GetPostById = async (id: string) => {
        try {
            const postDatabase = new PostDatabase()
            const post = await postDatabase.GetPostById(id);
            return post;
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}

