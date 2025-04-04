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
  const [showFilters, setShowFilters] = useState(false);

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

    <div className="tw-h-screen tw-flex tw-justify-center tw-items-start tw-py-8">
      <div className="tw-p-4 tw-w-full max-w-5x1">
        {/* 🔹 Título da tabela */}
        <h2 className="tw-text-2x1 tw-font-bold tw-mb-4 tw-text-center tw-uppercase">
          Lista de Trocas de EPI
        </h2>

        {/* 🔹 Botão para exibir/ocultar filtros */}
        {exibirFiltros && (
          <div className="tw-mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-py-2 tw-px-4 tw-rounded"
            >
              {showFilters ? "Ocultar Filtros" : "Mostrar Filtros"}
            </button>

            {/* Flyout dos filtros */}
            <div
              className={`tw-overflow-hidden tw-bg-gray-100 tw-shadow-lg tw-rounded tw-p-4 tw-mt-2 tw-transition-all tw-duration-1000 ${
                showFilters
                  ? "tw-max-h-[200px] tw-opacity-100"
                  : "tw-max-h-0 tw-opacity-0 tw-pointer-events-none"
              }`}
            >
              <label className="tw-mr-4">
                Data Início:
                <input
                  className="tw-bg-gray-200 tw-p-2 tw-rounded tw-ml-2"
                  type="date"
                  value={dataInicio}
                  onChange={(e) => setDataInicio(e.target.value)}
                />
              </label>

              <label className="tw-mr-4">
                Data Fim:
                <input
                  className="tw-bg-gray-200 tw-p-2 tw-rounded tw-ml-2"
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
                className="tw-bg-blue-500 hover:tw-bg-blue-600 tw-text-white tw-py-2 tw-px-4 tw-rounded"
              >
                Consultar
              </button>
            </div>
          </div>
        )}

        {/* Tabela */}
        <div className="tw-overflow-x-auto">
          <table className="tw-border tw-border-gray-300 tw-text-center tw-table-fixed">
            <thead>
              <tr className="tw-bg-gray-200">
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  funcionário
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  epi
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  descrição
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  ca
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  quantidade
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  motivo
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  setor
                </th>
                <th className="tw-py-3 tw-px-4 tw-texte-center tw-text-gray-700 tw-font-bold tw-uppercase tw-w-45">
                  data/hora
                </th>
                <th className="tw-py-3 tw-px-4 tw-text-center tw-text-gray-700 tw-font-bold tw-uppercase">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {allTabela.length > 0 ? (
                allTabela.map((user, index) => (
                  <tr
                    key={user.id}
                    className={`tw-border-b ${
                      index % 2 === 0 ? "tw-bg-gray-100" : "tw-bg-gray-200"
                    }`}
                  >
                    <td className="tw-px-4">
                      {user.funcionario?.nome || "Nome não disponível"}
                    </td>
                    <td className="tw-px-4">{user.epi?.descricao}</td>
                    <td className="tw-px-4">{user.funcionario?.registro}</td>
                    <td className="tw-px-4">{user.epi?.ca}</td>
                    <td className="tw-px-4">{user.quantidade}</td>
                    <td className="tw-px-4">{user.motivo}</td>
                    <td className="tw-px-4">{user.funcionario?.setor}</td>
                    <td className="tw-px-4">
                      {new Date(user.dataTroca).toLocaleString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                      })}
                    </td>
                    <td className="tw-px-4 tw-text-center">
                      <button onClick={() => deleteTrocas(user.id)}>
                        <img width="30px" src={Trash} alt="Ícone de Lixeira" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="tw-py-3 tw-pw-4 tw-text-center">
                    Nenhuma troca registrada.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TabelaTroca;
