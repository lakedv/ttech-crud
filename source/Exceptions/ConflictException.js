import { BaseException } from "./BaseException.js";

export class ConflictException extends BaseException{
    constructor(message = "Conflict"){
        super(message, 409);
    }
}