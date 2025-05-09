import React from 'react'
import { Link } from "react-router-dom"




function GerenciamentoEpi() {
    return (
        <main className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-mt-4">
            <Link to="/cadastro-ficha">
                <div  className="tw-mb-4 tw-bg-slate-200 tw-p-4 tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center hover:tw-bg-slate-500 hover:tw-cursor-pointer">
                    <p>CADASTRAR FICHA</p>
                </div>
            </Link>

            <Link to="/cadastro-epi">
                <div  className="tw-mb-4 tw-bg-slate-200 tw-p-4 tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center hover:tw-bg-slate-500 hover:tw-cursor-pointer">
                    <p>CADASTRAR EPI</p>
                </div>
            </Link>

            <Link to="/trocar-epi">
                <div className="tw-mb-4 tw-bg-slate-200 tw-p-4 tw-rounded-lg tw-shadow-lg tw-flex tw-justify-center tw-items-center hover:tw-bg-slate-500 hover:tw-cursor-pointer">
                    <p>TROCAR EPI</p>
                </div>
            </Link>


        </main>
    )
}

export default GerenciamentoEpi