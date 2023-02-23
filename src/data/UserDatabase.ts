import { BaseDatabase } from "./BaseDatabase";
import { CreateUser, User } from "../model/userDTO";

export class UserDatabase extends BaseDatabase {
    TABLE = "labook_users"

    CreateUser = async ( user: CreateUser) => {
           return await UserDatabase.connection()
            .insert(user)
            .into(this.TABLE)
    }

    GetAllUsers = async (): Promise<User[]> => {
       return await UserDatabase.connection.select('*').from(this.TABLE);
    }

    GetUserById = async (id: string): Promise<CreateUser[]> => {
            const result = await UserDatabase.connection.select().from(this.TABLE).where({ id })
            return result[0]
    }

    private GetUserByEmail = async (email: string): Promise<CreateUser[]> => {
            const result = await UserDatabase.connection.select().from(this.TABLE).where({ email })
            return result[0]
    }

    GetUserByEmailAndPassword = async (email: string, password: string): Promise<CreateUser[]> => {
            const result = await UserDatabase.connection.select().from(this.TABLE).where({ email, password })
            return result[0]
    }

}