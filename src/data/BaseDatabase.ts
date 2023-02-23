import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export abstract class BaseDatabase {
    static connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            port: Number(process.env.PORT),
            multipleStatements: true
        }
    })

    abstract TABLE: string
}