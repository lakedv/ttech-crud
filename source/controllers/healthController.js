import { getHealthStatus } from "../utils/healthCheck.js";

export const healthCheck = (req, res) => {
    const healthData = getHealthStatus();
    res.status(200).json(healthData);
}