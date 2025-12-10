import { getHealthStatus } from "../utility/health-check.js";

export const getHealth = async (req, res) => {
    const health = await getHealthStatus();

    if (health.services.firestore.status === "Disconnected") {
        return res.status(503).json({
            ...health,
            status: "Unhealthy",
            message: "Database connection failed.",
        });
    }

    return res.status(200).json(health);
};