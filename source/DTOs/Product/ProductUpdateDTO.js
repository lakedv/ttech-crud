class ProductUpdateDTO {
    constructor({name, price, description, stock}){
        this.name = name ?? null;
        this.price = price ?? null;
        this.description = description ?? null;
        this.stock = stock ?? null;
    }
}

export default ProductUpdateDTO;