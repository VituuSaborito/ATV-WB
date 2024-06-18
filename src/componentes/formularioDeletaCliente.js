import { useEffect, useRef, useState } from "react"

export default function FormularioDeletaCliente(props){
    const [cliente, setClientes] = useState([])
    const id = useRef(null)

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

    const deletaCliente = async() => {
        const response = await fetch('http://localhost:32832/cliente/excluir', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id.current.value
            })
        })
        id.current.value = ""
        const result = await response.json()
        setClientes(result)
    }

    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
        <h1>Deletar Cliente</h1>
            <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" ref={id} />
                            <label htmlFor="cpf">ID</label>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloBotao} type="submit" name="action" onClick={deletaCliente}>Deletar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                <hr />
                </form>
        </div>
    )
}