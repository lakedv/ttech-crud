import { BaseException } from "./BaseException";

export class UnauthorizedException extends BaseException{
    constructor(message = "Access Denied."){
        super(message, 403);
    }
}