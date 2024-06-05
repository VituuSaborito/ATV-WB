import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProduto from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`11 - Cadastrar cliente`);
    console.log(`12 - Cadastrar produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`21 - Listar todos os clientes`);
    console.log(`22 - Listar todos os produtos`);
    console.log(`23 - Listar todos os serviços`);
    console.log(`0 - Sair`);
    console.log('\n');

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 11:
            let cadastro11 = new CadastroCliente(empresa.getClientes)
            cadastro11.cadastrar()
            break;
        case 12:
            let cadastro12 = new CadastroProduto(empresa.getProdutos)
            cadastro12.cadastrar()
            break;
        case 13:
            let cadastro13 = new CadastroServico(empresa.getServicos)
            cadastro13.cadastrar()
            break;
        case 21:
            let listagem21 = new ListagemClientes(empresa.getClientes)
            listagem21.listar()
            break;
        case 22:
            let listagem22 = new ListagemProduto(empresa.getProdutos)
            listagem22.listar()
            break;
        case 23:
            let listagem23 = new ListagemServico(empresa.getServicos)
            listagem23.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}