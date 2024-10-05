import {sendResponse} from "../../utils/sendResponse";
import {
    createServiceCategory, destroyServiceCategory,
    getAllServiceCategory,
    getServiceCategoryById,
    updateServiceCategory
} from "./serviceCategory.service";
import * as express from "express";
export const serviceCategoryRoute = express.Router();
serviceCategoryRoute.get("/", async (req, res) => {
    const serviceCategory = await getAllServiceCategory(req.query);
    return sendResponse(res, true, serviceCategory, 'fetch service category success', 200);
});
serviceCategoryRoute.get("/:id", async (req, res) => {
    const serviceCategory = await getServiceCategoryById(req.params.id);
    return sendResponse(res, true, serviceCategory, 'fetch service category', 200);
})
serviceCategoryRoute.post("/", async (req, res) => {
    const serviceCategory = await createServiceCategory(req.body);
    return sendResponse(res, true, serviceCategory, 'create service category success', 201);
})
serviceCategoryRoute.patch("/:id", async (req, res) => {
    const serviceCategory = await updateServiceCategory(req.params.id,req.body);
    return sendResponse(res, true, serviceCategory, 'update service category success', 200);
})
serviceCategoryRoute.delete("/:id", async (req, res) => {
    const serviceCategory = await destroyServiceCategory(req.params.id);
    return sendResponse(res, true, serviceCategory, 'delete success', 200);
})

