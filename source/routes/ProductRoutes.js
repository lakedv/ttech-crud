import {Router} from "express";
import {authMiddleware} from "../Middleware/authMiddleware.js";
import ProductController from "../Controllers/ProductController.js";

const router = Router();

router.use(authMiddleware);

router.get("/user", ProductController.getProductsByUser);

router.get("/", ProductController.getAllProducts)
router.get("/:id", ProductController.getProductById);

router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

export default router;