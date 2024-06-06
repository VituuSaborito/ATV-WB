import cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Altera from "./altera";
import Cliente from "../modelo/cliente";

export default class Alterarcliente extends Altera{
    private clientes: Array<cliente>
    private entrada: Entrada
    constructor(clientes:Array<cliente>){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public alterar(): void {
        let numCpfDel = this.entrada.receberTexto(`Por favor informe o cpf do cliente que deseja alterar`)
        this.clientes.forEach((cliente ,c ) => {
            if (cliente.getCpf.getValor == numCpfDel){
                
                let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
                
                let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
                
                let genero = this.entrada.receberTexto('Por favor informe o genero do cliente, no padrão homem: H, mulher: M, outro: O')

                this.clientes.splice(c,1, new Cliente(nome, genero, nomeSocial, cliente.getCpf))
            }
            else{
                console.log("Esse CPF não esta registrado no sistema")
            }
        });
    }
}