import {prisma} from "../../utils/prisma";
import {Prisma, MechineCategories} from "@prisma/client";
import {createPaginator} from "prisma-pagination";
import {RequestGetAll} from "../../types/requestGetAll";
import {MechineCategory} from "../../types/MechineCategory";

export const findMechineCategory = async (request:RequestGetAll) => {
    let mechineCategory
    const paginate = createPaginator({perPage: 10})
    mechineCategory = await paginate<MechineCategories, Prisma.MechineCategoriesFindManyArgs>(
        prisma.mechineCategories,
        {
            where: {
                name: request.search,
            }
        },
        { page: request.page }
    )
    return mechineCategory
}
export const findMechineCategoryById = async (id:string) => {
    const mechineCategory = await prisma.mechineCategories.findFirst({where: {id}})
    return mechineCategory
}
export const insertMechineCategory = async (request:MechineCategory) => {
    const mechineCategory = await prisma.mechineCategories.create({
        data: {
            name: request.name
        }
    });
    return mechineCategory
}
export const editMechineCategory = async (id:string, request:MechineCategory) => {
    const mechineCategory =  await prisma.mechineCategories.update({
        where : {
            id
        },
        data : {
            name: request.name,
            updated_at: new Date().toISOString()
        }
    })
    return mechineCategory
}
export const deleteMechineCategory = async (id:string) => {
    const mechineCategory = await prisma.mechineCategories.delete({where: {id}})
    return mechineCategory
}