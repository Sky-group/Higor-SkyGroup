export interface Usuario {
    ID:number,
    Nome:string,
    Sobrenome:string,
    Nick:string,
    Email:string,
    Senha:string,
    Tipo:UserType
}

export enum UserType {
    Admin,
    Usuario,
    Visitante
}