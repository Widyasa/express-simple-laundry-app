import express from "express";
import {userRoutes} from "./user.route";
import {serviceCategoryRoute} from "../modules/serviceCategory/serviceCategory.controller";
import {authMiddleware} from "../middleware/auth";
import {serviceRoute} from "../modules/service/service.controller";
import {mechineCategoryRoute} from "../modules/mechineCategory/mechineCategory.controller";
import {mechineRoute} from "../modules/mechine/mechine.controller";
import {transactionRoute} from "../modules/transaction/transaction.controller";

export const router = express.Router();
router.use('/users', userRoutes);

router.use(authMiddleware)
router.use('/service-category', serviceCategoryRoute);
router.use('/service', serviceRoute);
router.use('/machine-category', mechineCategoryRoute);
router.use('/machine', mechineRoute);
router.use('/transaction', transactionRoute);