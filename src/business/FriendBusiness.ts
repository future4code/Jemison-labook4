import { CreateFriendshipDTO, FriendshipInputDTO } from './../model/friendshipDTO';
import { FriendDatabase } from "../data/FriendDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { FriendNotExisting, FriendshipAlreadyExistsError, FriendshipsNotFound, MissingFriendId, MissingUserId, UnableToAddYourself, UserNotExisting } from "../error/FriendshipError";
import { generateId } from "../services/idGenerator"
import { Friendship } from '../model/friendship';

const id = generateId()
const friendDatabase = new FriendDatabase();
const userDatabase = new UserDatabase();

export class FriendBusiness {

    public Create = async (input: FriendshipInputDTO): Promise<void> => {
        try {
            const allUsers = await userDatabase.GetAllUsers()
            const { userId, friendId } = input

            const user = allUsers.filter(friendUser => friendUser.id === input.friendId);
            const frinds = allUsers.filter(friendUser => friendUser.id === input.userId);

            if(user.length < 1 ) {
                throw new UserNotExisting()
            }

            if(frinds.length < 1){
                throw new FriendNotExisting()
            }

            if(input.userId === ":user_id"){
                throw new MissingUserId()
            }

            if (input.userId === input.friendId){
                throw new UnableToAddYourself()
            }
            
            if (!input.friendId){
                throw new MissingFriendId()
            }

            if(!input.userId){
                throw new MissingUserId()
            }


            const friendship: CreateFriendshipDTO = {
                id,
                user_id: userId,
                friend_id: friendId 

            }

            const allFriends = await friendDatabase.GetAll()
            
            for(let friend of allFriends){
                if(input.userId === friend.user_id && friend.friend_id === input.friendId){
                    throw new FriendshipAlreadyExistsError()
                }
            }

            const friendData = await new FriendDatabase().Create(friendship)

            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message);
            console.log(err)
        }
    }

    public GetAll = async (): Promise<Friendship[]> => {
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
}