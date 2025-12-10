import { ValidationException } from "../Exceptions/ValidationException.js";

class ProductValidator {
    validateRequired(field, value, errors){
        if(value === undefined || value === null || value === ""){
            errors.push({field, message: `${field} is required`});
        }
    }

    validateNumber(field, value, errors){
        if (typeof value !== "number" || isNaN(value)){
            errors.push({field, message: `${field} must be a valid number`})
        }
    }

    validatePositive(field, value, errors){
        if(value <= 0){
            errors.push({field, message: `${field} must be greater than zero`})
        }
    }

    validateCreate(data){
        const errors = [];

        this.validateRequired("name", data.name, errors);
        this.validateRequired("price", data.price, errors);
        this.validateRequired("stock", data.stock, errors);
        this.validateRequired("category", data.category, errors);

        if(data.price !== undefined){
            this.validateNumber("price", data.price, errors);
            this.validatePositive("price", data.price, errors);
        }

        if (data.stock !== undefined){
            this.validateNumber("stock", data.stock, errors);
        }

        if(errors.length > 0) throw new ValidationException(errors);
    }

    validateUpdate(data){
        const errors = [];

        if (data.name !== undefined && data.name.trim() === ""){
            errors.push({field: "name", message: "Name can not be empty."});
        }

        if (data.price !== undefined){
            this.validateNumber("price", data.price, errors);
            this.validatePositive("price", data.price, errors);
        }

        if (data.stock !== undefined){
            this.validateNumber("stock", data.stock, errors);
        }

        if (data.category !== undefined && data.category.trim() === ""){
            errors.push({field: "category", message: "Category can not be empty."})
        }

        if (errors.length > 0) throw new ValidationException(errors);
    }
}

export default new ProductValidator();