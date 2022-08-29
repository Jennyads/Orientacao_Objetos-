export default class Funcionario{
    public nome: string
    readonly cpf: string

    constructor(nome:string, cpf: string) {
    this.nome = nome
    this.cpf = cpf

    }
}