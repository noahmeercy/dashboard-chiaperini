import "./trocarepi.css";
import api from "../../../services/api";
import { useState } from "react";

function trocarEpi() {
  const [registro, setRegistro] = useState("");
  const [codigo, setCodigo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [dataTroca, setDataTroca] = useState("");

  async function handleSubmit(event) {
    event.preventDefault(); // Previne o recarregamento da página

    const trocaEpi = {
      registro,
      codigo,
      motivo,
      dataTroca,
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
          <input placeholder="Digite o EPI"
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input placeholder="Motivo"
          type="text"
          value={motivo}
          onChange={(e) => setMotivo(e.target.value)}
          />
        </div>

        <div className="input-box">
          <input placeholder="Data"
          type="date"
          value={dataTroca}
          onChange={(e) => setDataTroca(e.target.value)}
          />
        </div>

        <button type="submit">Registrar Troca</button>
      </form>
    </div>
  );
}

export default trocarEpi;
