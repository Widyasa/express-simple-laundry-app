import {prisma} from "../../utils/prisma";
import {Prisma, ServiceCategories} from "@prisma/client";
import {createPaginator} from "prisma-pagination";
import {RequestGetAll} from "../../types/requestGetAll";
import {Service} from "../../types/Service";

export const findService = async (request:RequestGetAll) => {
    let service
    const paginate = createPaginator({perPage: 10})
    service = await paginate<Service, Prisma.ServicesFindManyArgs>(
        prisma.services,
        {
            where: {
                name: request.search,
                price: request.search,
                category: request.search,
                category_id: request.search

            },
            include: {
                category: true
            }
        },
        { page: request.page }
    )
    return service
}
export const findServiceById = async (id:string) => {
    const service = await prisma.services.findFirst({
        where: {id},
        include : {
            category: true
        }
    })
    return service
}
export const insertService = async (request:Service) => {
    const service = await prisma.services.create({
        data: {
            name: request.name,
            price: parseInt(request.price),
            category_id: request.category_id,
        }
    });
    return service
}
export const editService = async (id:string, request:Service) => {
    const service =  await prisma.services.update({
        where : {
            id
        },
        data : {
            name: request.name,
            price: parseInt(request.price),
            category_id: request.category_id,
            updated_at: new Date().toISOString()
        }
    })
    return service
}
export const deleteService = async (id:string) => {
    const service = await prisma.services.delete({where: {id}})
    return service
}