export class Professor {

    public nome: string
    
    public idade: number
    
    public disciplinas: Array<string>
    
    private valorHora: Array<number>
    
    private quantidadeHoras: Array<number>
    
    constructor(nome: string, idade: number, disciplinas: Array<string>, valorHora: Array<number>, quantidadeHoras: Array<number>) {
    
    this.nome = nome
    
    this. idade =  idade
    
    this.disciplinas = disciplinas
    
    this.valorHora = valorHora
    
    this.quantidadeHoras = quantidadeHoras
    
    }
    
    }