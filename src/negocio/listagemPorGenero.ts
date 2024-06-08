import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemPorGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\n Lista de Clientes por genero: `)
        console.log(`\nHomens: \n `)
        this.clientes.forEach(cliente => {
            if (cliente.genero == "H"){

            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log('Genero: ' + cliente.genero)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Rg: `)
            cliente.getRgs.forEach(c => {
                console.log(c.getValor+" / "+ c.getDataEmissao)                
            });
            console.log(`Telefone: ` )
            cliente.getTelefones.forEach(d=>{
                console.log(d.getDdd+ " "+ d.getNumero)
            })
            console.log(`--------------------------------------`);
            }
            
        });
        console.log(`\nMulheres: \n `)
        this.clientes.forEach(cliente => {
            if (cliente.genero == "M"){

            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log('Genero: ' + cliente.genero)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Rg: `)
            cliente.getRgs.forEach(c => {
                console.log(c.getValor+" / "+ c.getDataEmissao)                
            });
            console.log(`Telefone: ` )
            cliente.getTelefones.forEach(d=>{
                console.log(d.getDdd+ " "+ d.getNumero)
            })
            console.log(`--------------------------------------`);
            }
            
        });
        console.log(`\nOutros: \n `)
        this.clientes.forEach(cliente => {
            if (cliente.genero == "O"){

            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log('Genero: ' + cliente.genero)
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Rg: `)
            cliente.getRgs.forEach(c => {
                console.log(c.getValor+" / "+ c.getDataEmissao)                
            });
            console.log(`Telefone: ` )
            cliente.getTelefones.forEach(d=>{
                console.log(d.getDdd+ " "+ d.getNumero)
            })
            console.log(`--------------------------------------`);
            }
            
        });
    }
}