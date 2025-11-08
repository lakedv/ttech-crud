import {createUser, findUserByEmail} from "../services/userService.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
    try{
        const {email, password} = req.body;
        if(!email || !password ){
            return res.status(400).json({message: "Email and Password Required."});
        }

        const newUser = await createUser(email, password);
        const token = generateToken(newUser);
        res.status(201).json({message: "User Registered", token});
    } catch (error){
        res.status(400).json({error: error.message})
    }
};

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = findUserByEmail(email);
        if (!user) return res.status(404).json({message: "User not found."});

        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return res.status(401).json({message: "Invalid Credentials."});

        const token = generateToken(user);
        res.status(200).json({message: "Login Successful"});
    } catch(error){
        res.status(500).json({error: error.message});
    }
}