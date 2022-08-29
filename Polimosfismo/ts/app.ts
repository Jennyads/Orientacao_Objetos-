import Divisao from "./divisao";
import Multiplicacao from "./multiplicacao";
import Processamento from "./processamento";
import Soma from "./soma";
import Subtracao from "./subtracao";

let calculinho = new Subtracao(2,2)
let calculinho1 = new Soma(5,5)
let calculinho2 = new Divisao(10,5)
let calculinho3 = new Multiplicacao(10,5)

let processinho = new Processamento()
processinho.processar(calculinho)
processinho.processar(calculinho1)
processinho.processar(calculinho2)
processinho.processar(calculinho3)
