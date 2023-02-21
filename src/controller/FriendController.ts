import { Request, Response } from "express";
import { FriendBusiness } from "../business/FriendBusiness";
import { FriendshipInputDTO } from "../model/friendshipDTO";

export class FriendController {
    public Create = async (req: Request, res: Response) => {
        try {

            const { userId, friendId } = req.body

            const input: FriendshipInputDTO = {
                userId,
                friendId
            }

            const friendBusiness = await new FriendBusiness().Create(input)

            res.status(201).send({ message: "Friendship created successfully." });
        } catch (err: any) {
            res.status(err.statusCode || 400).send( err.message || err.sqlMessage );
            console.log(err)
        }
    }

    public GetAll = async (req: Request, res: Response): Promise<void> => {
        try {
            const friends = await new FriendBusiness().GetAll()

            res.status(200).send(friends)
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}