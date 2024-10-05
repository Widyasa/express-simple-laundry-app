import express from "express";
import {loginRepository} from "./user.repository";
import dotenv from "dotenv";
dotenv.config()
export async function signin (req: express.Request, res: express.Response) {
    return await loginRepository(res, req.body.email, req.body.password);
}

