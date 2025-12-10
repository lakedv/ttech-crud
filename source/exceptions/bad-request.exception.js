import { BaseException } from "./base.exception.js";

export class BadRequestException extends BaseException{
    constructor(message = "Bad Request"){
        super(message, 400);
    }
}