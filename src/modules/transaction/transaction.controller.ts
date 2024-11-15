import {sendResponse} from "../../utils/sendResponse";
import {
    createTransaction,
    getAllTransaction,
    getTransactionById,
    updateTransaction
} from "./transaction.service";
import * as express from "express";
export const transactionRoute = express.Router();
transactionRoute.get("/", async (req, res) => {
    const transaction = await getAllTransaction(req.query);
    return sendResponse(res, true, transaction, 'fetch transaction success', 200);
});
transactionRoute.get("/:id", async (req, res) => {
    const transaction = await getTransactionById(req.params.id);
    return sendResponse(res, true, transaction, 'fetch transaction', 200);
})
transactionRoute.post("/", async (req, res) => {
    const transaction = await createTransaction(req.body);
    return sendResponse(res, true, transaction, 'create transaction success', 201);
})
transactionRoute.patch("/:id", async (req, res) => {
    const transaction = await updateTransaction(req.params.id,req.body);
    return sendResponse(res, true, transaction, 'update transaction success', 200);
})


