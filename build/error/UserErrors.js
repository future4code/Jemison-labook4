"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyError = exports.MethodNotImplemented = exports.Unauthorized = exports.InvalidToken = exports.UserNotFound = exports.PasswordError = exports.InvalidPassword = exports.InvalidEmail = void 0;
const CustomError_1 = require("./CustomError");
class InvalidEmail extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Invalid email');
    }
}
exports.InvalidEmail = InvalidEmail;
class InvalidPassword extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Invalid password');
    }
}
exports.InvalidPassword = InvalidPassword;
class PasswordError extends CustomError_1.CustomError {
    constructor() {
        super(400, 'Password error');
    }
}
exports.PasswordError = PasswordError;
class UserNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "User not found");
    }
}
exports.UserNotFound = UserNotFound;
class InvalidToken extends CustomError_1.CustomError {
    constructor() {
        super(401, "Invalid token");
    }
}
exports.InvalidToken = InvalidToken;
class Unauthorized extends CustomError_1.CustomError {
    constructor() {
        super(401, "Unauthorized");
    }
}
exports.Unauthorized = Unauthorized;
class MethodNotImplemented extends CustomError_1.CustomError {
    constructor() {
        super(501, "Method not implemented");
    }
}
exports.MethodNotImplemented = MethodNotImplemented;
class BodyError extends CustomError_1.CustomError {
    constructor() {
        super(400, "Body error");
    }
}
exports.BodyError = BodyError;
//# sourceMappingURL=UserErrors.js.map