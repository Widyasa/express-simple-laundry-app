import {mechineStatus} from "@prisma/client";

export interface Mechine {
    id: string;
    name: string;
    code: string;
    last_maintanance_date: string;
    status: mechineStatus;
    next_maintanance_date: string;
    category_id: string;
}