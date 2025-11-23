import express from "express";
import { getUsers, removeUser } from "../Controllers/userController.js";
import { authenticate } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authenticate, getUsers);
router.delete("/:id", authenticate, removeUser);

export default router;