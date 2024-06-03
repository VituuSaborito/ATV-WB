import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Cliente from "../modelo/produto";
import Cadastro from "./cadastro";

export default class CadastroProduto extends Produto{
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(produto: Array<Produto>){
        super()
        this.produto = produto
        this.entrada = new Entrada()
    }
    public cadastrar(): void{
        console.log("\nInício do cadastro do Produto")
        let codigo = this.entrada.receberNumero("Por favor informe o código do produto")
        let nome = this.entrada.receberTexto("Por favor informe o nome do produto")
        let preco = this.entrada.receberNumero("Por favor informe o preco do produto")
        
    }
}