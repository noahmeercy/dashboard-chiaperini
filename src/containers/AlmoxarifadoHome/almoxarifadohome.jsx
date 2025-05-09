import React from "react";
import { Link } from "react-router-dom";

function AlmoxarifadoHome() {
  return (
    <main>
        <h1 className="tw-flex tw-justify-center tw-text-2xl tw-font-bold tw-mb-4">
          Dashboard Almoxarifado
        </h1>

        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-4">

        <div className="tw-mb-4 tw-bg-slate-200 tw-p-4 tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center hover:tw-bg-slate-500 hover:tw-cursor-pointer"> 
        <span>GERENCIAMENTO DE ESTOQUE</span>
        </div>
        <Link to={"/gerenciamento-epi"}>
          <div className="tw-mb-4 tw-bg-slate-200 tw-p-4 tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center hover:tw-bg-slate-500 hover:tw-cursor-pointer"> 
            <span>GERENCIAMENTO DE EPI</span>
          </div>  
        </Link>
        </div>
    </main>
  );
}

export default AlmoxarifadoHome;
