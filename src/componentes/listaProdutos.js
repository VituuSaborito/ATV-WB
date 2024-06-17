import React from 'react';
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaProduto(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
            <h1>Lista Produto</h1>    

            <a className="collection-item">Produto 1</a>
            <a className={estilo}>Produto 2</a>
            <a className="collection-item">Produto 3</a>
            <a className="collection-item">Produto 4</a>
        </div>
    )
}