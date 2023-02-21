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
exports.FriendBusiness = void 0;
const FriendDatabase_1 = require("../data/FriendDatabase");
const UserDatabase_1 = require("../data/UserDatabase");
const CustomError_1 = require("../error/CustomError");
const FriendshipError_1 = require("../error/FriendshipError");
const idGenerator_1 = require("../services/idGenerator");
const id = new idGenerator_1.generateId();
const friendDatabase = new FriendDatabase_1.FriendDatabase();
const userDatabase = new UserDatabase_1.UserDatabase();
class FriendBusiness {
    constructor() {
        this.Create = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (input.userId === ":user_id") {
                    throw new FriendshipError_1.MissingUserId();
                }
                if (!input.friendId) {
                    throw new FriendshipError_1.MissingFriendId();
                }
                if (input.userId === input.friendId) {
                    throw new CustomError_1.CustomError(409, "Unable to add yourself.");
                }
                const allUsers = yield userDatabase.GetAllUsers();
                const userExisting = allUsers.filter(user => user.id === input.userId);
                if (userExisting.length < 1) {
                    throw new FriendshipError_1.UserNotExisting();
                }
                const userFriendExisting = allUsers.filter(userFriend => userFriend.id === input.friendId);
                if (userFriendExisting.length < 1) {
                    throw new FriendshipError_1.FriendNotExisting();
                }
                const friendshipOne = {
                    id: id.generateId(),
                    user_id: input.userId,
                    friend_id: input.friendId
                };
                const friendshipTwo = {
                    id: id.generateId(),
                    user_id: input.friendId,
                    friend_id: input.userId
                };
                const allFriendships = yield friendDatabase.GetAll();
                for (let friend of allFriendships) {
                    if (input.userId === friend.user_id && friend.friend_id === input.friendId) {
                        throw new CustomError_1.CustomError(409, "Friend already added.");
                    }
                }
                yield friendDatabase.Create(friendshipOne, friendshipTwo);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
        this.GetAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const friendships = yield friendDatabase.GetAll();
                if (friendships.length < 1) {
                    throw new FriendshipError_1.FriendshipsNotFound();
                }
                return yield friendDatabase.GetAll();
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
    }
}
exports.FriendBusiness = FriendBusiness;
//# sourceMappingURL=FriendBusiness.js.map