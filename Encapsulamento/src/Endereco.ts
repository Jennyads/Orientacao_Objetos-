export default class Endereco{

public logradouro: string
public numero: string
public bairro: string
public cep: string
public cidade: string 

constructor(logradouro:string, numero:string, bairro:string, cep:string, cidade:string){
    this.logradouro = logradouro
    this.numero = numero
    this.bairro = bairro
    this.cep = cep
    this.cidade = cidade
}


}