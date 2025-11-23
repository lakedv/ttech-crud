import os from "os";
import { memoryUsage } from "process";

const serverStartTime = new Date();

export const getHealthStatus = () => {
    const uptimeSeconds = process.uptime();
    const memoryUsage = process.memoryUsage();
    const currentTime = new Date();


return {
    status: "Healthy",
    message: "Talento Tech API is running Smoothly.",
    system:{
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        nodeVersion: process.version,
    },
    metrics: {
        uptime: `${Math.floor(uptimeSeconds / 60)} min ${Math.floor(uptimeSeconds % 60)}sec`,
        memoryUsedMB: (memoryUsage.rss / 1024 / 1024).toFixed(2),
        heapUsedMB: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2),
        externalMemoryMB: (memoryUsage.external / 1024 / 1024).toFixed(2),
    },
    timestamps: {
        serverStartedAt: serverStartTime.toISOString(),
        currentTime: currentTime.toISOString(),
    },
    };
};