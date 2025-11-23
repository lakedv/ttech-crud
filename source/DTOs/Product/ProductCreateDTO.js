class ProductCreateDTO{
    constructor({name, price, description, stock}){
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }
}

export default ProductCreateDTO;