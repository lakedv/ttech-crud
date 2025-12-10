import { Router } from "express";
import { getHealth } from "../Controllers/healthController.js";

const router = Router();

router.get("/", getHealth);

export default router;