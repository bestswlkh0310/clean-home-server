import express from "express";
import {fixUser, getUser} from "./user.controller.js";

export const userRouter = express.Router();

userRouter.get('/', getUser);
userRouter.patch('/', fixUser);
