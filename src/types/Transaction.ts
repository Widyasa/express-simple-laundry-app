import {TransactionStatus} from "@prisma/client";

export interface Transaction {
    total_price: number
    total_pay: number
    total_exchange: number
    start_date: string
    end_date: string
    status: TransactionStatus
    transaction_items : [
        {
            id:string
            transaction_id: string
            qty: number
            service_id: string
        }
    ]
}
export interface EditTransaction {
    total_price: number
    total_pay: number
    total_exchange: number
    start_date: string
    end_date: string
    status: string
    transaction_items : [
        {
            transaction_id: string
            qty: number
            service_id: string
        }
    ]
}