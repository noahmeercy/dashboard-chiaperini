import { useState } from "react"
import api from '../../../services/api'



function CadastroEpi() {

    const [codigo, setCodigo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ca, setCa] = useState("");

    async function handleSubmit(event) {
        event.preventDefault() // Previne o recarregamento da página

        const epi = {
            codigo,
            descricao,
            ca,
        }

        try {
    
            const response = await api.post('/private/cadastro-epi', epi)
            console.log('Funcionario cadastrado:', response.data)
            alert('EPI CADASTRADO COM SUCESSO!')


            // Resetando o formulário após cadastro
            setCodigo('');
            setDescricao('');
            setCa('');

        } catch (error) {
            console.error('Erro ao Cadastrar EPI', error)
            alert('Erro ao cadastrar um EPI. Verifique os dados e tente novamente')
        }
    }


    return (

        <div className="container-ficha">
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <input placeholder="CODIGO"
                        type="text"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        />
                </div>

                <div className="input-box">
                    <input placeholder="DESCRIÇÃO DO PRODUTO"
                   type="text"
                   value={descricao}
                   onChange={(e) => setDescricao(e.target.value)} 
                   />
                </div>

                <div className="input-box">
                    <input placeholder="CA" 
                    type="text"
                    value={ca}
                    onChange={(e) => setCa(e.target.value)}
                    />
                </div>

                <button type="submit">Cadastrar EPI</button>
            </form>
        </div>

    )
}

export default CadastroEpi