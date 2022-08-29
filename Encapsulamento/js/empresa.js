"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empresa {
    constructor(razaoSocial, cnpj) {
        this.razaoSocial = razaoSocial;
        this.cnpj = cnpj;
    }
    set inserirCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    get obterCnpj() {
        return this.cnpj;
    }
}
exports.default = Empresa;
