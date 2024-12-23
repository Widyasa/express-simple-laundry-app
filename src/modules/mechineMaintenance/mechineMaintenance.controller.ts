import {sendResponse} from "../../utils/sendResponse";
import {
    createMechineMaintenance, destroyMechineMaintenance,
    getAllMechineMaintenance,
    getMechineMaintenanceById,
    updateMechineMaintenance
} from "./mechineMaintenance.service";
import * as express from "express";
export const mechineMaintenanceRoute = express.Router();
mechineMaintenanceRoute.get("/", async (req, res) => {
    const mechineMaintenance = await getAllMechineMaintenance(req.query);
    return sendResponse(res, true, mechineMaintenance, 'fetch machine maintenance success', 200);
});
mechineMaintenanceRoute.get("/:id", async (req, res) => {
    const mechineMaintenance = await getMechineMaintenanceById(req.params.id);
    return sendResponse(res, true, mechineMaintenance, 'fetch machine maintenance success', 200);
})
mechineMaintenanceRoute.post("/", async (req, res) => {
    const mechineMaintenance = await createMechineMaintenance(req.body);
    return sendResponse(res, true, mechineMaintenance, 'create machine maintenance success', 201);
})
mechineMaintenanceRoute.patch("/:id", async (req, res) => {
    const mechineMaintenance = await updateMechineMaintenance(req.params.id,req.body);
    return sendResponse(res, true, mechineMaintenance, 'update machine maintenance success', 200);
})
mechineMaintenanceRoute.delete("/:id", async (req, res) => {
    const mechineMaintenance = await destroyMechineMaintenance(req.params.id);
    return sendResponse(res, true, mechineMaintenance, 'delete mechine maintenance success', 200);
})

