"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("./data/BaseDatabase");
const createTables = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield BaseDatabase_1.BaseDatabase.connection.raw(`
            CREATE TABLE IF NOT EXISTS labook_users(
               id VARCHAR(255) PRIMARY KEY,
               name VARCHAR(255) NOT NULL,
               email VARCHAR(255) UNIQUE NOT NULL,
               password VARCHAR(255) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS labook_posts(
               id VARCHAR(255) PRIMARY KEY,
               photo VARCHAR(255) NOT NULL,
               description VARCHAR(255) NOT NULL,
               type ENUM("normal","event") DEFAULT "normal",
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
               author_id VARCHAR(255),
               FOREIGN KEY (author_id) REFERENCES labook_users (id)
            )

            CREATE TABLE IF NOT EXISTS labook_friendships(
                id VARCHAR(255) PRIMARY KEY,
                user_id VARCHAR(255) NOT NULL,
                friend_id VARCHAR(255) NOT NULL,
                FOREIGN KEY (user_id) REFERENCES labook_users (id),
                FOREIGN KEY (friend_id) REFERENCES labook_users (id)
            );

            CREATE TABLE IF NOT EXISTS labook_comment_post(
               id VARCHAR(255) PRIMARY KEY,
               user_id VARCHAR(255) NOT NULL,
               post_id VARCHAR(255) NOT NULL,
               comment TEXT,
               FOREIGN KEY (user_id) REFERENCES labook_users (id),
               FOREIGN KEY (post_id) REFERENCES labook_posts (id)
           );
           
           CREATE TABLE IF NOT EXISTS labook_like_post(
               id VARCHAR(255) PRIMARY KEY,
               user_id VARCHAR(255) NOT NULL,
               post_id VARCHAR(255) NOT NULL,
               liked ENUM("true"),
               FOREIGN KEY (user_id) REFERENCES labook_users (id),
               FOREIGN KEY (post_id) REFERENCES labook_posts (id)
           );
         `);
        console.log(`Tables created successfully!`);
    }
    catch (error) {
        console.log(error.sqlMessage || error.message);
    }
});
//# sourceMappingURL=migrations.js.map