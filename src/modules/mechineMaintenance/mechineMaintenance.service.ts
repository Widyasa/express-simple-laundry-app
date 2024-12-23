import {
    deleteMechineMaintenance,
    editMechineMaintenance,
    findMechineMaintenance,
    findMechineMaintenanceById,
    insertMechineMaintenance
} from "./mechineMaintenance.repository";
import {RequestGetAll} from "../../types/requestGetAll";
import {MechineMaintenance} from "../../types/MechineMaintenance";

export const getAllMechineMaintenance = async (request:any) => {
    return await findMechineMaintenance(request);
};
export const getMechineMaintenanceById = async (id:string) => {
    return await findMechineMaintenanceById(id);
}
export const createMechineMaintenance = async (request:MechineMaintenance) => {
    return await insertMechineMaintenance(request);
}
export const updateMechineMaintenance = async (id:string, request:MechineMaintenance) => {
    return await editMechineMaintenance(id, request);
}
export const destroyMechineMaintenance = async (id:string) => {
    return await deleteMechineMaintenance(id);
}