import express from "express";
import UserController from "../Controllers/UserController.js";

const router = express.Router();
const controller = new UserController();

router.post("/register", controller.register);
router.post("/login", controller.login);

export default router;