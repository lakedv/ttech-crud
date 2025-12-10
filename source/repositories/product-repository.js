import db from "../data/dbContext.js";

class ProductRepository {
    constructor(){
        this.productsRef = db.collection("products");
    }

    async create(product){
        const docRef = await this.productsRef.add(product);
        return {id: docRef.id, ...product};
    }

    async getAll(){
        const snapshot = await this.productsRef.get();
        if (snapshot.empty) return [];

        return snapshot.docs.map(doc=>({
            id: doc.id,
            ...doc.data()
        }));
    }
    
    async getAllByUser(userId){
        const snapshot = await this.productsRef
        .where("createdBy", "==", userId)
        .get();

        if(snapshot.empty) return [];

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    }

    async getById(id){
        const doc = await this.productsRef.doc(id).get();
        if(!doc.exists) return null;

        return {id: doc.id, ...doc.data()};
    }

    async update(id, data){
        const docRef = this.productsRef.doc(id);
        await docRef.update(data);
        const updated = await docRef.get();
        return {id: updated.id, ...updated.data()};
    }

    async delete(id){
        await this.productsRef.doc(id).delete();
        return true;
    }
}

export default ProductRepository;