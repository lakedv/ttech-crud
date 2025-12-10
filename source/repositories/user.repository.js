import db from "../data/db.context.js";

class UserRepository {

    constructor() {
        this.usersRef = db.collection("users");
    }

    async findByEmail(email) {
        const snapshot = await this.usersRef.where("email", "==", email).get();

        if (snapshot.empty) return null;

        return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
    }

    async createUser(user) {
        const docRef = await this.usersRef.add(user);
        return { id: docRef.id, ...user };
    }
}

export default UserRepository;