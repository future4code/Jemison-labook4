import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { InsertPostDTO } from "../model/postDTO";


export class PostDatabase extends BaseDatabase {
    private postTableName = "labook_posts";

    public CreatePost = async (post: InsertPostDTO) => {
        try {
            PostDatabase.connection.initialize()
            await PostDatabase.connection(this.postTableName)
            .insert(post)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            PostDatabase.connection.destroy()
        }
    }

    public GetAllPosts = async () => {
        try {
            PostDatabase.connection.initialize();
            const allPosts = await PostDatabase.connection
            .select('*')
            .from(this.postTableName)
            .orderBy('created_at', 'desc')
            return allPosts;
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        } finally {
            PostDatabase.connection.destroy();
        }
    }

    public GetPostById = async (id: string) => {
        try {
            PostDatabase.connection.initialize();
            const post = await PostDatabase.connection
            .select('*')
            .from(this.postTableName)
            .where({ id });
            
            return post[0];
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        } finally {
            PostDatabase.connection.destroy();
        }
    }
}