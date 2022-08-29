import Endereco from "./Endereco"
import Funcionario from "./Funcionario"
import Telefone from "./Telefone"


export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    private cnpj: string
    public endereco: Endereco
    private telefones: Telefone[]
    private funcionarios: Funcionario[]
  

    constructor (razaoSocial: string, nomeFantasia: string, cnpj: string, endereco: Endereco) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.endereco = endereco
        this.telefones = []
        this.funcionarios = []
    }
    set inserirCnpj(cnpj: string){
        this.cnpj = cnpj
    }
    get obterCnpj(){
        return this.cnpj
    }
    set inserirFuncionarios(funcionarios: Funcionario[]){
        this.funcionarios = funcionarios
    }
    get obterFuncionarios(){
        return this.funcionarios
    }
    get obterTelefones(){
        return this.telefones
    }
    }

