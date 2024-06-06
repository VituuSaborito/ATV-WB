import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro{
    private servico: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>){
        super()
        this.entrada = new Entrada()
        this.servico = servico
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let tipo = this.entrada.receberTexto('Por favor informe o tipo do serviço')
        let tempo = this.entrada.receberTexto('Por favor informe o tempo do serviço, no padrão hh:mm')
        let preco = this.entrada.receberNumero('Por favor informe o valor do servico')
        let codigo = this.entrada.receberNumero('Por favor informe o código do serviço')
        let servico = new Servico(codigo,tipo,tempo,preco);
        this.servico.push(servico)
        console.log(`\nCadastro concluído :)\n`);
    }
}