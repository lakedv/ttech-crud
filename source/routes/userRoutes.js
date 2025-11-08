import express from "express";
import { getUsers, removeUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getUsers);
router.delete("/:id", authenticate, removeUser);

export default router;