import { BaseException } from "./BaseException";

export class ValidationException extends BaseException{
    constructor(errors = []){
        super("Validation failed", 400);
        this.errors = errors;
    }
}