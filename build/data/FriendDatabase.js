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
exports.FriendDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class FriendDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE = "labook_friendships";
        this.Create = (friendshipOne, friendshipTwo) => __awaiter(this, void 0, void 0, function* () {
            yield FriendDatabase.connection(this.TABLE).insert([friendshipOne, friendshipTwo]);
        });
        this.GetAll = () => __awaiter(this, void 0, void 0, function* () {
            return yield FriendDatabase.connection(this.TABLE).select('*');
        });
    }
}
exports.FriendDatabase = FriendDatabase;
//# sourceMappingURL=FriendDatabase.js.map