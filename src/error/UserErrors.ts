import { CustomError} from './CustomError';

export class InvalidEmail extends CustomError {
    constructor() {
        super(400, 'Invalid email');
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, 'Invalid password');
    }
}

export class PasswordError extends CustomError {
    constructor() {
        super(400, 'Password error');
    }
}

export class UserNotFound extends CustomError {
    constructor(){
        super(404, "User not found")
    }
}

export class InvalidToken extends CustomError {
    constructor(){
        super(401, "Invalid token")
    }
}

export class Unauthorized extends CustomError {
    constructor(){
        super(401,"Unauthorized")
    }
}

export class MethodNotImplemented extends CustomError {
    constructor(){
        super(501, "Method not implemented")
    }
}

export class BodyError extends CustomError {
    constructor(){
        super(400, "Body error")
    }
}

