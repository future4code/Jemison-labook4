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

export class UserNotFound extends CustomError {
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class InvalidToken extends CustomError {
    constructor(){
        super(401, "Token inválido")
    }
}

export class Unauthorized extends CustomError {
    constructor(){
        super(401, "Não autorizado")
    }
}