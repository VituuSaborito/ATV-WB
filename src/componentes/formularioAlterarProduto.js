export default function FormularioAlterarProduto(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="cod" type="text" className="validate" />
                        <label htmlFor="cod">Código do produto</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="tipo" type="text" className="validate" />
                        <label htmlFor="tipo">Tipo do produto</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="valor" type="text" className="validate" />
                        <label htmlFor="valor">Valor do produto</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="tempo" type="text" className="validate" />
                        <label htmlFor="tempo">Tempo do produto</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}