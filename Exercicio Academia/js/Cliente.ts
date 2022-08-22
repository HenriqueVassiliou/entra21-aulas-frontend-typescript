import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {
    
    public numeroCartao:string
    public tipoDePlano:string

    constructor(nome:string, cpf:string, idade:number, numeroDeContato:string, endereco:string, numeroCartao:string, tipoDePlano:string) {

        super(nome, cpf, idade, numeroDeContato, endereco)
        this.numeroCartao = numeroCartao
        this.tipoDePlano = tipoDePlano
    }
    apresentar(): string {
        return "Oi! Eu sou o cliente " + this.nome + " e meu plano é " + this.tipoDePlano;
    }
   
}