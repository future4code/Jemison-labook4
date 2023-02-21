import { app } from './app';
import { userRouter } from './routes/userRouter';
import { postRouter } from './routes/postRouter';
import { friendshipRouter } from './routes/friendshipRouter';


//Rotas para User
app.use('/user', userRouter);
// Rotas para Post
app.use('/post', postRouter);
// Rotas para Friendship
app.use('/friendship', friendshipRouter);