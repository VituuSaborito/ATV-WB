import React from 'react';
export default function FormularioAlterarServico(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
        <h1>Deletar Serviço</h1>
           <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cod" type="text" className="validate" />
                            <label htmlFor="cod">Código do serviço</label>
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