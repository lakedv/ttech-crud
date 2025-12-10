import { BaseException } from "./BaseException.js";

export class FirestoreException extends BaseException{
    constructor(message = "Firestore internal Error", originalError = null){
       super(message, 500);
       this.originalError = originalError; 
    }
}