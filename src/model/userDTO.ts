export interface UserInputDTO { //Para cadastrar um usuário
    name: string;
    email: string;
    password: string;
}

export interface LoginInputDTO { //Para logar um usuário
    email: string;
    password: string;
}

export interface CreateUser { //Para criar um usuário
    id: string,
    name: string,
    email: string,
    password: string
 }

 export interface UserIdDTO {
    id: string
 }

 export interface User {
    id: string,
    name: string,
    email: string,
    password: string
 }