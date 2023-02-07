"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const userRouter_1 = require("./routes/userRouter");
const postRouter_1 = require("./routes/postRouter");
/**************************** TYPES ******************************/
//Rotas para User
app_1.app.use('/user', userRouter_1.userRouter);
// Rotas para Post
app_1.app.use('/post', postRouter_1.postRouter);
//# sourceMappingURL=index.js.map