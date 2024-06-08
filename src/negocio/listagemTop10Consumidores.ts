import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop10Consumidores extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        let clientesOrdenadosProds = this.clientes.sort((a, b) => b.getProdutosConsumidos.length - a.getProdutosConsumidos.length);
        
        console.log(`\nTop 10 Consumidores de produtos:`);
        for (let i = 0; i < 10 ; i++) {
            let cliente = clientesOrdenadosProds[i];
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`--------------------------------------`);
        }

        let clientesOrdenadosServs = this.clientes.sort((c, d) => d.getServicosConsumidos.length - c.getServicosConsumidos.length);

        console.log(`\nTop 10 Consumidores de serviços:`);
        for (let i = 0; i < 10 ; i++) {
            let cliente = clientesOrdenadosServs[i];
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de serviços consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`--------------------------------------`);
        }
    }
    
}
