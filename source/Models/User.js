class User{
    constructor({id = null, email, name, role = "user"}){
        this.id = id;
        this.email = email;
        this.name = name;
        this.role = role;
    }
}

export default User;