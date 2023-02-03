export interface PostInputDTO {
    photo: string,
    description: string,
    type: string,
    createdAt: Date,
    authorId: string
}

export interface InsertPostDTO {
    id: string,
    photo: string,
    description: string,
    type: string,
    createdAt: Date,
    authorId: string
}