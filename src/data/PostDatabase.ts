import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { InsertPostDTO } from "../model/postDTO";


export class PostDataBase extends BaseDatabase {
    private postTableName = "labook_posts";

    public createPost = async (post: InsertPostDTO) => {
        try {
            PostDataBase.connection.initialize()
            await PostDataBase.connection.insert({
                id: post.id,
                photo: post.photo,
                description: post.description,
                type: post.type,
                created_at: post.createdAt,
                author_id: post.authorId
            }).into(this.postTableName)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            PostDataBase.connection.destroy()
        }
    }
}