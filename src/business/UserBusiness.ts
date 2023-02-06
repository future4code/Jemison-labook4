import { UserDatabase } from './../data/UserDatabase';
import { CustomError } from "../error/CustomError";
import { BodyError, InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { UserInputDTO, CreateUser, LoginInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";

export class UserBusiness {
    public CreateUser = async (input: UserInputDTO) => {
        try {
            const userDatabase = new UserDatabase()

            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new BodyError()
            }

            if (!input.email || input.email.indexOf("@") === -1) {
                throw new InvalidEmail()
            }

            if (!input.password || input.password.length < 6) {
                throw new InvalidPassword()
            }

            const id: string = generateId()

            const newUser: CreateUser = {
                id,
                name,
                email,
                password
            }

            await userDatabase.CreateUser(newUser)

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }

    public GetAllUsers = async () => {

        try {
            const userDatabase = new UserDatabase();

            return await userDatabase.GetAllUsers();
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    private GetUserByEmailAndPassword(email: string, password: string): Promise<any> {
        try {
            const userDatabase = new UserDatabase()
            const user = userDatabase.GetUserByEmailAndPassword(email, password)
            
            if (!user) {
                throw new CustomError(400, "Usuário não encontrado")
            }
            return user
        } catch {
            throw new CustomError(400, "Usuário não encontrado")
        }
    }

    public login = async (input: LoginInputDTO) => {
        try {
            const userDatabase = new UserDatabase()
            const { email, password } = input
            const user = await this.GetUserByEmailAndPassword(input.email, input.password)
           
            if (!email || !password) {
                throw new CustomError(400, "Preencha todos os campos")
            }
            if (!input.email || input.email.indexOf("@") === -1) {
                throw new InvalidEmail()
            }

            if (!input.password || input.password.length < 6) {
                throw new InvalidPassword()
            }

            if (user.password !== password) {
                throw new CustomError(400, "Senha incorreta")
            }

            if (user.email !== email) {
                throw new CustomError(400, "Email incorreto")
            }
           
            return user.id
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}