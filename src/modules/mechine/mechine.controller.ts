import {sendResponse} from "../../utils/sendResponse";
import {
    createMechine, destroyMechine,
    getAllMechine,
    getMechineById,
    updateMechine
} from "./mechine.service";
import * as express from "express";
export const mechineRoute = express.Router();
mechineRoute.get("/", async (req, res) => {
    const mechine = await getAllMechine(req.query);
    return sendResponse(res, true, mechine, 'fetch mechine success', 200);
});
mechineRoute.get("/:id", async (req, res) => {
    const mechine = await getMechineById(req.params.id);
    return sendResponse(res, true, mechine, 'fetch mechine success', 200);
})
mechineRoute.post("/", async (req, res) => {
    const mechine = await createMechine(req.body);
    return sendResponse(res, true, mechine, 'create mechine success', 201);
})
mechineRoute.patch("/:id", async (req, res) => {
    const mechine = await updateMechine(req.params.id,req.body);
    return sendResponse(res, true, mechine, 'update mechine success', 200);
})
mechineRoute.delete("/:id", async (req, res) => {
    const mechine = await destroyMechine(req.params.id);
    return sendResponse(res, true, mechine, 'delete mechine success', 200);
})

