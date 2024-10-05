import {
    deleteServiceCategory,
    editServiceCategory,
    findServiceCategory,
    findServiceCategoryById,
    insertServiceCategory
} from "./serviceCategory.repository";
import {RequestGetAll} from "../../types/requestGetAll";
import {ServiceCategory} from "../../types/ServiceCategory";

export const getAllServiceCategory = async (request:any) => {
    return await findServiceCategory(request);
};
export const getServiceCategoryById = async (id:string) => {
    return await findServiceCategoryById(id);
}
export const createServiceCategory = async (request:ServiceCategory) => {
    return await insertServiceCategory(request);
}
export const updateServiceCategory = async (id:string, request:ServiceCategory) => {
    return await editServiceCategory(id, request);
}
export const destroyServiceCategory = async (id:string) => {
    return await deleteServiceCategory(id);
}