import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "../source/routes/user-routes.js"; 
import productRoutes from "../source/routes/product-routes.js";
import healthRoutes from "../source/routes/health-routes.js"
import errorHandlerMiddleware from "../source/Middleware/errorHandlerMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

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


app.listen(PORT, () => {
  console.log(`Api is listening on http://localhost:${PORT}/`)
})