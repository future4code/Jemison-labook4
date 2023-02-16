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
exports.PostDatabase = void 0;
const CustomError_1 = require("../error/CustomError");
const BaseDatabase_1 = require("./BaseDatabase");
class PostDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.postTableName = "labook_posts";
        this.CreatePost = (post) => __awaiter(this, void 0, void 0, function* () {
            try {
                PostDatabase.connection.initialize();
                yield PostDatabase.connection(this.postTableName)
                    .insert(post);
            }
            catch (error) {
                throw new CustomError_1.CustomError(error.statusCode, error.message);
            }
            finally {
                PostDatabase.connection.destroy();
            }
        });
        this.GetAllPosts = () => __awaiter(this, void 0, void 0, function* () {
            try {
                PostDatabase.connection.initialize();
                const allPosts = yield PostDatabase.connection
                    .select('*')
                    .from(this.postTableName)
                    .orderBy('created_at', 'desc');
                return allPosts;
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
            finally {
                PostDatabase.connection.destroy();
            }
        });
        this.GetPostById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                PostDatabase.connection.initialize();
                const post = yield PostDatabase.connection
                    .select('*')
                    .from(this.postTableName)
                    .where({ id });
                return post[0];
            }
            catch (err) {
                throw new CustomError_1.CustomError(err.statusCode, err.message);
            }
            finally {
                PostDatabase.connection.destroy();
            }
        });
    }
}
exports.PostDatabase = PostDatabase;
//# sourceMappingURL=PostDatabase.js.map