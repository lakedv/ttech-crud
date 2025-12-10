import { ValidationException } from "../Exceptions/ValidationException.js";
import { NotFoundException } from "../Exceptions/NotFoundException.js";
import { UnauthorizedException } from "../Exceptions/UnauthorizedException.js";
import { BadRequestException } from "../Exceptions/BadRequestException.js";
import { ConflictException } from "../Exceptions/ConflictException.js";
import { FirestoreException } from "../Exceptions/FirestoreException.js";

export function errorHandlerMiddleware(err, req, res, next){
    if (err instanceof ValidationException){
        return res.status(400).json({
            errorType: "Validation Error",
            errors: err.errors
        });
    }

    if (err instanceof NotFoundException){
        return res.status(404).json({
            errorType: "Not Found",
            message: err.message
        });
    }

    if (err instanceof UnauthorizedException){
        return res.status(401).json({
            errorType: "Unauthorized",
            message: err.message
        });
    }
    if (err instanceof BadRequestException){
        return res.status(400).json({
            errorType: "Bad Request",
            message: err.message
        });
    }
    if(err instanceof ConflictException){
        return res.status(409).json({
            errorType: "Conflict",
            message: err.message
        });
    }
    if(err instanceof FirestoreException){
        return res.status(500).json({
            errorType: "Firestore Error",
            message: err.message
        });
    }
    
    console.error("Unexpected error:", err);
    return res.status(500).json({
        errorType: "Server error",
        message: "Internal server error"
    });
}