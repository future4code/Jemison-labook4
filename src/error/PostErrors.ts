import { CustomError } from './CustomError';

export class InavalidPhoto extends CustomError {
    constructor() {
        super(400, "Invalid photo")
    }
};

export class InvalidPostId extends CustomError {
    constructor(){
        super(400, "Invalid post id")
    }
};

export class InvalideRequisition extends CustomError {
    constructor() {
        super(400, "Invalid requisition 1")
    }
};

export class InvalidDescription extends CustomError {
    constructor() {
        super(400, "Invalid description")
    }
};

export class NotFoundPhoto extends CustomError {
    constructor() {
        super(404, "Not found photo")
    }
};

export class NotFoundPost extends CustomError {
    constructor() {
        super(404, "Not found post")
    }
};

export class NotFoundType extends CustomError {
    constructor() {
        super(404, "Not found type")
    }
};

export class NotFoundDescription extends CustomError {
    constructor() {
        super(404, "Not found description")
    }
};

export class Unauthorized extends CustomError { 
    constructor() {
        super(401, "Unauthorized")
    }
};

export class NotFoundBody extends CustomError {
    constructor() {
        super(404, "Not found body")
    }
}

export class IncompleteBody extends CustomError {
    constructor() {
        super(400, "Incomplete body")
    }
}

export class InvalidType extends CustomError {
    constructor() {
        super(400,  "Invalid type. Please, insert 'normal' or 'event'")
    }
}

