import { getHealthStatus } from "../Utility/healthCheck.js";

export const healthCheck = (req, res) => {
    const healthData = getHealthStatus();
    res.status(200).json(healthData);
}