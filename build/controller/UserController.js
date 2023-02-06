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
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
const CustomError_1 = require("../error/CustomError");
class UserController {
    constructor() {
        this.CreateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                };
                const userBusiness = new UserBusiness_1.UserBusiness();
                yield userBusiness.CreateUser(input);
                res.status(201).send({ message: "Usuário criado!" });
            }
            catch (error) {
                res.status(error.statusCode || 400).send(error.message || error.sqlMessage);
            }
        });
        this.GetAllUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield new UserBusiness_1.UserBusiness().GetAllUsers();
                res.status(200).send(users);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.status, err.message);
            }
        });
        this.Login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    email: req.body.email,
                    password: req.body.password
                };
                const token = yield new UserBusiness_1.UserBusiness().login(input);
                res.status(200).send({ token });
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map