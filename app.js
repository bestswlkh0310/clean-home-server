import express from 'express';
import {authMiddleware} from "./src/global/middleware/auth.middleware.js";
import {logMiddleware} from "./src/global/middleware/log.middleware.js";
import {itemRouter} from "./src/feature/item/item.router.js";
import {userRouter} from "./src/feature/user/user.router.js";
import cors from 'cors';

const app = express();
const port = 3333;
app.use(express.json());
app.use(cors());

app.use(logMiddleware);
app.use(authMiddleware);

app.use('/user', userRouter);
app.use('/item', itemRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
