class User{
    constructor({id, email, username, passwordHash}){
        this.id = id;
        this.email = email;
        this.username = username;
        this.passwordHash = passwordHash;
    }
}

export default User;