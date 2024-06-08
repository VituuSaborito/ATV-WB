import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cliente from "../modelo/cliente";
import Adiciona from "./adiciona";
import ListagemProduto from "./listagemProdutos";

export default class AdicionaProduto extends Adiciona {
    private cliente: Array<Cliente>;
    private entrada: Entrada;
    private produto: Array<Produto>;

    constructor(cliente: Array<Cliente>, produto: Array<Produto>) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.produto = produto;
    }

    public adicionar(): void {
        let achouCliente = true;
        let achouProduto = true;

        while (achouCliente) {
            let cpfCli = this.entrada.receberTexto(`\nPor favor informe o cpf do cliente que gostaria de adicionar um produto: `);
            this.cliente.forEach(cliente => {
                if (cliente.getCpf.getValor == cpfCli) {
                    achouCliente = false;
                    while (achouProduto) {
                        let listagem22 = new ListagemProduto(this.produto);
                        listagem22.listar();
                        let codProd = this.entrada.receberNumero('\nPor favor informe o código do produto que deseja adicionar: ');
                        this.produto.forEach(produto => {
                            if (produto.codigo == codProd) {
                                cliente.getProdutosConsumidos.push(produto);
                                achouProduto = false;
                            }
                        });
                        if (achouProduto) {
                            console.log(`\nProduto não encontrado`);
                        }
                    }
                }
            });
            if (achouCliente) {
                console.log(`\nCliente não encontrado`);
            }
        }
        console.log(`\nProduto adicionado com sucesso\n`);
    }
}
