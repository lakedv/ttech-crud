class Product {
    constructor({id = null, name, price, description, stock})
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
    }
}

export default Product;