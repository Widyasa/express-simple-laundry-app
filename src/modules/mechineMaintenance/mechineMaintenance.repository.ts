import {prisma} from "../../utils/prisma";
import {Prisma, MechineCategories, MechineMaintenances} from "@prisma/client";
import {createPaginator} from "prisma-pagination";
import {RequestGetAll} from "../../types/requestGetAll";
import {MechineMaintenance} from "../../types/MechineMaintenance";

export const findMechineMaintenance = async (request:RequestGetAll) => {
    let mechineMaintenance
    const paginate = createPaginator({perPage: 10})
    mechineMaintenance = await paginate<MechineMaintenances, Prisma.MechineMaintenancesFindManyArgs>(
        prisma.mechineMaintenances,
        {
            where: {
                maintenance_date: request.search,
            }
        },
        { page: request.page }
    )
    return mechineMaintenance
}
export const findMechineMaintenanceById = async (id:string) => {
    const mechineMaintenance = await prisma.mechineMaintenances.findFirst({where: {id}})
    return mechineMaintenance
}
export const insertMechineMaintenance = async (request:MechineMaintenance) => {
    const mechineMaintenance = await prisma.mechineMaintenances.create({
        data: {
            mechine_id: request.mechine_id,
            description: request.description,
            maintenance_date: request.maintenance_date,
        }
    });
    await prisma.mechines.update({
        where: {
            id: request.mechine_id,
        },
        data: {
            next_maintanance_date: request.next_maintenance
        }
    })
    return mechineMaintenance
}
export const editMechineMaintenance = async (id:string, request:MechineMaintenance) => {
    const mechineMaintenance =  await prisma.mechineMaintenances.update({
        where : {
            id
        },
        data : {
            mechine_id: request.mechine_id,
            description: request.description,
            maintenance_date: request.maintenance_date,
            updated_at: new Date().toISOString()
        }
    })
    await prisma.mechines.update({
        where: {
            id: request.mechine_id,
        },
        data: {
            next_maintanance_date: request.next_maintenance
        }
    })
    return mechineMaintenance
}
export const deleteMechineMaintenance = async (id:string) => {
    const mechineMaintenance = await prisma.mechineMaintenances.delete({where: {id}})
    return mechineMaintenance
}