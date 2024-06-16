import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import FormularioAlterarCliente from "./formularioAlterarCliente";
import FormularioDeletaCliente from "./formularioDeletaCliente";

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
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços']} />
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
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4"/>
                    <ListaClientes tema="purple lighten-4" />
                    <FormularioAlterarCliente tema="purple lighten-4"/>
                    <FormularioDeletaCliente tema="purple lighten-4"/>
                </>
            )
        } 
        if (tela === 'Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos','Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4"/>
                    <ListaClientes tema="purple lighten-4" />
                    <FormularioAlterarCliente tema="purple lighten-4"/>
                    <FormularioDeletaCliente tema="purple lighten-4"/>
                </>
            )
        } 
         if (tela === 'Listagens Especificas') {
            return (
                <>
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