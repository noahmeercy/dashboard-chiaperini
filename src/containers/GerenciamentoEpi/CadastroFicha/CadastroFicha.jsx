import "./CadastroFicha.css"
import { useState } from 'react'


function CadastroFicha() {

    const [nome, setNome] = useState("");
    const [registro, setRegistro] = useState("");
    const [cargo, setCargo] = useState("");
    const [setor, setSetor] = useState("");
    const [camisa, setCamisa] = useState("");
    const [calca, setCalca] = useState ("");
    const [calcado, setCalcado] = useState("");
    const [admissao, setAdmissao] = useState("");

    



    return (

        <div className="container-ficha">
            <form>
                <div className='input-box'>
                    <input placeholder='Nome do Funcionário' type='text' />
                </div>
                <div className="input-box">
                    <input placeholder='Número do Registro' type="number" />
                </div>
                <div className="input-box">
                    <input placeholder='Data de admissão' type="date" />
                </div>
                <div className="input-box">
                    <input placeholder='Função' type="text" />
                </div>
                <div className="input-box">
                    <input placeholder='Setor' type="text" />
                </div>
                <div className="input-box">
                    <input placeholder='Tamanho da Camisa' type="text" />
                </div>
                <div className="input-box">
                    <input placeholder='Tamanho da Calça' type="text" />
                </div>
                <div className="input-box">
                    <input placeholder='Tamanho do Calçado' type="number" />
                </div>
            </form>
        </div>

    )
}

export default CadastroFicha