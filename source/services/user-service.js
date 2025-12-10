import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/user-repository.js";
import UserResponse from "../DTOs/UserResponse.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(dto) {
        const existingUser = await this.userRepository.findByEmail(dto.email);
        if (existingUser) {
            throw new Error("Email already registered");
        }

        const passwordHash = await bcrypt.hash(dto.password, 10);

        const newUser = {
            username: dto.username,
            email: dto.email,
            passwordHash: passwordHash
        };

        const created = await this.userRepository.createUser(newUser);

        return new UserResponse(created.id, created.username, created.email);
    }

    async login(dto) {
        const user = await this.userRepository.findByEmail(dto.email);
        if (!user) {
            throw new Error("Invalid credentials");
        }

        const isMatch = await bcrypt.compare(dto.password, user.passwordHash);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        return {
            token,
            user: new UserResponse(user.id, user.username, user.email)
        };
    }
}

export default UserService;