import { getAllUsers, deleteUser } from "../services/userService.js";

export const getUsers = (req, res)=> {
    res.status(200).json({users: getAllUsers()});
};

export const removeUser = (req, res) =>{
    const id = parseInt(req.params.id);
    deleteUser(id);
    res.status(200).json({message: "User Deleted."});
}