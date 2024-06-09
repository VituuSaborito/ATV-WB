import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop5PorValor extends Listagem{
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }
    public listar(): void {

        let valorOrdenadosProd = this.clientes.sort((a, b) => b.somaValorProd() - a.somaValorProd());

        console.log(`\nTop 5 Consumidores por valor em produtos:`)
        for (let i = 0; i<5; i++){
            let cliente = valorOrdenadosProd[i]
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de valor gasto em produtos: R$${cliente.somaValorProd()}`);
            console.log(`--------------------------------------`);
        } 


        let valorOrdenadosServs = this.clientes.sort((a, b) => b.somaValorServ() - a.somaValorServ());

        console.log(`\nTop 5 Consumidores por valor em serviços:`)
        for (let i = 0; i<5; i++){
            let cliente = valorOrdenadosServs[i]
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de valor gasto em serviços: R$${cliente.somaValorServ()}`);
            console.log(`--------------------------------------`);
        } 
    }
}