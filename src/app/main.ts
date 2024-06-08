import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import AdicionaProduto from "../negocio/adicionaProduto";
import AdicionaServico from "../negocio/adicionaServico";
import AlterarCliente from "../negocio/alteraCliente";
import Alterarcliente from "../negocio/alteraCliente";
import AlterarProduto from "../negocio/alteraProduto";
import AlterarServico from "../negocio/alteraServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import DeletarCliente from "../negocio/deletaCliente";
import DeletarProduto from "../negocio/deletaProduto";
import DeletarServico from "../negocio/deletaServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemPorGenero from "../negocio/listagemPorGenero";
import ListagemProduto from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServicos";
import ListagemTop10Consumidores from "../negocio/listagemTop10Consumidores";
import ListagemTop10MenosConsumiram from "../negocio/listagemTop10MenosConsumiram";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

empresa.setClientes = [
    new Cliente(`vitor`, `H`, `vitor`, new CPF(`1`, new Date())),
    new Cliente(`ana`, `O`, `ana`, new CPF(`2`, new Date())),
    new Cliente(`joao`, `M`, `joao`, new CPF(`3`, new Date())),
    new Cliente(`maria`, `H`, `maria`, new CPF(`4`, new Date())),
    new Cliente(`lucas`, `O`, `lucas`, new CPF(`5`, new Date())),
    new Cliente(`clara`, `M`, `clara`, new CPF(`6`, new Date())),
    new Cliente(`rafael`, `H`, `rafael`, new CPF(`7`, new Date())),
    new Cliente(`sophia`, `O`, `sophia`, new CPF(`8`, new Date())),
    new Cliente(`carlos`, `M`, `carlos`, new CPF(`9`, new Date())),
    new Cliente(`beatriz`, `M`, `beatriz`, new CPF(`10`, new Date()))
];



empresa.setProdutos = [new Produto(1,`produto1`,20)]
empresa.setServicos = [new Servico(1,`barba`,`1:30`,40)]



while (execucao) {
    console.log(`Opções:`);
    console.log(`11 - Cadastrar cliente`);
    console.log(`12 - Cadastrar produto`);
    console.log(`13 - Cadastrar serviço`);
    console.log(`21 - Listar todos os clientes`);
    console.log(`22 - Listar todos os produtos`);
    console.log(`23 - Listar todos os serviços`);
    console.log(`24 - Listagem especifica`);
    console.log(`31 - Deletar um cliente`);
    console.log(`32 - Deletar um produto`);
    console.log(`33 - Deletar um código`);
    console.log(`41 - Alterar um cliente`);
    console.log(`42 - Alterar um produto`);
    console.log(`43 - Alterar um código`);
    console.log(`51 - Adiciona um produto a um cliente `)
    console.log(`52 - Adiciona um serviço a um cliente `)
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
        
        case 24:
            console.log(`1 - Listar por genero`)
            console.log(`2 - Lista dos 10 maiores consumidores por quantidade`)
            console.log(`3 - Lista dos 10 menos consumiram por quantidade`)
            
            
            
            let opcao1 = entrada.receberNumero(`\nPor favor, escolha uma opção: `)
            switch(opcao1){
                case 1:
                    let ListagemGenero = new ListagemPorGenero(empresa.getClientes)
                    ListagemGenero.listar()
                    break;
                case 2:
                    let ListagemTop10Con = new ListagemTop10Consumidores(empresa.getClientes)
                    ListagemTop10Con.listar()
                    break;
                case 3:
                    let ListagemTopMenos10Con = new ListagemTop10MenosConsumiram(empresa.getClientes)
                    ListagemTopMenos10Con.listar()
            }
            
            break;
        case 31:
            let deletar31 = new DeletarCliente(empresa.getClientes)
            deletar31.deletar()
            break;
        case 32:
            let deletar32 = new DeletarProduto(empresa.getProdutos)
            deletar32.deletar()
            break;
        case 33:
            let deletar33 = new DeletarServico(empresa.getServicos)
            deletar33.deletar()
            break;
        case 41:
            let alterar41 = new AlterarCliente(empresa.getClientes)
            alterar41.alterar()
            break;
        case 42:
            let alterar42 = new AlterarProduto(empresa.getProdutos)
            alterar42.alterar()
            break;
        case 43:
            let alterar43 = new AlterarServico(empresa.getServicos)
            alterar43.alterar()
            break;
        case 51:
            let adiciona51 = new AdicionaProduto(empresa.getClientes,empresa.getProdutos)
            adiciona51.adicionar()
            break;
        case 52:
            let adiciona52 = new AdicionaServico(empresa.getClientes,empresa.getServicos)
            adiciona52.adicionar()
            break;




        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :`)
    }
    
}