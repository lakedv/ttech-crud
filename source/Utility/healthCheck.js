import os from "os";
import { performance } from "perf_hooks";
import db from "../Data/DbContext.js"

const serverStartTime = new Date();

const checkFirestore = async () => {
    const start = performance.now();
    try {
        await db.collection("health_test").limit(1).get();

        return {
            status: "Connected",
            latencyMs: (performance.now() - start).toFixed(2),
        };
    } catch (error) {
        return {
            status: "Disconnected",
            error: error.message,
        };
    }
};

const checkEnvVariables = () => {
    const required = ["FIREBASE_PROJECT_ID", "FIREBASE_PRIVATE_KEY", "FIREBASE_CLIENT_EMAIL"];

    const missing = required.filter((env) => !process.env[env]);

    return {
        missing,
        allPresent: missing.length === 0,
    };
};

const checkExternalService = async (url = "https://google.com") => {
    const start = performance.now();
    try {
        const response = await fetch(url, { method: "GET" });

        return {
            url,
            status: "Reachable",
            httpStatus: response.status,
            latencyMs: (performance.now() - start).toFixed(2),
        };
    } catch (error) {
        return {
            url,
            status: "Unreachable",
            error: error.message,
        };
    }
};

const checkInternalLatency = () => {
    const start = performance.now();
    for (let i = 0; i < 500000; i++) {}
    return `${(performance.now() - start).toFixed(2)} ms`;
};

const getSystemMetrics = () => {
    const memory = process.memoryUsage();

    return {
        cpuCount: os.cpus().length,
        uptimeSeconds: process.uptime(),
        memoryUsedMB: (memory.rss / 1024 / 1024).toFixed(2),
        heapUsedMB: (memory.heapUsed / 1024 / 1024).toFixed(2),
        externalMemoryMB: (memory.external / 1024 / 1024).toFixed(2),
        loadAverage: os.loadavg(), // Promedio 1, 5 y 15 minutos
        freeMemoryMB: (os.freemem() / 1024 / 1024).toFixed(2),
        totalMemoryMB: (os.totalmem() / 1024 / 1024).toFixed(2),
    };
};

export const getHealthStatus = async () => {
    const firestoreStatus = await checkFirestore();
    const googleStatus = await checkExternalService();
    const envStatus = checkEnvVariables();
    const internalLatency = checkInternalLatency();
    const systemMetrics = getSystemMetrics();

    return {
        status: "Healthy",
        message: "API running smoothly with extended monitoring.",
        environment: process.env.NODE_ENV || "development",

        services: {
            firestore: firestoreStatus,
            externalService: googleStatus,
            envVariables: envStatus,
            internalLatency,
        },

        system: {
            hostname: os.hostname(),
            platform: os.platform(),
            architecture: os.arch(),
            nodeVersion: process.version,
        },

        metrics: systemMetrics,

        timestamps: {
            serverStartedAt: serverStartTime.toISOString(),
            currentTime: new Date().toISOString(),
        },
    };
};