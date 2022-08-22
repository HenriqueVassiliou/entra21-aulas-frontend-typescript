import {Animal} from "./Animal.js";

console.log("Aula 02 Funcionou");

let animal1:Animal=new Animal("drosofila", "mosca", 0.5, ["ar", "lixo", "comida"]) 
console.log(animal1);

console.log(animal1.nome);

console.log(animal1.peso);

console.log(animal1.habitat[0]); 

console.log(animal1.getEspecie);

import {Aluno} from "./Aluno.js";
let aluno:Aluno=new Aluno("Henrique Vassiliou", 16, [10, 8, 9 ]) 
console.log(aluno);

console.log(aluno.nome);

console.log(aluno.idade);

console.log(aluno.notas[0]); 

