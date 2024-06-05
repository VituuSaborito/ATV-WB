import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemServico extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos:Array<Servico>){
        super()
        this.servicos =this.servicos
    }

}