import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { FriendshipInputDTO } from "../model/friendshipDTO";
import { UserIdDTO } from "../model/userDTO";

export class FriendController {
    GetAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const friends = await new FriendBusiness().GetAll()

            res.status(200).send(friends)
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    GetUserFriend = async (req: Request, res: Response): Promise<void> => {
        try{
            const input: UserIdDTO = {
                id: req.params.id
            }

            const userFriend = await new FriendBusiness().GetUserfriends(input)
            
            res.status(200).send(userFriend)
        } catch (err: any) {
            res.status(err.statusCode && 400).send(err.message && err.sqlMessage)
        }
    }

    Create = async (req: Request, res: Response): Promise<void> => {
        try{
            const input: FriendshipInputDTO = {
                userId: req.params.user_id,
                friendId: req.body.friendId
            }
            
            const friendBusiness = await new FriendBusiness().Create(input)

            res.status(201).send("Friend added.")
        }catch(err: any){
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

}