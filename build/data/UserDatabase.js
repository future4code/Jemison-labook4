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
exports.UserDatabase = void 0;
const CustomError_1 = require("../error/CustomError");
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.userTableName = "labook_users";
        this.CreateUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                //inciando a conexão com o banco de dados
                UserDatabase.connection.initialize();
                yield UserDatabase.connection()
                    .insert(user)
                    .into(this.userTableName);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
            finally {
                UserDatabase.connection.destroy();
            }
        });
        this.GetAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                //iniciando a conexão com o banco de dados
                UserDatabase.connection.initialize();
                const allUsers = yield UserDatabase.connection.select('*').from(this.userTableName);
                return allUsers;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
            finally {
                UserDatabase.connection.destroy();
            }
        });
        this.GetUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                //inciando a conexão com o banco de dados
                UserDatabase.connection.initialize();
                const result = yield UserDatabase.connection.select().from(this.userTableName).where({ id });
                return result[0];
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
            finally {
                UserDatabase.connection.destroy();
            }
        });
        this.GetUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            try {
                UserDatabase.connection.initialize();
                const result = yield UserDatabase.connection.select().from(this.userTableName).where({ email });
                return result[0];
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
        this.GetUserByEmailAndPassword = (email, password) => __awaiter(this, void 0, void 0, function* () {
            try {
                UserDatabase.connection.initialize();
                const result = yield UserDatabase.connection.select().from(this.userTableName).where({ email, password });
                return result[0];
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDatabase.js.map