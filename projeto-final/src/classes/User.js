
let nextId = 1;

export class User{
    constructor(email, senha){
        this.id = nextId++; //id único para cada elemento
        this.email = email;
        this.senha = senha;
    }
}