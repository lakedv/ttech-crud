export class BaseException extends Error {
    constructor(message, StatusCode){
        super(message)
        this.statusCode = statusCode;
    }
}