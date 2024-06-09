import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Deleta from "./deleta";

export default class DeletarProduto extends Deleta{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos:Array<Produto>){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        let numCodProd = this.entrada.receberNumero("Por favor informe o codigo do produto que deseja remover: ")
        this.produtos.forEach((Produto, c)=>{
            if (Produto.codigo == numCodProd){
                this.produtos.splice(c,1)
            }
            else{
                console.log("Esse codigo não esta registrado no sistema")
            }
        })
    }
}