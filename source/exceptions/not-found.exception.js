import { BaseException } from "./base.exception.js";

export class NotFoundException extends BaseException{
    constructor(message = "Resource not Found"){
        super(message, 404);
    }
}