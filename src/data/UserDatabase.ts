import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { CreateUser } from "../model/userDTO";

export class UserDatabase extends BaseDatabase {
    private userTableName = "labook_users"

    public CreateUser = async ( user: CreateUser) => {
        try {
            //inciando a conexão com o banco de dados
            UserDatabase.connection.initialize()
            await UserDatabase.connection()
            .insert(user)
            .into(this.userTableName)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            UserDatabase.connection.destroy()
        }
    }

    public GetAllUsers = async (): Promise<CreateUser[]> => {
        try {
            //iniciando a conexão com o banco de dados
            UserDatabase.connection.initialize()
   
            const allUsers=await UserDatabase.connection.select('*').from(this.userTableName);
   
            return allUsers;
         } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
         }finally{         
            UserDatabase.connection.destroy();
         }
    }

    public GetUserById = async (id: string): Promise<CreateUser[]> => {
        try {
            //inciando a conexão com o banco de dados
            UserDatabase.connection.initialize()
            const result = await UserDatabase.connection.select().from(this.userTableName).where({ id })
            return result[0]
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            UserDatabase.connection.destroy()
        }
    }

    public GetUserByEmail = async (email: string): Promise<CreateUser[]> => {
        try {
            UserDatabase.connection.initialize();
            const result = await UserDatabase.connection.select().from(this.userTableName).where({ email })
            return result[0]

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    public GetUserByEmailAndPassword = async (email: string, password: string): Promise<CreateUser[]> => {
        try {
            UserDatabase.connection.initialize();
            const result = await UserDatabase.connection.select().from(this.userTableName).where({ email, password })
            return result[0]

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

}