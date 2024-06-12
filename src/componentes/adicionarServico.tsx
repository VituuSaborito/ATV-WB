import { Component } from "react";

type props = {
    tema: string
}

export default class AdicionarServico extends Component<props> {
    
     render() {
         let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (

            <div className="row">
                
                <h3>Adicionar um serviço a um cliente</h3>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF do cliente</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="cod" type="text" className="validate" />
                            <label htmlFor="trx">Código do Serviço</label>
                        </div>
                    </div>
                </form>
                <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Cadastarar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
            </div>
        )
    }

}