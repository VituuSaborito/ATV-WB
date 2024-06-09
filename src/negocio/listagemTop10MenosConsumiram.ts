import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop10MenosConsumiram extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
       
        let clientesOrdenadosProds = this.clientes.sort((a, b) => b.getProdutosConsumidos.length - a.getProdutosConsumidos.length);
 
        let c = 0
        
        console.log(`\nTop 10 Consumidores de produtos:`);
        for (let i = clientesOrdenadosProds.length-1; i >= 0 ; i--) {
            let cliente = clientesOrdenadosProds[i];
            c ++  
            console.log(`Posição: `+c+`°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de produtos consumidos: ${cliente.getProdutosConsumidos.length}`);
            console.log(`--------------------------------------`);
        }

        let clientesOrdenadosServs = this.clientes.sort((c, d) => d.getServicosConsumidos.length - c.getServicosConsumidos.length);
        c = 0
        console.log(`\nTop 10 Consumidores de serviços:`);

        for (let i = clientesOrdenadosServs.length-1; i >= 0 ; i--) {
            let cliente = clientesOrdenadosServs[i];
            c ++ 
            console.log(`Posição: `+c+`°`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Total de serviços consumidos: ${cliente.getServicosConsumidos.length}`);
            console.log(`--------------------------------------`);
        }
    }
    
}

