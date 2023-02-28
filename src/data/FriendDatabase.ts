import { BaseDatabase } from "./BaseDatabase";
import { UserIdDTO } from "../model/userDTO";
import Friendship from "../model/Friendship";
import { FriendshipInputDTO } from "../model/friendshipDTO";


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

    UndoFriends = async (input: FriendshipInputDTO) => {
        await FriendDatabase.connection(this.TABLE)
        .whereLike("labook_friendships.user_id", input.userId)
        .andWhereLike("labook_friendships.user_id", input.friendId)
        .andWhereLike("labook_friendships.friend_id", input.userId)
        .orWhereLike("labook_friendships.user_id", input.friendId)
        .del()

    }

}