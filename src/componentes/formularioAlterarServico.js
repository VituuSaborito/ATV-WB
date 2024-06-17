export default function FormularioAlterarServico(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
            <h1>Alterar Serviço</h1>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="cod" type="text" className="validate" />
                        <label htmlFor="cod">Código do serviço</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="tipo" type="text" className="validate" />
                        <label htmlFor="tipo">Tipo do serviço</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="valor" type="text" className="validate" />
                        <label htmlFor="valor">Valor do serviço</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="tempo" type="text" className="validate" />
                        <label htmlFor="tempo">Tempo do serviço</label>
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