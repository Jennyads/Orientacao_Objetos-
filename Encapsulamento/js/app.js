"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const empresa_1 = __importDefault(require("./empresa"));
let empresa = new empresa_1.default("ABC LTDA", "98987777");
empresa.inserirCnpj = '7654556788';
console.log(empresa.obterCnpj);
// publico tornar um atributo ou metodo publico 
