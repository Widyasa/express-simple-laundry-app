import {sendResponse} from "../../utils/sendResponse";
import {
    createService, destroyService,
    getAllService,
    getServiceById,
    updateService
} from "./service.service";
import * as express from "express";
export const serviceRoute = express.Router();
serviceRoute.get("/", async (req, res) => {
    const service = await getAllService(req.query);
    return sendResponse(res, true, service, 'fetch service category success', 200);
});
serviceRoute.get("/:id", async (req, res) => {
    const service = await getServiceById(req.params.id);
    return sendResponse(res, true, service, 'fetch service category', 200);
})
serviceRoute.post("/", async (req, res) => {
    const service = await createService(req.body);
    return sendResponse(res, true, service, 'create service category success', 201);
})
serviceRoute.patch("/:id", async (req, res) => {
    const service = await updateService(req.params.id,req.body);
    return sendResponse(res, true, service, 'update service category success', 200);
})
serviceRoute.delete("/:id", async (req, res) => {
    const service = await destroyService(req.params.id);
    return sendResponse(res, true, service, 'delete success', 200);
})

