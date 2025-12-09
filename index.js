import dotenv from "dotenv";
import app from "./api/server.js";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`API Healthy - Local Deployment - http://localhost:${PORT}`)
});