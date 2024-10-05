import express from "express";
import {signin} from "../modules/user/user.controller";

export const userRoutes = express.Router();
userRoutes.post('/login', signin)