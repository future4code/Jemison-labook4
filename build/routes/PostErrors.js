"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = exports.NotFoundDescription = exports.NotFoundType = exports.NotFoundPost = exports.NotFoundPhoto = exports.InvalidDescription = exports.InvalidType = exports.InvalideRequisition = exports.InvalidPostId = exports.InavalidPhoto = void 0;
const CustomError_1 = require("../error/CustomError");
class InavalidPhoto extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid photo");
    }
}
exports.InavalidPhoto = InavalidPhoto;
;
class InvalidPostId extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid post id");
    }
}
exports.InvalidPostId = InvalidPostId;
;
class InvalideRequisition extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid requisition");
    }
}
exports.InvalideRequisition = InvalideRequisition;
;
class InvalidType extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid type");
    }
}
exports.InvalidType = InvalidType;
;
class InvalidDescription extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid description");
    }
}
exports.InvalidDescription = InvalidDescription;
;
class NotFoundPhoto extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found photo");
    }
}
exports.NotFoundPhoto = NotFoundPhoto;
;
class NotFoundPost extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found post");
    }
}
exports.NotFoundPost = NotFoundPost;
;
class NotFoundType extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found type");
    }
}
exports.NotFoundType = NotFoundType;
;
class NotFoundDescription extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found description");
    }
}
exports.NotFoundDescription = NotFoundDescription;
;
class Unauthorized extends CustomError_1.CustomError {
    constructor() {
        super(401, "Unauthorized");
    }
}
exports.Unauthorized = Unauthorized;
;
//# sourceMappingURL=PostErrors.js.map