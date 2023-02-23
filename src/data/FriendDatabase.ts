import { BaseDatabase } from "./BaseDatabase";
import { UserIdDTO } from "../model/userDTO";
import Friendship from "../model/Friendship";


export class FriendDatabase extends BaseDatabase {
    TABLE = "labook_friendships";
    
    GetAll = async () => {
        return await FriendDatabase.connection(this.TABLE).select('*')
    }

    GetUserfriends = async (input: UserIdDTO) => {
        return await FriendDatabase.connection(this.TABLE)
        .select("*")
        .whereLike("labook_friendships.user_id", input.id)
    }

    Create = async (firstFriend: Friendship, secondFriend: Friendship) => {
        await FriendDatabase.connection().insert([firstFriend || secondFriend]).into(this.TABLE)
    }

}