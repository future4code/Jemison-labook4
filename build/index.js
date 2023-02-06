"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const userRouter_1 = require("./routes/userRouter");
// import { postRouter } from './routes/postRouter';
/**************************** TYPES ******************************/
//Rotas para User
app_1.app.use('/user', userRouter_1.userRouter);
// Rotas para Post
// app.use('/post', postRouter);
//# sourceMappingURL=index.js.map