import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { InsertPostDTO } from "../model/postDTO";


export class PostDatabase extends BaseDatabase {
    TABLE = "labook_posts";

    CreatePost = async (post: InsertPostDTO) => {
        return await PostDatabase.connection(this.TABLE)
        .insert(post)
    }

    GetAllPosts = async () => {
            const allPosts = await PostDatabase.connection
            .select('*')
            .from(this.TABLE)
            .orderBy('created_at', 'desc', '5')
            return allPosts;
    }

    GetPostById = async (id: string) => {
            const post = await PostDatabase.connection
            .select('*')
            .from(this.TABLE)
            .where({ id });
            return post[0];
    }
}