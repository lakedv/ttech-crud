import express from "express";
import routes from "./source/routes/router.js";
import dotenv from "dotenv";

import authRoutes from "./source/routes/authRoutes.js";
import userRoutes from "./source/routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message:"Talento TECH API Working OK.",
        docs: "/api",
        health:"/api/health",
    });
});

app.use("/api", routes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
