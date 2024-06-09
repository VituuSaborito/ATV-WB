import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

interface Contagem {
    quantidade: number;
    cod: number;
    nome: string;
}

export default class ListagemMaisConsumidos extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        let listaContagem: Contagem[] = [];
        let produtos: number[] = [];
        
        this.clientes.forEach(c => {
            c.getProdutosConsumidos.forEach((p) => {
                let produtoIndex = produtos.indexOf(p.codigo);
                if (produtoIndex !== -1) {
                    listaContagem[produtoIndex].quantidade += 1;
                } else {
                    produtos.push(p.codigo);
                    listaContagem.push({ quantidade: 1, cod: p.codigo, nome: p.nome });
                }
            });
        });

        let listaOrdenada = listaContagem.sort((a, b) => b.quantidade - a.quantidade);

        console.log(`\nProdutos mais consumidos:`);
        listaOrdenada.forEach((l, i) => {
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${l.nome}`);
            console.log(`Código do produto: ${l.cod}`);
            console.log(`Total de quantidade vendidas: ${l.quantidade}`);
            console.log(`--------------------------------------`);
        });

        let listaContagemServ: Contagem[] = [];
        let servicos: number[] = [];
        
        this.clientes.forEach(c => {
            c.getServicosConsumidos.forEach((p) => {
                let servicoIndex = servicos.indexOf(p.codigo);
                if (servicoIndex !== -1) {
                    listaContagemServ[servicoIndex].quantidade += 1;
                } else {
                    servicos.push(p.codigo);
                    listaContagemServ.push({ quantidade: 1, cod: p.codigo, nome: p.tipo });
                }
            });
        });

        let listaOrdenadaServ = listaContagemServ.sort((a, b) => b.quantidade - a.quantidade);

        console.log(`\nServiços mais consumidos:`);
        listaOrdenadaServ.forEach((ls, i) => {
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${ls.nome}`);
            console.log(`Código do serviço: ${ls.cod}`);
            console.log(`Total de quantidade vendidas: ${ls.quantidade}`);
            console.log(`--------------------------------------`);
        });
    }
}
