import { Professor } from "./Professor.js";
import { Aluno } from "./Aluno.js";
import { Diretor} from "./Diretor.js"

let fulano:Aluno = new Aluno("Henrique Vassiliou",16,"Içara",[8,9,10] )

let alunoTeste:Aluno = new Aluno ("Rubem",40,"Blumenau", [1,2,3])


let professorOliota:Professor = new Professor("Oliota", 33, "Blumenau", [fulano,alunoTeste])

fulano.nome
fulano.cidade
fulano.idade

console.log(fulano.nome, fulano.cidade, fulano.idade);

console.log(fulano.apresentar());
console.log(fulano.calcularMedia);

console.log(professorOliota.nome);

