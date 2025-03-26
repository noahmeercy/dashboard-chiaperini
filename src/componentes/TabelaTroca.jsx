import { useEffect, useState } from "react";
import Trash from "../assets/trash-solid.svg";
import api from "../services/api";

function TabelaTroca({  refreshSignal, exibirFiltros = true, modoFiltro = "tabela"  }) {
  const [allTabela, setTabela] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [filtrando, setFiltrando] = useState(false);

  // 🔄 Carrega as trocas sempre que `refreshSignal` mudar
  useEffect(() => {
    if (!filtrando) {
      loadTrocas(); //  Se não estiver filtrando, carrega as trocas do dia
    }
  }, [refreshSignal]);
  

  // 🔍 Busca as trocas com base nos filtros ou na data de hoje
  async function loadTrocas() {
    try {
      const params = {};
      // Se estiver na tela principal, carregar só as trocas do dia
      if (modoFiltro === "telaPrincipal") {
        const hoje = new Date().toISOString().split("T")[0];
        params.dataInicio = hoje;
        params.dataFim = hoje;
      }

      // Se o usuário ativar a filtragem na TabelaTroca, aplicar os filtros
      if (modoFiltro === "tabela" && filtrando && dataInicio && dataFim) {
        params.dataInicio = dataInicio;
        params.dataFim = dataFim;
      }
      const { data } = await api.get("/filtro-troca", { params });
      setTabela(data);
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  }

  // 🚮 Função para Deletar as Trocas Individualmente
  async function deleteTrocas(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta troca?"
    );
    if (!confirmar) return;

    try {
      await api.delete(`/tabela-troca/${id}`);

      // 🔹 Atualiza a lista removendo localmente antes de buscar no backend
      setTabela((prevTabela) => prevTabela.filter((troca) => troca.id !== id));

      // 🔄 Recarrega a tabela para garantir que os dados estão atualizados
      setFiltrando(false);
      loadTrocas();
    } catch (error) {
      console.error("Erro ao excluir a troca:", error);
      alert("Falha ao excluir a troca. Tente novamente!");
    }
  }

  return (
    <div>
      <h2>Lista de Trocas de EPI</h2>

      {/* 🔹 Inputs para selecionar datas */}
      {exibirFiltros && (
        <>
          <label>
            Data Início:
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
            />
          </label>

          <label>
            Data Fim:
            <input
              type="date"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
            />
          </label>

          {/* 🔍 Botão "Consultar" */}
          <button
            onClick={() => {
              setFiltrando(true);
              loadTrocas();
            }}
          >
            Consultar
          </button>
        </>
      )}

      {/* 📜 Exibição das trocas */}
      <ul>
        {allTabela.length > 0 ? (
          allTabela.map((user) => (
            <li key={user.id}>
              <p>Nome: {user.funcionario?.nome || "Nome não disponível"}</p>
              <p>Motivo: {user.motivo}</p>
              <p>Descrição: {user.epi?.descricao}</p>
              <p>CA: {user.epi?.ca}</p>
              <p>Quantidade: {user.quantidade}</p>
              <p>Registro: {user.funcionario?.registro}</p>
              <p>Setor: {user.funcionario?.setor}</p>
              <p>
                Data da Troca:{" "}
                {new Date(user.dataTroca).toLocaleString("pt-BR", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })}
              </p>
              <button onClick={() => deleteTrocas(user.id)}>
                <img width="30px" src={Trash} alt="Ícone de Lixeira" />
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
