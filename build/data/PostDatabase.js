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
exports.PostDataBase = void 0;
const CustomError_1 = require("../error/CustomError");
const BaseDatabase_1 = require("./BaseDatabase");
class PostDataBase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.postTableName = "labook_posts";
        this.createPost = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                PostDataBase.connection.initialize();
                yield PostDataBase.connection.insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    created_at: post.createdAt,
                    author_id: post.authorId
                }).into(this.postTableName);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
            finally {
                PostDataBase.connection.destroy();
            }
        });
    }
}
exports.PostDataBase = PostDataBase;
//# sourceMappingURL=PostDatabase.js.map