import ProductRepository from "../repositories/product.repository.js";
import ProductValidator from "../validators/product-validator.js";

import ProductCreateRequest from "../dtos/product-create.request.js";
import ProductUpdateRequest from "../dtos/product-update.request.js";
import ProductResponse from "../dtos/product.response.js";

class ProductService{
    constructor() {
        this.repository = new ProductRepository();
    }

    async createProduct(userId, data){
        const productDto = new ProductCreateRequest(
            data.name,
            data.price,
            data.description,
            data.stock,
            data.category
        );

        ProductValidator.validateCreate(data);

        const newProduct = {
            ...productDto,
            createdAt: new Date().toISOString(),
            createdBy: userId
        };

        const created = await this.repository.create(newProduct);

        return new ProductResponse(
            created.id,
            created.name,
            created.price,
            created.description,
            created.stock,
            created.category,
            created.createdAt,
            created.createdBy
        );
    }

    async getAllProducts(){
        const products = await this.repository.getAll();

    return products.map(
        p =>
            new ProductResponse(
                p.id,
                p.name,
                p.price,
                p.description,
                p.stock,
                p.category,
                p.createdAt,
                p.createdBy
            )
    );
    }

    async getProductsByUser(userId){
        const products = await this.repository.getAllByUser(userId);

        return products.map(
            p =>
                new ProductResponse(
                    p.id,
                    p.name,
                    p.price,
                    p.description,
                    p.stock,
                    p.category,
                    p.createdAt,
                    p.createdBy
                )
        );
    }

    async getById(userId, productId){
        const product = await this.repository.getById(productId);
        if(!product){
            throw new Error("Product not Found");
        }
        if(product.createdBy !== userId){
            throw new Error("Access Denied; This product doesn't belong to you.")
        }

        return new ProductResponse(
            product.id,
            product.name,
            product.description,
            product.stock,
            product.category,
            product.createdAt,
            product.createdBy
        );
    }

    async updateProduct(userId, productId, data){
        const product = await this.repository.getById(productId);

                if(!product){
            throw new Error("Product not Found");
        }
        if(product.createdBy !== userId){
            throw new Error("Access Denied; This product doesn't belong to you.")
        }

        const updateDto = new ProductUpdateRequest(
            data.name,
            data.price,
            data.description,
            data.stock,
            data.category
        );

        ProductValidator.validateUpdate(data);

        const updated = await this.repository.update(productId, { ...updateDto});

        return new ProductResponse(
            updated.id,
            updated.name,
            updated.price,
            updated.description,
            updated.stock,
            updated.category,
            updated.createdAt,
            updated.createdBy
        );
    }

    async deleteProduct(userId, productId){
       const product = await this.repository.getById(productId);
                        if(!product){
            throw new Error("Product not Found");
        }
        if(product.createdBy !== userId){
            throw new Error("Access Denied; This product doesn't belong to you.")
        }

        await this.repository.delete(productId);

        return {message: "Product Deleted."};
    }
}

export default ProductService;