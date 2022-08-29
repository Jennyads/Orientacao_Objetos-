import Calculo from "./calculo";

export default class Divisao extends Calculo{
    calcular(): number {
        return this.numero1 / this.numero2;
    }
}
