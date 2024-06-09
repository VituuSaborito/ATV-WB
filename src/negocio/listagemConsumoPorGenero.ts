import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

interface Contagem {
    quantidade: number;
    cod: number;
    nome: string;
}

interface ContagemGenero {
    [key: string]: Contagem[];
}

export default class ListagemMaisConsumidosPorGenero extends Listagem {
    private clientes: Array<Cliente>;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
    }

    public listar(): void {
        let generos = ['H', 'M', 'O'];
        
        generos.forEach(genero => {
            console.log(`\nProdutos mais consumidos por ${genero}:`);
            this.listarMaisConsumidosPorGenero(genero, 'produtos');
            
            console.log(`\nServiços mais consumidos por ${genero}:`);
            this.listarMaisConsumidosPorGenero(genero, 'servicos');
        });
    }

    private listarMaisConsumidosPorGenero(genero: string, tipo: 'produtos' | 'servicos'): void {
        let listaContagem: Contagem[] = [];
        let codigos: number[] = [];

        this.clientes.filter(c => c.genero === genero).forEach(c => {
            if (tipo === 'produtos') {
                c.getProdutosConsumidos.forEach((p) => {
                    let produtoIndex = codigos.indexOf(p.codigo);
                    if (produtoIndex !== -1) {
                        listaContagem[produtoIndex].quantidade += 1;
                    } else {
                        codigos.push(p.codigo);
                        listaContagem.push({ quantidade: 1, cod: p.codigo, nome: p.nome });
                    }
                });
            } else {
                c.getServicosConsumidos.forEach((s) => {
                    let servicoIndex = codigos.indexOf(s.codigo);
                    if (servicoIndex !== -1) {
                        listaContagem[servicoIndex].quantidade += 1;
                    } else {
                        codigos.push(s.codigo);
                        listaContagem.push({ quantidade: 1, cod: s.codigo, nome: s.tipo });
                    }
                });
            }
        });

        let listaOrdenada = listaContagem.sort((a, b) => b.quantidade - a.quantidade);

        listaOrdenada.forEach((item, i) => {
            console.log(`Posição: ${i + 1}°`);
            console.log(`Nome: ${item.nome}`);
            console.log(`Código: ${item.cod}`);
            console.log(`Total de quantidade vendidas: ${item.quantidade}`);
            console.log(`--------------------------------------`);
        });
    }
}
