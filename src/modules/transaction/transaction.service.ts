import {
    editTransaction,
    findTransaction,
    findTransactionById,
    insertTransaction
} from "./transaction.repository";
import {Transaction} from "../../types/Transaction";

export const getAllTransaction = async (request:any) => {
    return await findTransaction(request);
};
export const getTransactionById = async (id:string) => {
    return await findTransactionById(id);
}
export const createTransaction = async (request:Transaction) => {
    return await insertTransaction(request);
}
export const updateTransaction = async (id:string, request:Transaction) => {
    return await editTransaction(id, request);
}