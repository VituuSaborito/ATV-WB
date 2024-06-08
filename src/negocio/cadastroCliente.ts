import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = this.entrada.receberTexto('Por favor informe o genero do cliente, no padrão homem: H, mulher: M, outro: O. : ')
        let telefone = this.entrada.receberTexto(`Por favor informe o numero de telefone ddd 0000-0000: `)
        let rgNum = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let rgdata = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let partesDataRg = data.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
        let partesNumero = telefone.split(' ')
        let ddd = partesNumero[0]
        let numero = partesNumero[1]
        let dataEmissao = new Date(ano, mes, dia)
        let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
        let numTele = new Telefone(ddd, numero)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome,genero, nomeSocial, cpf);
        let rg = new RG(rgNum, dataEmissaoRg)
        cliente.getTelefones.push(numTele)
        cliente.getRgs.push(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}