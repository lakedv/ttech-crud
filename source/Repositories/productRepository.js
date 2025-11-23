import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "../Data/DbContext.js";

class ProductRepository {
    constructor() {
        this.collectionRef = collection(db, "products");
    }
    async addP(product){
        const docRef = await addDoc(this.collectionRef, {...product});
        return {id: docRef.id, ...product};
    }

    async getAll(){
        const snapshot = await getDocs(this.collectionRef);
        return snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
    }

    async getById(id){
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) return null;
        return {id: docSnap.id, ...docSnap.data()};
    }

    async updateP(id, updates){
        const docRef = doc(db, "products", id);
        await updateDoc(docRef, updates);
        return true;
    }

    async deleteP(id){
        const docRef = doc(db, "products", id);
        await deleteDoc(docRef);
        return true;
    }
}

export default new ProductRepository();