import UserService from "../services/user.service.js";
import UserRegisterRequest from "../dtos/user-register.request.js";
import UserLoginRequest from "../dtos/user-login.request.js";

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    register = async (req, res) => {
        try {
            const dto = new UserRegisterRequest(
                req.body.username,
                req.body.email,
                req.body.password
            );

            const result = await this.userService.register(dto);
            return res.status(201).json(result);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    };

    login = async (req, res) => {
        try {
            const dto = new UserLoginRequest(
                req.body.email,
                req.body.password
            );

            const result = await this.userService.login(dto);
            return res.json(result);
        } catch (err) {
            return res.status(400).json({ message: err.message });
        }
    };
}

export default UserController;