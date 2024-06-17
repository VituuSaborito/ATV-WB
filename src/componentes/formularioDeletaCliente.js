import React from 'react';
export default function FormularioDeletaCliente(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
        <h1>Deletar Cliente</h1>
            <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action">Deletar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                <hr />
                </form>
        </div>
    )
}