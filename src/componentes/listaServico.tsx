/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaServico extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista</h3>
            <div className="collection">
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
                <hr />
            </div>
            </>
        )
    }
}