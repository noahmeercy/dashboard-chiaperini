import { useEffect, useState } from "react";
import Trash from "../assets/trash-solid.svg";
import api from "../services/api"; // Certifique-se que o axios está configurado corretamente

function TabelaTroca({ refreshSignal }) {
  const [allTabela, setTabela] = useState([]);

  useEffect(() => {
    loadTrocas();
  }, [refreshSignal]);

  // Função para carregar as trocas
  async function loadTrocas() {
    try {
      const { data } = await api.get("/tabela-troca");
      setTabela(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

  // Função para Deletar as Troca Individualmente
  async function deleteTrocas(id) {
    // Exibe um alerta perguntando se o usuário deseja excluir
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta troca?"
    );
    // Se o usuário clicar em "Cancelar", a função para aqui e não executa mais nada
    if (!confirmar) return;

    try {
      // Remove da lista localmente para feedback imediato
      setTabela((prevTabela) => prevTabela.filter((troca) => troca.id !== id));

      // Faz a requisição DELETE para remover do banco de dados
      await api.delete(`/tabela-troca/${id}`);

      // Recarrega a lista completa do servidor para garantir que tudo está atualizado
      await loadTrocas();
    } catch (error) {
      console.error("Erro ao excluir a troca:", error);
      alert("Falha ao excluir a troca. Tente novamente!");

      // Se a exclusão falhar, podemos recarregar os dados para restaurar a lista correta
      await loadTrocas();
    }
  }

  return (
    <div>
      <h2>Lista de Trocas de EPI</h2>
      <ul>
        {allTabela.length > 0 ? (
          allTabela.map((user) => (
            <li key={user.id}>
              {/* <p>ID: {user.id}</p> */}
              <p>Nome: {user.funcionario?.nome || "Nome não disponível"}</p>
              <p>Motivo: {user.motivo}</p>
              <p>Descrição: {user.epi?.descricao}</p>
              <p>CA: {user.epi?.ca}</p>
              <p>Quantidade: {user.quantidade}</p>
              <p>Registro: {user.funcionario?.registro}</p>
              <p>Setor: {user.funcionario?.setor}</p>
              <p>Data da Troca: {new Date(user.dataTroca).toLocaleString("pt-BR", {
                day: "2-digit", 
                month: "2-digit", 
                year: "numeric", 
                hour: "2-digit", 
                minute: "2-digit", 
                second: "2-digit" 
              })}</p>
              <button onClick={() => deleteTrocas(user.id)}>
                <img width="30px" src={Trash} alt="ìcone de Lixeira" />
              </button>
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
