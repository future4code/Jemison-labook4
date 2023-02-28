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
exports.FriendController = void 0;
const FriendBusiness_1 = require("../business/FriendBusiness");
const friendBusiness = new FriendBusiness_1.FriendBusiness();
class FriendController {
    constructor() {
        this.GetAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const friends = yield friendBusiness.GetAll();
                res.status(200).send(friends);
            }
            catch (err) {
                res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
            }
        });
        this.GetUserFriend = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id
                };
                const userFriend = yield new FriendBusiness_1.FriendBusiness().GetUserfriends(input);
                res.status(200).send(userFriend);
            }
            catch (err) {
                res.status(err.statusCode && 400).send(err.message && err.sqlMessage);
            }
        });
        this.Create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    userId: req.params.user_id,
                    friendId: req.body.friendId
                };
                yield friendBusiness.Create(input);
                res.status(201).send("Friend added.");
            }
            catch (err) {
                res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
            }
        });
        this.UndoFriends = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    userId: req.params.user_id,
                    friendId: req.body.friendId
                };
                yield friendBusiness.UndoFriends(input);
                res.status(200).send("Friendship undone.");
            }
            catch (err) {
                res.status(err.statusCode || 400).send(err.message || err.sqlMessage);
            }
        });
    }
}
exports.FriendController = FriendController;
//# sourceMappingURL=FriendController.js.map