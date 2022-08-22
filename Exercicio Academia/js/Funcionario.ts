import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {
    
    public salario:number
    public funcao:string
    public turno:string

    constructor(nome:string, cpf:string, idade:number, numeroDeContato:string, endereco:string, salario:number, funcao:string, turno:string) {

        super(nome, cpf, idade, numeroDeContato, endereco)
        this.salario = salario
        this.funcao = funcao
        this.turno = turno
    }
    apresentar(): string {
        return ""
    }
   
}