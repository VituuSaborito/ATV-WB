import { useEffect, useRef, useState } from "react"

export default function FormularioAlterarCliente(props) {
    const [cliente, setClientes] = useState([])
    const id = useRef(null);
    const nome = useRef(null);
    const nomeSocial = useRef(null);

    useEffect(() => {
        buscaClientes()
    }, [])

    const buscaClientes = async() => {
        try {
            const response = await fetch('http://localhost:32832/clientes', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const result = await response.json();
            setClientes(result)

        } catch (error) {
            alert('Erro ao conectar com o servidor');
            console.error(error);
            return null
        }
    }

    const alteraClientes = async() => {
        if(id.current.value.length && nome.current.value.length && nomeSocial.current.value.length) {
            const response = await fetch('http://localhost:32832/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id.current.value,
                    nome: nome.current.value,
                    sobreNome: nomeSocial.current.value
                })
            })
            id.current.value = ""
            nome.current.valu = ""
            nomeSocial.current.value = ""
            const result = await response.json()
            setClientes(result)
        }
    }

    const estiloBotao = `btn waves-effect waves-light ${props.tema}`;
    return (
        <div className="row">
            <h1>Alterar Cliente</h1>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="id" type="text" className="validate" ref={id} />
                        <label htmlFor="id">ID</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <input id="nam" type="text" className="validate" ref={nome} />
                        <label htmlFor="nam">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" ref={nomeSocial} />
                        <label htmlFor="last_name">Sobrenome</label>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="input-field col s6">
                        <input id="telefone" type="text" className="validate" />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div> */}
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action" onClick={alteraClientes}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
