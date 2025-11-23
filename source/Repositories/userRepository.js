import { collection, addDoc, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import db from "../Data/DbContext.js";

class UserRepository {
    constructor(){
        this.collectionRef = collection(db, "users");
    }

    async addU(user){
        const docRef = await addDoc(this.collectionRef, {...user});
        return {id: docRef.id, ...user};
    }

    async findByEmail(email){
        const q = query(this.collectionRef, where("email", "==", email));
        const snapshot = await getDocs(q);

        if(snapshot.empty) return null;

        const docSnap = snapshot.docs[0];
        return {id: docSnap.id, ...docSnap.data()};
    }

    async getById(id){
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        return {id: docSnap.id, ...docSnap.data()};
    }
}

export default new UserRepository();