import {
    deleteService,
    editService,
    findService,
    findServiceById,
    insertService
} from "./service.repository";
import {RequestGetAll} from "../../types/requestGetAll";
import {Service} from "../../types/Service";

export const getAllService = async (request:any) => {
    return await findService(request);
};
export const getServiceById = async (id:string) => {
    return await findServiceById(id);
}
export const createService = async (request:Service) => {
    return await insertService(request);
}
export const updateService = async (id:string, request:Service) => {
    return await editService(id, request);
}
export const destroyService = async (id:string) => {
    return await deleteService(id);
}