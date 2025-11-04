import express from "express";
import { home } from "../controllers/homeController.js";
import { healthCheck } from "../controllers/healthController.js";

const router = express.Router();

router.get("/", home);
router.get("/health", healthCheck);

export default router;