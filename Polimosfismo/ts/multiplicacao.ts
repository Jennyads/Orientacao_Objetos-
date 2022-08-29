import Calculo from "./calculo";

export default class Multiplicacao extends Calculo {

    calcular(): number {
        return this.numero1 * this.numero2;
    }

}