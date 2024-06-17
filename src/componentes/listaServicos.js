import React from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaServico(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <h1>Lista Serviço</h1>
            <a className="collection-item">Serviço 1</a>
            <a className={estilo}>Serviço 2</a>
            <a className="collection-item">Serviço 3</a>
            <a className="collection-item">Serviço 4</a>
        </div>
    )
}