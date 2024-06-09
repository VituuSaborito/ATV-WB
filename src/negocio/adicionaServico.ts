import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";
import Adiciona from "./adiciona";
import ListagemServico from "./listagemServicos";

export default class AdicionaServico extends Adiciona {
    private cliente: Array<Cliente>;
    private entrada: Entrada;
    private servico: Array<Servico>;

    constructor(cliente: Array<Cliente>, servico: Array<Servico>) {
        super();
        this.cliente = cliente;
        this.entrada = new Entrada();
        this.servico = servico;
    }

    public adicionar(): void {
        let achouCliente = true;
        let achouServico = true;

        while (achouCliente) {
            let cpfCli = this.entrada.receberTexto(`Por favor informe o cpf do cliente que gostaria de adicionar um servico: `);
            this.cliente.forEach(cliente => {
                if (cliente.getCpf.getValor == cpfCli) {
                    achouCliente = false;
                    while (achouServico) {
                        let listagem22 = new ListagemServico(this.servico);
                        listagem22.listar();
                        let codProd = this.entrada.receberNumero('Por favor informe o código do servico que deseja adicionar: ');
                        this.servico.forEach(servico => {
                            if (servico.codigo == codProd) {
                                cliente.getServicosConsumidos.push(servico);
                                achouServico = false;
                            }
                        });
                        if (achouServico) {
                            console.log(`\nServico não encontrado`);
                        }
                    }
                }
            });
            if (achouCliente) {
                console.log(`\nCliente não encontrado`);
            }
        }
        console.log(`\nServico adicionado com sucesso\n`);
    }
}
