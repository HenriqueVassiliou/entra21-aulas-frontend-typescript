import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, cpf, idade, numeroDeContato, endereco, numeroCartao, tipoDePlano) {
        super(nome, cpf, idade, numeroDeContato, endereco);
        this.numeroCartao = numeroCartao;
        this.tipoDePlano = tipoDePlano;
    }
    apresentar() {
        return "Oi! Eu sou o cliente " + this.nome + " e meu plano é " + this.tipoDePlano;
    }
}
