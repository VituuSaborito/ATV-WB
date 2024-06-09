import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Altera from "./altera";

export default class AlterarServico extends Altera{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico:Array<Servico>){
        super()
        this.entrada= new Entrada() 
        this.servicos = servico 
    }
    public alterar(): void {
        let numCodServ = this.entrada.receberNumero(`Por favor informe o código do servico que deseja alterar: `)
        this.servicos.forEach((servico ,c ) => {
            if (servico.codigo == numCodServ){
                
                let tipo = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
                
                let tempo = this.entrada.receberTexto(`Por favor informe o tempo do serviço: `)

                let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
                

                this.servicos.splice(c,1, new Servico(servico.codigo, tipo, tempo, preco))
            }
            else{
                console.log("Esse código não esta registrado no sistema")
            }
        });
    }
}