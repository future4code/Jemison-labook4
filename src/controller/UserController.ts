import { Request, Response } from 'express';
import { UserBusiness } from '../business/UserBusiness';
import { CustomError } from '../error/CustomError';
import { UserInputDTO, LoginInputDTO } from '../model/userDTO';

export class UserController {
    public CreateUser = async (req: Request, res: Response) => {
        try {
            const input: UserInputDTO = {
               name: req.body.name,
               email: req.body.email,
               password: req.body.password
            }
            const userBusiness = await new UserBusiness().CreateUser(input)
   
            res.status(201).send({ message: "Usuário criado!" })
         } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
         }
    }

    public GetAllUsers = async (req: Request, res: Response): Promise<void> => {
        try  {
            
            const users = await new UserBusiness().GetAllUsers();

            res.status(200).send(users)
        } catch (err: any) {
            throw new CustomError(err.status, err.message)
        }
    }

    public Login = async (req: Request, res: Response) => {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await new UserBusiness().login(input)

            res.status(200).send({ token })
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}