import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user";



export class UserDatabase extends BaseDatabase {
    private userTableName = "labook_users"

    public CreateUser = async ( user: user) => {
        try {
            //inciando a conexão com o banco de dados
            UserDatabase.connection.initialize()
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into(this.userTableName)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        } finally {
            UserDatabase.connection.destroy()
        }
    }

    public GetUserById = async (id: string): Promise<user[]> => {
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
}