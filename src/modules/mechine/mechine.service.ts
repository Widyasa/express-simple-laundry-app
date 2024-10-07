import {
    deleteMechine,
    editMechine,
    findMechine,
    findMechineById,
    insertMechine
} from "./mechine.repository";
import {RequestGetAll} from "../../types/requestGetAll";
import {Mechine} from "../../types/Mechine";

export const getAllMechine = async (request:any) => {
    return await findMechine(request);
};
export const getMechineById = async (id:string) => {
    return await findMechineById(id);
}
export const createMechine = async (request:Mechine) => {
    return await insertMechine(request);
}
export const updateMechine = async (id:string, request:Mechine) => {
    return await editMechine(id, request);
}
export const destroyMechine = async (id:string) => {
    return await deleteMechine(id);
}