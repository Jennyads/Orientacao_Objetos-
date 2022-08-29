import Veiculo from "./veiculos";

export default class Barco extends Veiculo {
    constructor(quantidadePassageiro: number) {
        super(quantidadePassageiro, 'sem freio');
    }
}