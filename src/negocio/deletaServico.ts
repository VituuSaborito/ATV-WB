import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Deleta from "./deleta";

export default class DeletarServico extends Deleta{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos:Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        let numCodSer = this.entrada.receberNumero('Por favor informe o código do serviço que deseja remover')
        this.servicos.forEach((servico,c)=>{
            if (servico.codigo == numCodSer){
                this.servicos.splice(c,1)
            }
            else{
                console.log("Esse código não esta registrado no sistema")
            }
        })
    }
}