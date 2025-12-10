class ProductResponse {
    constructor(id, name, price, description, stock, category, createdAt, createdBy) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.category = category;
        this.createdAt = createdAt;
        this.createdBy = createdBy;
    }
}

export default ProductResponse;