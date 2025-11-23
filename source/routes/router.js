import express from "express";
import { home } from "../Controllers/homeController.js";
import { healthCheck } from "../Controllers/healthController.js";

const router = express.Router();

router.get("/", home);
router.get("/health", healthCheck);

export default router;