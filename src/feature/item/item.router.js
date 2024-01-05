import express from "express";
import {completeClean, getItemAll} from "./item.controller.js";

export const itemRouter = express.Router();

itemRouter.get('/all', getItemAll);
itemRouter.post('/complete', completeClean);
