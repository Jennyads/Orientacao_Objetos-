import Divisao from "./divisao";
import Multiplicacao from "./multiplicacao";
import Somador from "./somador";
import Subtracao from "./subtracao";

let somador = new Somador()
console.log(somador.somar(2,2))

let subtrair = new Subtracao()
console.log(subtrair.subtrair(2,2))

let divisao = new Divisao()
console.log(divisao.dividir(10,5))

let multiplicacao = new Multiplicacao()
console.log(multiplicacao.multiplica(5,5)) 