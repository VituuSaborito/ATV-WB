import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Altera from "./altera";

export default class AlterarProduto extends Altera{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produto:Array<Produto>){
        super()
        this.entrada= new Entrada() 
        this.produtos = produto 
    }
    public alterar(): void {
        let numCodProd = this.entrada.receberNumero(`Por favor informe o código do produto que deseja alterar`)
        this.produtos.forEach((produto ,c ) => {
            if (produto.codigo == numCodProd){
                
                let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
                
                let preco = this.entrada.receberNumero(`Por favor informe o preço do produto: `)
                

                this.produtos.splice(c,1, new Produto(produto.codigo, nome, preco))
            }
            else{
                console.log("Esse código não esta registrado no sistema")
            }
        });
    }
}