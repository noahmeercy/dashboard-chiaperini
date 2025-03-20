import { useEffect, useState } from "react";
import api from "../services/api"; // Certifique-se que o axios está configurado corretamente

function TabelaTroca() {
    const [allTabela, setTabela] = useState([]);

    useEffect(() => {
        async function loadTrocas() {
            try {
                const { data } = await api.get('/tabela-troca'); 
                setTabela(data); 
            } catch (error) {
                console.error("Erro ao buscar os dados:", error);
            }
        }

        loadTrocas();
    }, []);

    return (
        <div>
            <h2>Lista de Trocas de EPI</h2>
            <ul>
                {allTabela.length > 0 ? (
                    allTabela.map(user => (
                        <li key={user.id}>
                            {/* <p>ID: {user.id}</p> */}
                            <p>Nome: {user.funcionario?.nome || "Nome não disponível"}</p>
                            <p>Motivo: {user.motivo}</p>
                            <p>Descrição: {user.epi?.descricao}</p>
                            <p>CA: {user.epi?.ca}</p>
                            <p>Quantidade: {user.quantidade}</p>
                            <p>Registro: {user.funcionario?.registro}</p>
                            <p>Setor: {user.funcionario?.setor}</p>
                            <p>Data da Troca: {user.dataTroca}</p>
                        </li>
                    ))
                ) : (
                    <p>Nenhuma troca registrada.</p>
                )}
            </ul>
        </div>
    );
}

export default TabelaTroca;
