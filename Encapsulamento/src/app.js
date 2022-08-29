"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Empresa_1 = __importDefault(require("./Empresa"));
const Endereco_1 = __importDefault(require("./Endereco"));
const Funcionario_1 = __importDefault(require("./Funcionario"));
const Telefone_1 = __importDefault(require("./Telefone"));
let empresa = new Empresa_1.default("ABC LTDA", "EMPRESA LEGAL", "98987777");
let funcionario1 = new Funcionario_1.default('Jeniffer', '90883388448');
let funcionario2 = new Funcionario_1.default('Julia', '987266366363');
let endereco1 = new Endereco_1.default();
let telefoninho = new Telefone_1.default('12', '981345678');
let telefoninho2 = new Telefone_1.default('12', '988123456');
empresa.obterTelefones.forEach(t => {
    console.log(`ddd: ${t.ddd} numero: ${t.numero}`);
});
// publico tornar um atributo ou metodo publico 
