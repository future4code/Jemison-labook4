"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const PostController_1 = require("../controller/PostController");
const express_1 = __importDefault(require("express"));
const postController = new PostController_1.PostController();
exports.postRouter = express_1.default.Router();
exports.postRouter.post('/createPost', postController.CreatePost);
exports.postRouter.get('/getAll', postController.GetAllPosts);
//# sourceMappingURL=postRouter.js.map