"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const divisao_1 = __importDefault(require("./divisao"));
const multiplicacao_1 = __importDefault(require("./multiplicacao"));
const somador_1 = __importDefault(require("./somador"));
const subtracao_1 = __importDefault(require("./subtracao"));
let somador = new somador_1.default();
console.log(somador.somar(2, 2));
let subtrair = new subtracao_1.default();
console.log(subtrair.subtrair(2, 2));
let divisao = new divisao_1.default();
console.log(divisao.dividir(10, 5));
let multiplicacao = new multiplicacao_1.default();
console.log(multiplicacao.multiplica(5, 5));
