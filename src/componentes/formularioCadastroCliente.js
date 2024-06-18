import { useEffect, useRef, useState } from "react"

export default function FormularioCadastroCliente(props){
    const [cliente, setClientes] = useState([])
    const nome = useRef(null);
    const sobreNome = useRef(null);

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

    const cadastraCliente = async() => {
        const response = await fetch('http://localhost:32832/cliente/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome.current.value,
                sobreNome: sobreNome.current.value
            })
        })
        nome.current.value = ""
        sobreNome.current.value = ""
        const result = await response.json()
        setClientes(result)
    }

    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
        <h1>Cadastrar Cliente</h1>
            <form className="col s12">
                    {/* <div className="row">
                        <div className="input-field col s6">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="rg" type="text" className="validate" />
                            <label htmlFor="trx">RG</label>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" ref={nome} />
                            <label htmlFor="first_name">Nome</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="social_name" type="text" className="validate" ref={sobreNome} />
                            <label htmlFor="social_name">Sobrenome</label>
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
                            <button className={estiloBotao} type="submit" name="action" onClick={cadastraCliente}>Cadastrar
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                <hr />
                </form>
        </div>
    )
}