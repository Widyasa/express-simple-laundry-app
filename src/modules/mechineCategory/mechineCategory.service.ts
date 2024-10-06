import {
    deleteMechineCategory,
    editMechineCategory,
    findMechineCategory,
    findMechineCategoryById,
    insertMechineCategory
} from "./mechineCategory.repository";
import {RequestGetAll} from "../../types/requestGetAll";
import {MechineCategory} from "../../types/MechineCategory";

export const getAllMechineCategory = async (request:any) => {
    return await findMechineCategory(request);
};
export const getMechineCategoryById = async (id:string) => {
    return await findMechineCategoryById(id);
}
export const createMechineCategory = async (request:MechineCategory) => {
    return await insertMechineCategory(request);
}
export const updateMechineCategory = async (id:string, request:MechineCategory) => {
    return await editMechineCategory(id, request);
}
export const destroyMechineCategory = async (id:string) => {
    return await deleteMechineCategory(id);
}