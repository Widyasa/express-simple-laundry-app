import {prisma} from "../../utils/prisma";
import {Prisma, ServiceCategories} from "@prisma/client";
import {createPaginator} from "prisma-pagination";
import {RequestGetAll} from "../../types/requestGetAll";
import {ServiceCategory} from "../../types/ServiceCategory";

export const findServiceCategory = async (request:RequestGetAll) => {
    let serviceCategory
    const paginate = createPaginator({perPage: 10})
    serviceCategory = await paginate<ServiceCategories, Prisma.ServiceCategoriesFindManyArgs>(
            prisma.serviceCategories,
            {
                where: {
                    name: request.search,
                }
            },
            { page: request.page }
        )
    return serviceCategory
}
export const findServiceCategoryById = async (id:string) => {
    const serviceCategory = await prisma.serviceCategories.findFirst({where: {id}})
    return serviceCategory
}
export const insertServiceCategory = async (request:ServiceCategory) => {
     const serviceCategory = await prisma.serviceCategories.create({
        data: {
            name: request.name
        }
    });
     return serviceCategory
}
export const editServiceCategory = async (id:string, request:ServiceCategory) => {
    const serviceCategory =  await prisma.serviceCategories.update({
        where : {
            id
        },
        data : {
            name: request.name,
            updated_at: new Date().toISOString()
        }
    })
    return serviceCategory
}
export const deleteServiceCategory = async (id:string) => {
    const serviceCategory = await prisma.serviceCategories.delete({where: {id}})
    return serviceCategory
}