import express from "express";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";

const router = express.Router();

// Mount admin routes
router.use("/adm", adminRoutes);

// Mount user routes
router.use("/usr", userRoutes);

export default router;
