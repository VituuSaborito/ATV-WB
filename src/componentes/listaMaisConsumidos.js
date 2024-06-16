export default function ListaMaisConsumiramQuant (props) {
        let estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista dos produtos e dos serviços mais consumidos</h3>
            <div className="collection">
                <h3>Produtos</h3>
                <a className="collection-item">Produto 1</a>
                <a className="collection-item">Produto 2</a>
                <a className="collection-item">Produto 3</a>
                
                <h3>Serviços:</h3>
                <a className="collection-item">Serviço 1</a>
                <a className="collection-item">Serviço 2</a>
                <a className="collection-item">Serviço 2</a>
                <hr />
            </div>
            </>
        )
    }