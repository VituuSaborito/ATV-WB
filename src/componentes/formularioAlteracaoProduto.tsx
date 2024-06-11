import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroProduto extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                
                <h3>Alteração</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cod" type="text" className="validate" />
                            <label htmlFor="cod">Código do produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="preco" type="text" className="validate" />
                            <label htmlFor="trx">Preço do produto</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nome do produto</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                <hr />
                </form>
            </div>
        )
    }
}