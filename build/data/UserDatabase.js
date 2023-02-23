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
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE = "labook_users";
        this.CreateUser = (user) => __awaiter(this, void 0, void 0, function* () {
            return yield UserDatabase.connection()
                .insert(user)
                .into(this.TABLE);
        });
        this.GetAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            return yield UserDatabase.connection.select('*').from(this.TABLE);
        });
        this.GetUserById = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield UserDatabase.connection.select().from(this.TABLE).where({ id });
            return result[0];
        });
        this.GetUserByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const result = yield UserDatabase.connection.select().from(this.TABLE).where({ email });
            return result[0];
        });
        this.GetUserByEmailAndPassword = (email, password) => __awaiter(this, void 0, void 0, function* () {
            const result = yield UserDatabase.connection.select().from(this.TABLE).where({ email, password });
            return result[0];
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDatabase.js.map