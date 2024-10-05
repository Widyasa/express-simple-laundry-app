import {prisma} from "../../utils/prisma";
import {sendResponse} from "../../utils/sendResponse";
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
import {findUserCredential} from "./user.service";
dotenv.config();
export const loginRepository = async (res:any, email: string, password: string) => {
    const loginData = await findUserCredential(email)
    if (!loginData.success || !loginData.user) {
        return sendResponse(res, false, null, loginData.message || 'user not found', 403);
    }
    if (password !== loginData.user.password) {
        return sendResponse(res, false, null, 'Invalid password', 403);
    }
    if (!loginData.success) {
        return sendResponse(res, false, null, loginData.message, 403);
    }
    if (password === loginData.user.password) {
        // @ts-ignore
        const token = jwt.sign({ id: loginData.user.id, email: loginData.user.email }, process.env.JWT_SECRET);
        return sendResponse(res, true, { token }, 'Login success', 200);
    } else {
        return sendResponse(res, false, null, 'Invalid password', 403);
    }
}
