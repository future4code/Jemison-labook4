export interface PostInputDTO {
    photo: string,
    description: string,
    type: string,
    authorId: string
}

export interface InsertPostDTO {
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at: string,
    author_id: string
}