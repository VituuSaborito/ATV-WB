import { useEffect, useState } from "react";
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const [clientes, setClientes] = useState([])

    useEffect(() => {
        buscaClientes()
    }, [])

    const buscaClientes = async() => {
        try {
            const response = await fetch('http://localhost:32832/clientes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            setClientes(result)

        } catch (error) {
            alert('Erro ao conectar com o servidor');
            console.error(error);
            return null
        }
    }

    // const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <h1>Lista Cliente</h1>    
            {clientes.map(cliente => (
                <a className="collection-item">ID: {cliente.id} | {cliente.nome} | {cliente.sobreNome}</a>
            ))}
            {/* <a className={estilo}>Cliente 2</a>
            <a className="collection-item">Cliente 3</a>
            <a className="collection-item">Cliente 4</a> */}
        </div>
    )
}