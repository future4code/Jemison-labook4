import { CustomError } from './CustomError';


export class FriendshipAlreadyExistsError extends CustomError {
    constructor() {
        super(409, "Friendship already exists.");
    }
}

export class FriendshipNotFound extends CustomError {
    constructor() {
        super(404, "Friendship not found.");
    }
}

export class FriendshipInvalidInputError extends CustomError {
    constructor() {
        super(400, "Invalid input to friendship.");
    }
}

export class FriendshipInvalidUserError extends CustomError {
    constructor() {
        super(400, "Invalid user to friendship.");
    }
}

export class FriendNotExisting extends CustomError {
    constructor(){
        super(404, "Friend not found.")
    }
}

export class MissingFriendId extends CustomError {
    constructor(){
        super(422, "Friend id required.")
    }
}

export class MissingUserId extends CustomError {
    constructor(){
        super(422, "User id required.")
    }
}

export class UnableToAddYourself extends CustomError {
    constructor(){
        super(422, "You can't add yourself as a friend.")
    }
}

export class UserNotExisting extends CustomError {
    constructor(){
        super(404, "User not found.")
    }
}

export class FriendshipsNotFound extends CustomError {
    constructor() {
        super(404, "Not found friendships");
    }
}

export class NotFoundBody extends CustomError {
    constructor() {
        super(404, "Not found body")
    }
}

