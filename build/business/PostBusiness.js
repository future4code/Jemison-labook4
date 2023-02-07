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
exports.PostBusiness = void 0;
const PostDatabase_1 = require("./../data/PostDatabase");
const idGenerator_1 = require("../services/idGenerator");
const PostErrors_1 = require("../error/PostErrors");
const CustomError_1 = require("../error/CustomError");
const moment_1 = __importDefault(require("moment"));
class PostBusiness {
    constructor() {
        this.CreatePost = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postDatabase = new PostDatabase_1.PostDatabase();
                const { photo, description, type, authorId } = input;
                if (!photo || !description || !type || !authorId) {
                    throw new PostErrors_1.IncompleteBody();
                }
                if (!input) {
                    throw new PostErrors_1.NotFoundBody();
                }
                if (!input.photo) {
                    throw new PostErrors_1.NotFoundPhoto();
                }
                if (input.type !== "normal" && input.type !== "evento") {
                    throw new PostErrors_1.InvalidType();
                }
                const id = (0, idGenerator_1.generateId)();
                const createdAt = (0, moment_1.default)().format("YYYY-MM-DD HH:mm:ss").toString();
                const newPost = {
                    id,
                    photo,
                    description,
                    type,
                    created_at: createdAt,
                    author_id: authorId
                };
                yield postDatabase.CreatePost(newPost);
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
        });
        this.GetAllPosts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const postDataBase = yield new PostDatabase_1.PostDatabase().GetAllPosts();
                return postDataBase;
            }
            catch (error) {
                throw new PostErrors_1.InvalideRequisition();
            }
        });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map