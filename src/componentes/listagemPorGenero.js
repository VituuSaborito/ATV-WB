export default function ListaPorGenero(props) {
         estilo = `collection-item active ${this.props.tema}`
        return (
            <>
            <h3>Lista por genero</h3>
            <div className="collection">
                <h3>Homens:</h3>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <h3>Mulheres:</h3>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <h3>Outros:</h3>
                <a className="collection-item">Cliente 1</a>
                <a className="collection-item">Cliente 2</a>
                <a className="collection-item">Cliente 3</a>
                <a className="collection-item">Cliente 4</a>
                <hr />
            </div>
            </>
        )
    }
