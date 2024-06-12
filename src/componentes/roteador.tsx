import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente";
import FormularioAlteracaoCliente from "./formularioAlteracaoCliente";
import FormularioDeletaCliente from "./formularioDeletaCliente";
import FormularioAlteracaoProduto from "./formularioAlteracaoProduto";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioDeletaProduto from "./formularioDeletaProduto";
import ListaProduto from "./listaProduto";
import FormularioDeletaServico from "./formularioDeletaServico";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioAlteracaoServico from "./formularioAlteracaoServico";
import ListaServico from "./listaServico";
import AdicionarProduto from "./adicionarProduto";
import AdicionarServico from "./adicionarServico";
import ListaPorGenero from "./listaPorGenero";




type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços','Adicionar Produto ou Serviço','Listagens Especificas']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-4" />
                    <FormularioAlteracaoCliente tema="purple lighten-4"/>
                    <ListaCliente tema="purple lighten-4" />
                    <FormularioDeletaCliente tema = "purple lighten-4"/>
                </>
            )
        } 
        if(this.state.tela=== 'Produtos'){
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="purple lighten-4"/>
                    <FormularioAlteracaoProduto tema="purple lighten-4"/>
                    <ListaProduto tema="purple lighten-4"/>
                    <FormularioDeletaProduto tema="purple lighten-4"/>

                </>
            )
        } 
        if(this.state.tela=== 'Serviços'){
            return (    
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="purple lighten-4"/>
                    <FormularioAlteracaoServico tema="purple lighten-4"/>
                    <ListaServico tema="purple lighten-4"/>
                    <FormularioDeletaServico tema="purple lighten-4"/>

                </>
            )
        }
        if (this.state.tela === 'Adicionar Produto ou Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <AdicionarProduto tema="purple lighten-4"/>
                    <AdicionarServico tema="purple lighten-4"/>
                </>
            )
        }

        if (this.state.tela === 'Listagens Especificas') {
            return(
                <>
                    {barraNavegacao}
                    <ListaPorGenero  tema="purple lighten-4"/>
                </>
            )
            
        }

    }
}