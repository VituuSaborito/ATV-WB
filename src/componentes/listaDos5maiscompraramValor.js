import React from 'react';
export default function Lista5MenosConsumiram (props) {
        // let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista dos consumidores que mais gastaram</h3>
            <div className="collection">
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <a className="collection-item">Cliente 5</a>
            
                <hr />
            </div>
            </>
        )
    }
