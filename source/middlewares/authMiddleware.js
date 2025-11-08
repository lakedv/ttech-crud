import {verifyToken} from "../utils/jwt.js";

export const authenticate = (req, res, next) =>{
    const authHeader = req.headers.authorization;
    
    if(!authHeader || !authHeader.statsWith("Bearer ")){
        return res.status(401).json({message: "Token missing or invalid."});
    }

    const token = authHeader.split(" ")[1];

    try{
        const decoded = verifiToken(token);
        req.user = decoded;
        next();
    } catch (error){
        res.status(401).json({message: "Invalid or expired token."});
    }
}