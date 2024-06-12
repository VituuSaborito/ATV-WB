/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
}

export default class ListaTop10Menos extends Component<props> {
    render() {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista dos clientes que menos consumiram produtos ou serviços</h3>
            <div className="collection">
                <h3>Produtos</h3>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <a className="collection-item">Cliente 5</a>
                <a className="collection-item">Cliente 6</a>
                <a className="collection-item">Cliente 7</a>
                <a className="collection-item">Cliente 8</a>
                <a className="collection-item">Cliente 9</a>
                <a className="collection-item">Cliente 10</a>
                <h3>Serviços:</h3>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <a className="collection-item">Cliente 5</a>
                <a className="collection-item">Cliente 6</a>
                <a className="collection-item">Cliente 7</a>
                <a className="collection-item">Cliente 8</a>
                <a className="collection-item">Cliente 9</a>
                <a className="collection-item">Cliente 10 </a>
                <hr />
            </div>
            </>
        )
    }
}