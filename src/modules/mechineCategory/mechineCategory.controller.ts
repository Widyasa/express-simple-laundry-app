import {sendResponse} from "../../utils/sendResponse";
import {
    createMechineCategory, destroyMechineCategory,
    getAllMechineCategory,
    getMechineCategoryById,
    updateMechineCategory
} from "./mechineCategory.service";
import * as express from "express";
export const mechineCategoryRoute = express.Router();
mechineCategoryRoute.get("/", async (req, res) => {
    const mechineCategory = await getAllMechineCategory(req.query);
    return sendResponse(res, true, mechineCategory, 'fetch machine success', 200);
});
mechineCategoryRoute.get("/:id", async (req, res) => {
    const mechineCategory = await getMechineCategoryById(req.params.id);
    return sendResponse(res, true, mechineCategory, 'fetch machine success', 200);
})
mechineCategoryRoute.post("/", async (req, res) => {
    const mechineCategory = await createMechineCategory(req.body);
    return sendResponse(res, true, mechineCategory, 'create machine success', 201);
})
mechineCategoryRoute.patch("/:id", async (req, res) => {
    const mechineCategory = await updateMechineCategory(req.params.id,req.body);
    return sendResponse(res, true, mechineCategory, 'update machine success', 200);
})
mechineCategoryRoute.delete("/:id", async (req, res) => {
    const mechineCategory = await destroyMechineCategory(req.params.id);
    return sendResponse(res, true, mechineCategory, 'delete success', 200);
})

