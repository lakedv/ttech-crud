import { BaseException } from "./base.exception.js";

export class UnauthorizedException extends BaseException{
    constructor(message = "Access Denied."){
        super(message, 403);
    }
}