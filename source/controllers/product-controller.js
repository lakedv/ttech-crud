import ProductService from "../services/product-service.js";

class ProductController{
    constructor(){
        this.productService = new ProductService();
    }

    createProduct = async (req, res) => {
        try {
            const userId = req.userId;
            const data = req.body;

            const product = await this.productService.createProduct(userId, data);
            return res.status(201).json(product);
        } catch(error){
            return res.status(400).json({message: error.message});
        }
    };

    getAllProducts = async (req, res) => {
        try{
            const products = await this.productService.getAllProducts();
            return res.status(200).json(products);
        } catch(error){
            return res.status(500).json({message: error.message});
        }
    };

    getProductsByUser = async (req, res) => {
    try{
        const userId = req.userId;
        const products = await this.productService.getProductsByUser(userId)
        return res.status(200).json(products);
    }catch(error){
        return res.status(500).json({message: error.message});
        }
    }

    getProductById = async (req, res) => {
        try{
            const userId = req.userId;
            const {id} = req.params;
            
            const product = await this.productService.getById(userId, id);
            return res.status(200).json(product);
        } catch(error){
            return res.status(400).json({message: error.message});
        }
    };

    updateProduct = async (req, res) => {
        try {
            const userId = req.userId;
            const {id} = req.params;
            const data = req.body;

            const updatedProduct = await this.productService.updateProduct(userId, id, data);
            return res.status(200).json(updatedProduct);
        } catch(error){
            return res.status(400).json({message: error.message});
        }
    };

    deleteProduct = async (req, res) => {
        try {
            const userId = req.userId;
            const {id} = req.params;

            const result = await this.productService.deleteProduct(userId, id);
            return res.status(200).json(result);
        } catch(error){
            return res.status(400).json({message: error.message});
        }
    };
}

export default new ProductController();