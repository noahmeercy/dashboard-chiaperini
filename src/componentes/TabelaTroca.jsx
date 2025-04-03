import { useEffect, useState } from "react";
import Trash from "../assets/trash-solid.svg";
import api from "../services/api";

function TabelaTroca({
  refreshSignal,
  exibirFiltros = true,
  modoFiltro = "tabela",
}) {
  const [allTabela, setTabela] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [filtrando, setFiltrando] = useState(false);

  //  Carrega as trocas sempre que `refreshSignal` mudar
  useEffect(() => {
    console.log("🚀 Atualizando tabela com refreshSignal:", refreshSignal);
    loadTrocas();
  }, [refreshSignal]);

  //  Busca as trocas com base nos filtros ou na data de hoje
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

  //  Função para Deletar as Trocas Individualmente
  async function deleteTrocas(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir esta troca?"
    );
    if (!confirmar) return;

    try {
      await api.delete(`/tabela-troca/${id}`);
      //  Atualiza a lista removendo localmente antes de buscar no backend
      setTabela((prevTabela) => prevTabela.filter((troca) => troca.id !== id));
      //  Recarrega a tabela para garantir que os dados estão atualizados
      setTimeout(() => {
        setFiltrando(false);
        loadTrocas();
      }, 100);
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
              className="tw-mr-2 tw-bg-gray-200 tw-p-2 tw-rounded"
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

      <table>
        <thead>
          <tr>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              registro
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              nome
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              descrição
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              ca
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              quantidade
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              motivo
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              setor
            </th>
            <th className="tw-py-3 tw-px-4 tw-text-left tw-text-gray-700 tw-font-bold tw-uppercase">
              data/hora
            </th>
          </tr>
        </thead>

        <tbody>
          {allTabela.length > 0 ? (
            allTabela.map((user) => (
              <tr key={user.id}>
                <td>{user.funcionario?.registro}</td>
                <td>{user.funcionario?.nome || "Nome não disponível"}</td>
                <td>{user.epi?.descricao}</td>
                <td>{user.epi?.ca}</td>
                <td>{user.quantidade}</td>
                <td>{user.motivo}</td>
                <td>{user.funcionario?.setor}</td>
                <td>
                  {new Date(user.dataTroca).toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </td>
                <td>
                  <button onClick={() => deleteTrocas(user.id)}>
                    <img width="30px" src={Trash} alt="Ícone de Lixeira" />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9">Nenhuma troca registrada.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaTroca;
