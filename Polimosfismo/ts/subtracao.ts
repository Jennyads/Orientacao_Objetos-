import Calculo from "./calculo";

export default class Subtracao extends Calculo {
    calcular(): number {
        return this.numero1 - this.numero2;
    }

}