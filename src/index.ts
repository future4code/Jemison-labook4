import { app } from './app';
import { userRouter } from './routes/userRouter';
import { postRouter } from './routes/postRouter';

/**************************** TYPES ******************************/

//Rotas para User
app.use('/user', userRouter);
// Rotas para Post
app.use('/post', postRouter);