import jwt from "jsonwebtoken";
import "dotenv/config";
import * as express from "express";
export async function authMiddleware(req:any, res:any, next:any) {
    try {
        const token = req.headers.access_token;

        // @ts-ignore
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

        if (!verifyToken) {
            res.status(401).json({ message: "Unauthicated" });
        } else {
            req.user = verifyToken;
            next();
        }
    } catch (error) {
        console.log("🚀 ~ Api ~ error:", error);
        res.status(401).json({ message: "Unauthicated" });
    }
}