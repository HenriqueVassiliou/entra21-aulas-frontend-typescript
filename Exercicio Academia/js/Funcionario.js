import { Pessoa } from "./Pessoa.js";
export class Funcionario extends Pessoa {
    constructor(nome, cpf, idade, numeroDeContato, endereco, salario, funcao, turno) {
        super(nome, cpf, idade, numeroDeContato, endereco);
        this.salario = salario;
        this.funcao = funcao;
        this.turno = turno;
    }
    apresentar() {
        return "Ola! Eu sou o funcionario " + this.nome + ", sou " + this.funcao + " e trabalho no turno " + this.turno;
    }
}
