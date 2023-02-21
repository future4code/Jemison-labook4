"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundBody = exports.FriendshipsNotFound = exports.UserNotExisting = exports.UnableToAddYourself = exports.MissingUserId = exports.MissingFriendId = exports.FriendNotExisting = exports.FriendshipInvalidUserError = exports.FriendshipInvalidInputError = exports.FriendshipNotFound = exports.FriendshipAlreadyExistsError = void 0;
const CustomError_1 = require("./CustomError");
class FriendshipAlreadyExistsError extends CustomError_1.CustomError {
    constructor() {
        super(409, "Friendship already exists.");
    }
}
exports.FriendshipAlreadyExistsError = FriendshipAlreadyExistsError;
class FriendshipNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "Friendship not found.");
    }
}
exports.FriendshipNotFound = FriendshipNotFound;
class FriendshipInvalidInputError extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid input to friendship.");
    }
}
exports.FriendshipInvalidInputError = FriendshipInvalidInputError;
class FriendshipInvalidUserError extends CustomError_1.CustomError {
    constructor() {
        super(400, "Invalid user to friendship.");
    }
}
exports.FriendshipInvalidUserError = FriendshipInvalidUserError;
class FriendNotExisting extends CustomError_1.CustomError {
    constructor() {
        super(404, "Friend not found.");
    }
}
exports.FriendNotExisting = FriendNotExisting;
class MissingFriendId extends CustomError_1.CustomError {
    constructor() {
        super(422, "Friend id required.");
    }
}
exports.MissingFriendId = MissingFriendId;
class MissingUserId extends CustomError_1.CustomError {
    constructor() {
        super(422, "User id required.");
    }
}
exports.MissingUserId = MissingUserId;
class UnableToAddYourself extends CustomError_1.CustomError {
    constructor() {
        super(422, "You can't add yourself as a friend.");
    }
}
exports.UnableToAddYourself = UnableToAddYourself;
class UserNotExisting extends CustomError_1.CustomError {
    constructor() {
        super(404, "User not found.");
    }
}
exports.UserNotExisting = UserNotExisting;
class FriendshipsNotFound extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found friendships");
    }
}
exports.FriendshipsNotFound = FriendshipsNotFound;
class NotFoundBody extends CustomError_1.CustomError {
    constructor() {
        super(404, "Not found body");
    }
}
exports.NotFoundBody = NotFoundBody;
//# sourceMappingURL=FriendshipError.js.map