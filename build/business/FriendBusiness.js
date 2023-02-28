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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendBusiness = void 0;
const FriendDatabase_1 = require("../data/FriendDatabase");
const UserDatabase_1 = require("../data/UserDatabase");
const CustomError_1 = require("../error/CustomError");
const FriendshipError_1 = require("../error/FriendshipError");
const idGenerator_1 = require("../services/idGenerator");
const Friendship_1 = __importDefault(require("../model/Friendship"));
const id = (0, idGenerator_1.generateId)();
const friendDatabase = new FriendDatabase_1.FriendDatabase();
const userDatabase = new UserDatabase_1.UserDatabase();
class FriendBusiness {
    constructor() {
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
        this.GetUserfriends = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const friend = yield friendDatabase.GetAll();
                if (friend.length < 1) {
                    throw new CustomError_1.CustomError(400, "There is nothing here");
                }
                return yield friendDatabase.GetUserfriends(input);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.sqlMessage);
            }
        });
        this.Create = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!input) {
                    throw new FriendshipError_1.NotFoundBody();
                }
                if (input.userId === ":user_id") {
                    throw new FriendshipError_1.MissingUserId();
                }
                if (!input.friendId) {
                    throw new FriendshipError_1.MissingFriendId();
                }
                if (input.userId === input.friendId) {
                    throw new CustomError_1.CustomError(409, "Unable to add yourself.");
                }
                const firstFriend = new Friendship_1.default(id, input.userId, input.friendId);
                const secondFriend = new Friendship_1.default(id, input.friendId, input.userId);
                const allUsers = yield userDatabase.GetAllUsers();
                const userExisting = allUsers.filter(user => user.id === input.userId);
                if (userExisting.length < 1) {
                    throw new FriendshipError_1.UserNotExisting();
                }
                const userFriendExisting = allUsers.filter(userFriend => userFriend.id === input.friendId);
                if (userFriendExisting.length < 1) {
                    throw new FriendshipError_1.FriendNotExisting();
                }
                const allFriendships = yield friendDatabase.GetAll();
                for (let friend of allFriendships) {
                    if (input.userId === friend.user_id && friend.friend_id === input.friendId) {
                        throw new CustomError_1.CustomError(409, "Friend already added.");
                    }
                }
                yield friendDatabase.Create(firstFriend, secondFriend);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
                console.log(err);
            }
        });
        this.UndoFriends = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!input) {
                    throw new FriendshipError_1.NotFoundBody();
                }
                if (!input.friendId) {
                    throw new FriendshipError_1.NotFoundBody();
                }
                if (input.userId === ":user_id") {
                    throw new FriendshipError_1.MissingUserId();
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
                const allFriendships = yield friendDatabase.GetAll();
                const friendshipExisting = allFriendships.filter(friendship => friendship.user_id === input.userId && friendship.friend_id === input.friendId);
                if (friendshipExisting.length < 1) {
                    throw new FriendshipError_1.FriendshipsNotFound();
                }
                if (friendshipExisting.length > 1) {
                    throw new CustomError_1.CustomError(409, "Something went wrong.");
                }
                yield friendDatabase.UndoFriends(input);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
    }
}
exports.FriendBusiness = FriendBusiness;
//# sourceMappingURL=FriendBusiness.js.map