import { CustomError } from "../error/CustomError";
import { CreateFriendshipDTO } from "../model/friendshipDTO";
import { BaseDatabase } from "./BaseDatabase";


export class FriendDatabase extends BaseDatabase {
    TABLE = "labook_friendships";

    public Create = async (friend: CreateFriendshipDTO) => {
        try {
            FriendDatabase.connection.initialize();
            await FriendDatabase.connection(this.TABLE)
            .insert(friend)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message);
        } finally {
            FriendDatabase.connection.destroy();
        }
    }

    public GetAll = async () => {
        return await FriendDatabase.connection(this.TABLE).select('*')
    }
}