import {prisma} from "../../utils/prisma";
import {Prisma} from "@prisma/client";
import {createPaginator} from "prisma-pagination";
import {RequestGetAll} from "../../types/requestGetAll";
import {Mechine} from "../../types/Mechine";

export const findMechine = async (request:RequestGetAll) => {
    let mechine
    const paginate = createPaginator({perPage: 10})
    mechine = await paginate<Mechine, Prisma.MechinesFindManyArgs>(
        prisma.mechines,
        {
            where: {
                name: request.search,
                code: request.search,
                status: request.search,
                category_id: request.search,
                last_maintanance_date: request.search,
                next_maintanance_date: request.search
            },
            include: {
                category: true
            }

        },
        { page: request.page }
    )
    return mechine
}
export const findMechineById = async (id:string) => {
    const mechine = await prisma.mechines.findFirst({
        where: {id},
        include : {
            category: true
        }
    })
    return mechine
}
export const insertMechine = async (request:Mechine) => {
    const mechine = await prisma.mechines.create({
        data: {
            name: request.name,
            code: request.code,
            status: request.status,
            category_id: request.category_id,
            last_maintanance_date: request.last_maintanance_date,
            next_maintanance_date: request.next_maintanance_date
        }
    });
    return mechine
}
export const editMechine = async (id:string, request:Mechine) => {
    const mechine =  await prisma.mechines.update({
        where : {
            id
        },
        data : {
            name: request.name,
            code: request.code,
            status: request.status,
            last_maintanance_date: request.last_maintanance_date,
            next_maintanance_date: request.next_maintanance_date,
            updated_at: new Date().toISOString()
        }
    })
    return mechine
}
export const deleteMechine = async (id:string) => {
    const mechine = await prisma.mechines.delete({where: {id}})
    return mechine
}