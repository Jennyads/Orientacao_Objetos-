"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj;
        this.endereco = endereco;
        this.telefones = [];
        this.funcionarios = [];
    }
    set inserirCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    get obterCnpj() {
        return this.cnpj;
    }
    set inserirFuncionarios(funcionarios) {
        this.funcionarios = funcionarios;
    }
    get obterFuncionarios() {
        return this.funcionarios;
    }
    get obterTelefones() {
        return this.telefones;
    }
}
exports.default = Empresa;
