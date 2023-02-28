import { FriendshipInputDTO } from './../model/friendshipDTO';
import { FriendDatabase } from "../data/FriendDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { FriendNotExisting, FriendshipsNotFound, MissingFriendId, MissingUserId, NotFoundBody, UserNotExisting } from "../error/FriendshipError";
import { generateId } from "../services/idGenerator"
import Friendship  from '../model/Friendship';
import { UserIdDTO } from '../model/userDTO';

const id = generateId()
const friendDatabase = new FriendDatabase();
const userDatabase = new UserDatabase();

export class FriendBusiness {
    GetAll = async (): Promise<Friendship[]> => {
        try {
            const friendships = await friendDatabase.GetAll()
            if(friendships.length < 1){
                throw new FriendshipsNotFound()
            }
    
            return await friendDatabase.GetAll()
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    GetUserfriends = async (input: UserIdDTO): Promise<Friendship[]> => {
        try{
            const friend = await friendDatabase.GetAll()

            if(friend.length < 1){
                throw new CustomError(400, "There is nothing here")
            }

            return await friendDatabase.GetUserfriends(input)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.sqlMessage)
        }
    }
    
    Create = async (input: FriendshipInputDTO): Promise<void> => {
        try{

            if (!input) {
                throw new NotFoundBody()
            }

            if(input.userId === ":user_id"){
                throw new MissingUserId()
            } 
            
            if(!input.friendId){
                throw new MissingFriendId()
            } 
            
            if(input.userId === input.friendId){
                throw new CustomError(409, "Unable to add yourself.")
            }

            const firstFriend = new Friendship (
                id,
                input.userId,
                input.friendId
            )

            const secondFriend = new Friendship (
                id,
                input.friendId,
                input.userId
            )

            const allUsers = await userDatabase.GetAllUsers()

            const userExisting = allUsers.filter(user => user.id === input.userId)
            if(userExisting.length < 1){
                throw new UserNotExisting()
            }  
            
            const userFriendExisting = allUsers.filter(userFriend => userFriend.id === input.friendId)
            if(userFriendExisting.length < 1){
                throw new FriendNotExisting()
            }


            const allFriendships = await friendDatabase.GetAll()
            
            for(let friend of allFriendships){
                if(input.userId === friend.user_id && friend.friend_id === input.friendId){
                    throw new CustomError(409, "Friend already added.")
                }
            }

            await friendDatabase.Create(firstFriend, secondFriend)
           
        }catch(err: any){
            throw new CustomError(err.statusCode, err.message)  
            console.log(err)
        }
    }

    UndoFriends = async (input: FriendshipInputDTO): Promise<void> => {
        try{
            if (!input) {
                throw new NotFoundBody()
            }

            if(!input.friendId){
                throw new NotFoundBody()
            }

            if(input.userId === ":user_id"){
                throw new MissingUserId()
            }

            const allUsers = await userDatabase.GetAllUsers()

            const userExisting = allUsers.filter(user => user.id === input.userId)
            if(userExisting.length < 1){
                throw new UserNotExisting()
            }  
            
            const userFriendExisting = allUsers.filter(userFriend => userFriend.id === input.friendId)
            if(userFriendExisting.length < 1){
                throw new FriendNotExisting()
            }

            const allFriendships = await friendDatabase.GetAll()

            const friendshipExisting = allFriendships.filter(friendship => friendship.user_id === input.userId && friendship.friend_id === input.friendId)
            if(friendshipExisting.length < 1){
                throw new FriendshipsNotFound()
            }

            if(friendshipExisting.length > 1){
                throw new CustomError(409, "Something went wrong.")
            }

            await friendDatabase.UndoFriends(input)

        } catch (err: any){
            throw new CustomError(err.statusCode, err.message)
        }
    }
}