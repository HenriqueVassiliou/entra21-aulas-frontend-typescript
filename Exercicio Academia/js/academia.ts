import { Cliente} from "./Cliente.js";
import { Funcionario } from "./Funcionario.js";
import { Pessoa } from "./Pessoa.js";

let cliente01:Cliente = new Cliente ("Eduardo", "023089845", 40, "230949891", "Criciuma", "54653", "Anual")

let cliente02:Cliente = new Cliente ("Pedro", "3423758", 39, "3657357", "Criciuma", "54689", "Anual")




let funcionario01:Funcionario = new Funcionario ("João", "657468568", 41, "4565886556", "Criciuma", 1.500, "Auxiliar", "Tarde")

let funcionario02:Funcionario = new Funcionario ("Gabriel", "78975875", 40, "657547568", "Criciuma", 1.400, "Auxiliar", "Noite")

console.group('Clientes:');
console.group('Cliente01:');
console.log(cliente01);
console.log(cliente01.apresentar())
console.groupEnd();

console.group('Cliente02:');
console.log(cliente02);
console.log(cliente02.apresentar())
console.groupEnd();

console.group('Cliente01 Atualizado:');
cliente01.nome = "Bruno" 
cliente01.cpf ="4392808" 
cliente01.idade = 41 
cliente01.numeroDeContato = "29148327" 
cliente01.endereco = "Criciuma" 
cliente01.numeroCartao = "43856" 
cliente01.tipoDePlano = "Anual"

console.log(cliente01);
console.log(cliente01.apresentar())
console.groupEnd();


console.group('Cliente02 Atualizado:');
cliente02.nome = "Kelwin" 
cliente02.cpf ="3465908" 
cliente02.idade = 42 
cliente02.numeroDeContato = "235875325" 
cliente02.endereco = "Curitiba" 
cliente02.numeroCartao = "32598" 
cliente02.tipoDePlano = "Anual"

console.log(cliente02);
console.log(cliente02.apresentar())
console.groupEnd();
console.groupEnd();

console.group('Funcionarios:');
console.group('Funcionairo01:');
console.log(funcionario01);
console.log(funcionario01.apresentar())
console.groupEnd();

console.group('Funcionairo02:');
console.log(funcionario02);
console.log(funcionario02.apresentar())
console.groupEnd();

console.group('Funcionairo01 Atualizado:');
funcionario01.nome = "Arthur" 
funcionario01.cpf ="214983825" 
funcionario01.idade = 40 
funcionario01.numeroDeContato = "2356873" 
funcionario01.endereco = "Içara" 
funcionario01.salario = 20.000
funcionario01.funcao = "Chefe"
funcionario01.turno = "Todo dia"

console.log(funcionario01);
console.log(funcionario01.apresentar())
console.groupEnd();


console.group('Funcionairo02 Atualizado:');
funcionario02.nome = "Juan" 
funcionario02.cpf ="214980089" 
funcionario02.idade = 39
funcionario02.numeroDeContato = "3248572342" 
funcionario02.endereco = "Criciuma" 
funcionario02.salario = 1.500
funcionario02.funcao = "Zelador"
funcionario02.turno = "Noturno"

console.log(funcionario02);
console.log(funcionario02.apresentar())
console.groupEnd();
console.groupEnd();






