import express from "express";
import {userRoutes} from "./user.route";
import {serviceCategoryRoute} from "../modules/serviceCategory/serviceCategory.controller";
import {authMiddleware} from "../middleware/auth";
import {serviceRoute} from "../modules/service/service.controller";

export const router = express.Router();
router.use('/users', userRoutes);

router.use(authMiddleware)
router.use('/service-category', serviceCategoryRoute);
router.use('/service', serviceRoute);