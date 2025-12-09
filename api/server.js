import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import {userRoutes} from "../source/Routes/UserRoutes.js"; 
import productRoutes from "../source/Routes/ProductRoutes.js";
import healthRoutes from "../source/Routes/healthRoutes.js"
import { errorHandlerMiddleware } from "../source/Middleware/errorHandlerMiddleware.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/health", healthRoutes);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res)=>{
    res.send("API Healthy - Vercel Deployment")
})

app.use(errorHandlerMiddleware);

export default app;