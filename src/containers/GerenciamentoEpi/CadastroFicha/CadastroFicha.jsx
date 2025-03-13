import "./CadastroFicha.css"
import { useState } from 'react'
import api from '../../../services/api'



function CadastroFicha() {

    const [nome, setNome] = useState("");
    const [registro, setRegistro] = useState("");
    const [cargo, setCargo] = useState("");
    const [setor, setSetor] = useState("");
    const [camisa, setCamisa] = useState("");
    const [calca, setCalca] = useState("");
    const [calcado, setCalcado] = useState("");
    const [admissao, setAdmissao] = useState("");

    async function handleSubmit(event) {
        event.preventDefault() // Previne o recarregamento da página


        const funcionario = {
            nome,
            registro,
            setor,
            camisa,
            calca,
            calcado,
            admissao,
        }

        try {
            const response = await api.post('/private/cadastro-ficha', funcionario)
            // console.log('Funcionario cadastrado:', response.data) -- depuração (debug)
            alert('Funcionário cadastrado com sucesso!')

            // Resetando o formulário após cadastro
            setNome('');
            setRegistro('');
            setCargo('');
            setSetor('');
            setCamisa('');
            setCalca('');
            setCalcado('');
            setAdmissao('');

        } catch (error) {
            console.error('Erro ao Cadastrar funcionário', error)
            alert('Erro ao cadastrar funcionário. Verifique os dados e tente novamente')
        }

    }

    return (

        <div className="container-ficha">
            <form onSubmit={handleSubmit}>

                <div className='input-box'>
                    <input placeholder='Nome do Funcionário'
                        type='text'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Número do Registro'
                        type="text"
                        value={registro}
                        onChange={(e) => setRegistro(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Função'
                        type="text"
                        value={cargo}
                        onChange={(e) => setCargo(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Setor'
                        type="text"
                        value={setor}
                        onChange={(e) => setSetor(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Tamanho da Camisa'
                        type="text"
                        value={camisa}
                        onChange={(e) => setCamisa(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Tamanho da Calça'
                        type="text"
                        value={calca}
                        onChange={(e) => setCalca(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Tamanho do Calçado'
                        type="text"
                        value={calcado}
                        onChange={(e) => setCalcado(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <input placeholder='Data Admissão'
                        type="text"
                        value={admissao}
                        onChange={(e) => setAdmissao(e.target.value)}
                    />
                </div>
                <button type="submit">Cadastrar Funcionário</button>
            </form>
        </div>

    )
}

export default CadastroFicha