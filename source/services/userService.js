import bcrypt from "bcrypt";

let users = [];

export const createUser = async (email, password) => {
    const existing = users.find(u => u.email === email);
    if(existing) throw new Error("User already exists");

    const hashed = await bcrypt.hash(password, 10);
    const newUser = {id: users.length + 1, email, password: hashed};
    users.push(newUser);
    return newUser;
};

export const findUserByEmail = (email) =>{
    return users.find(u => u.email === email);
};

export const getAllUsers = () => {
    return users.map(u => ({id: u.id, email: u.email}));
};

export const deleteUser = (id) => {
    users = users.filter(u => u.id !== id);
};
