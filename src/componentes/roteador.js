import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaClientes from "./listaClientes";
import ListaProdutos from "./listaProdutos";
import ListaServicos from "./listaServicos";
import FormularioAlterarCliente from "./formularioAlterarCliente";
import FormularioAlterarProduto from "./formularioAlterarProduto";
import FormularioAlterarServico from "./formularioAlterarServico";
import FormularioDeletaCliente from "./formularioDeletaCliente";
import FormularioDeletaProduto from "./formularioDeletaProduto";
import FormularioDeletaServico from "./formularioDeletaServico";
import Lista5MenosConsumiram from "./listaDos5maiscompraramValor";
import ListaConsumidosPorGenero from "./listaConsumidosPorGenero";
import ListaMaisConsumiramQuant from "./listaMaisConsumidos";
import ListaTop10Compras from "./listaTop10Compras";
import ListaTop10Menos from "./listaTop10MenosConsumiram";
import ListaPorGenero from "./listagemPorGenero";


export default function Roteador() {
    const [tela, setTela] = useState('Clientes','Produtos','Serviços','Listagens Especificas')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços','Listagens Especificas']} />
                    <FormularioCadastroCliente tema="purple lighten-4"/>
                    <ListaClientes tema="purple lighten-4" />
                    <FormularioAlterarCliente tema="purple lighten-4"/>
                    <FormularioDeletaCliente tema="purple lighten-4"/>
                </>
            )
        } 
        if (tela === 'Produtos') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços','Listagens Especificas']} />
                    <FormularioCadastroProduto tema="purple lighten-4"/>
                    <ListaProdutos tema="purple lighten-4" />
                    <FormularioAlterarProduto tema="purple lighten-4"/>
                    <FormularioDeletaProduto tema="purple lighten-4"/>
                </>
            )
        } 
        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços','Listagens Especificas']} />
                    <FormularioCadastroServico tema="purple lighten-4"/>
                    <ListaServicos tema="purple lighten-4" />
                    <FormularioAlterarServico tema="purple lighten-4"/>
                    <FormularioDeletaServico tema="purple lighten-4"/>
                </>
            )
        } 
         if (tela === 'Listagens Especificas') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços','Listagens Especificas']} />
                    <ListaPorGenero  tema="purple lighten-4"/>
                    <Lista5MenosConsumiram tema="purple lighten-4"/>
                    <ListaConsumidosPorGenero tema="purple lighten-4"/>
                    <ListaMaisConsumiramQuant tema="purple lighten-4"/>
                    <ListaTop10Compras tema="purple lighten-4"/>
                    <ListaTop10Menos tema="purple lighten-4"/>
                </>
            )
        } 

    }

    return (
        construirView()
    )
}