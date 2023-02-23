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
const BaseDatabase_1 = require("./BaseDatabase");
class PostDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE = "labook_posts";
        this.CreatePost = (post) => __awaiter(this, void 0, void 0, function* () {
            return yield PostDatabase.connection(this.TABLE)
                .insert(post);
        });
        this.GetAllPosts = () => __awaiter(this, void 0, void 0, function* () {
            const allPosts = yield PostDatabase.connection
                .select('*')
                .from(this.TABLE)
                .orderBy('created_at', 'desc', '5');
            return allPosts;
        });
        this.GetPostById = (id) => __awaiter(this, void 0, void 0, function* () {
            const post = yield PostDatabase.connection
                .select('*')
                .from(this.TABLE)
                .where({ id });
            return post[0];
        });
    }
}
exports.PostDatabase = PostDatabase;
//# sourceMappingURL=PostDatabase.js.map