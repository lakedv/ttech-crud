import express from "express";
import routes from "./source/routes/router.js";
import dotenv from "dotenv";

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

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
