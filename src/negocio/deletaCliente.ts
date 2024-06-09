import Cliente from "../modelo/cliente";
import Deleta from "./deleta";
import Entrada from "../io/entrada";

export default class DeletarCliente extends Deleta{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes:Array<Cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        let numCpfDel = this.entrada.receberTexto(`Por favor informe o cpf do cliente que deseja remover: `)
        this.clientes.forEach((Cliente ,c ) => {
            if (Cliente.getCpf.getValor == numCpfDel){
                this.clientes.splice(c,1)
            }
            else{
                console.log("Esse CPF não esta registrado no sistema")
            }
        });
    }
}