import "./trocarepi.css";
import api from "../../../services/api";
import { useState, useEffect } from "react";
import TabelaTroca from "../../../componentes/TabelaTroca";

function trocarEpi() {
  const [registro, setRegistro] = useState("");
  const [codigo, setCodigo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [dataTroca, setDataTroca] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [refreshSignal, setRefreshSignal] = useState(0); // Sinal para atualizar a tabela

  // 🗓 Obtendo a data de hoje no formato YYYY-MM-DD
  const hoje = new Date().toISOString().split("T")[0];

  // Buscar apenas as trocas do dia atual
  useEffect(() => {
    async function fetchTrocasHoje() {
      try {
        const response = await api.get("/filtro-troca", {
          params: { dataInicio: hoje, dataFim: hoje },
        });
        fetchTrocasHoje(response.data);
      } catch (error) {
        console.error("Erro ao buscar trocas de hoje:", error);
      }
    }
    
    fetchTrocasHoje();
  }, [refreshSignal]); // Atualiza quando uma nova troca é registrada



  async function handleSubmit(event) {
    event.preventDefault(); // Previne o recarregamento da página

    const trocaEpi = {
      registro,
      codigo,
      motivo,
      dataTroca,
      quantidade,
    };

    try {
      const response = await api.post("/trocar-epi", trocaEpi);
      console.log("Troca efetuada com sucesso:", response.data);
      alert("Troca efetuada com sucesso!");

      // Resetando o formulário após a troca
      setRegistro("");
      setCodigo("");
      setMotivo("");
      setDataTroca("");
      setQuantidade("");

      // Atualiza o refreshSignal para forçar a recarga da tabela
      setRefreshSignal((prev) => prev + 1);
    } catch (error) {
      console.error("Erro ao trocar EPI", error);
      alert(
        "Erro ao fazer a troca do epi. Verifique os dados e tente novamente"
      );
    }
  }
  return (
    <div className="container-ficha">
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            placeholder="Digite o Registro"
            type="number"
            value={registro}
            onChange={(e) => setRegistro(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Digite o EPI"
            type="number"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Motivo"
            type="text"
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Quantidade"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input
            placeholder="Data"
            type="date"
            value={dataTroca}
            onChange={(e) => setDataTroca(e.target.value)}
          />
        </div>

        <button type="submit">Registrar Troca</button>
      </form>

      <TabelaTroca refreshSignal={refreshSignal} exibirFiltros={false} modoFiltro="telaPrincipal" />
    </div>
  );
}

export default trocarEpi;
