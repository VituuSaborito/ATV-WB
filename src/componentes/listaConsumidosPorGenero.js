export default function ListaConsumidosPorGenero(props) {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista de produtos mais consumidos por genero</h3>
            <div className="collection">
                <h3>Homens:</h3>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <h3>Mulheres:</h3>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <h3>Outros:</h3>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                <a className="collection-item">Produto 4</a>
                <hr />
            </div>
            <h3>Lista de serviços mais consumidos por genero</h3>
            <div className="collection">
                <h3>Homens:</h3>
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
                <h3>Mulheres:</h3>
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
                <h3>Outros:</h3>
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 3</a>
                <a className="collection-item">Serviço 4</a>
                <hr />
            </div>
            </>
        )
    }