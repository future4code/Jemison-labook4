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
exports.PostController = void 0;
const PostBusiness_1 = require("../business/PostBusiness");
const CustomError_1 = require("../error/CustomError");
class PostController {
    constructor() {
        this.CreatePost = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, type, authorId } = req.body;
                const input = {
                    photo,
                    description,
                    type,
                    authorId
                };
                const postBusiness = yield new PostBusiness_1.PostBusiness().CreatePost(input);
                res.status(201).send({ message: "Sucess!" });
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
                console.log(err);
            }
        });
        this.GetAllPosts = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield new PostBusiness_1.PostBusiness().GetAllPosts();
                res.status(200).send(posts);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map