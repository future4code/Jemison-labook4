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
exports.UserBusiness = void 0;
const UserDatabase_1 = require("./../data/UserDatabase");
const CustomError_1 = require("../error/CustomError");
const UserErrors_1 = require("../error/UserErrors");
const idGenerator_1 = require("../services/idGenerator");
class UserBusiness {
    constructor() {
        this.CreateUser = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new UserDatabase_1.UserDatabase();
                const { name, email, password } = input;
                if (!name || !email || !password) {
                    throw new UserErrors_1.BodyError();
                }
                if (!input.email || input.email.indexOf("@") === -1) {
                    throw new UserErrors_1.InvalidEmail();
                }
                if (!input.password || input.password.length < 6) {
                    throw new UserErrors_1.InvalidPassword();
                }
                const id = new idGenerator_1.generateId();
                const newUser = {
                    id: id.generateId(),
                    name,
                    email,
                    password
                };
                yield userDatabase.CreateUser(newUser);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
        this.GetAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new UserDatabase_1.UserDatabase();
                return yield userDatabase.GetAllUsers();
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
        this.login = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userDatabase = new UserDatabase_1.UserDatabase();
                const { email, password } = input;
                const user = yield this.GetUserByEmailAndPassword(input.email, input.password);
                if (!email || !password) {
                    throw new CustomError_1.CustomError(400, "Preencha todos os campos");
                }
                if (!input.email || input.email.indexOf("@") === -1) {
                    throw new UserErrors_1.InvalidEmail();
                }
                if (!input.password || input.password.length < 6) {
                    throw new UserErrors_1.InvalidPassword();
                }
                if (user.password !== password) {
                    throw new CustomError_1.CustomError(400, "Senha incorreta");
                }
                if (user.email !== email) {
                    throw new CustomError_1.CustomError(400, "Email incorreto");
                }
                return user.id;
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
        });
    }
    GetUserByEmailAndPassword(email, password) {
        try {
            const userDatabase = new UserDatabase_1.UserDatabase();
            const user = userDatabase.GetUserByEmailAndPassword(email, password);
            if (!user) {
                throw new CustomError_1.CustomError(400, "Usuário não encontrado");
            }
            return user;
        }
        catch (_a) {
            throw new CustomError_1.CustomError(400, "Usuário não encontrado");
        }
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map