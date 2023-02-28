"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.friendshipRouter = void 0;
const express_1 = __importDefault(require("express"));
const FriendController_1 = require("../controller/FriendController");
const friendController = new FriendController_1.FriendController();
exports.friendshipRouter = express_1.default.Router();
exports.friendshipRouter.post('/:user_id', friendController.Create);
exports.friendshipRouter.get('/getAll', friendController.GetAll);
exports.friendshipRouter.delete('/:user_id', friendController.UndoFriends);
//# sourceMappingURL=friendshipRouter.js.map