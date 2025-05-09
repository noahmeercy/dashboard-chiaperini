import React from "react";
import { Link } from "react-router-dom";

function AlmoxarifadoHome() {
  return (
    <main>
        <h1 className="tw-flex tw-justify-center tw-text-2xl tw-font-bold tw-mb-4">
          Dashboard Almoxarifado
        </h1>
        <div className="tw-mb-4">
          <p>GERENCIAMENTO DE ESTOQUE</p>
        </div>
        <Link to={"/gerenciamento-epi"}>
          <div>
            <p>GERENCIAMENTO DE EPI</p>
          </div> 
        </Link>
    </main>
  );
}

export default AlmoxarifadoHome;
