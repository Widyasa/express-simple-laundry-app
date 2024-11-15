import {RequestGetAll} from "../../types/requestGetAll";
import {createPaginator} from "prisma-pagination";
import {Transaction} from "../../types/Transaction";
import {Prisma} from "@prisma/client";
import {prisma} from "../../utils/prisma";
import {ServiceCategory} from "../../types/ServiceCategory";
import {beforeEach} from "node:test";

export const findTransaction = async (request: RequestGetAll) => {
    let transaction
    const paginate = createPaginator({perPage: 10})
    transaction = await paginate<Transaction, Prisma.TransactionsFindManyArgs>(
        prisma.transactions,
        {
            where : {
                total_price: request.search,
                total_pay: request.search,
                total_exchange: request.search,
                start_date: request.search,
                end_date: request.search,
                status: request.search,
            }
        }
    )
    return transaction
}

export const findTransactionById = async (id: string) => {
    const transaction = await prisma.transactions.findFirst({
        where: {id},
        include : {
            TransactionItems: {
                include : {
                    service: true
                }
            }
        }
    })
    return transaction
}

export const insertTransaction = async (request:Transaction) => {
    try {
        const transaction = await prisma.transactions.create({
            data: {
                total_price: request.total_price,
                total_pay: request.total_pay,
                total_exchange: request.total_exchange,
                status: request.status,
                start_date: request.start_date,
                end_date: request.end_date,
            }
        });
        for (const item of request.transaction_items) {
            await prisma.transactionItems.create({
                data : {
                    transaction_id: transaction.id,
                    qty: item.qty,
                    service_id: item.service_id,
                }
            })
        }
        return transaction
    } catch (e:any) {
        throw new Error(e)
    }

}

export const editTransaction = async (id:string, request:Transaction) => {
    const transaction = await prisma.transactions.findFirst({
        where: {id},
    })
    if (transaction?.status !== 'finished') {
        const updatedTransaction = await prisma.transactions.update({
            where: { id },
            data: {
                total_price: request.total_price,
                total_pay: request.total_pay,
                total_exchange: request.total_exchange,
                start_date: request.start_date,
                end_date: request.end_date,
                status: request.status,
            }
        });

        const deleteTransactionItem = await prisma.transactionItems.deleteMany({
            where: {
                transaction_id: id
            }
        })
        for (const item of request.transaction_items) {
            await prisma.transactionItems.create({
                data : {
                    transaction_id: id,
                    qty: item.qty,
                    service_id: item.service_id,
                }
            })
        }
        return updatedTransaction;
    } else {
        throw new Error("Transaction status is Finished");
    }
}