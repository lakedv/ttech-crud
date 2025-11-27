class ProductUpdateRequest {
    constructor(name, price, description, stock, category) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.category = category;
    }
}

export default ProductUpdateRequest;