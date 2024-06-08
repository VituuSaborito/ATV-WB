import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemTop5PorValor extends Listagem{
    private clientes: Array<Cliente>;
    constructor(clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
    }
    public listar(): void {
        
    }
}