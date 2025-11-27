import { BaseException } from "./BaseException";

export class NotFoundException extends BaseException{
    constructor(message = "Resource not Found"){
        super(message, 404);
    }
}