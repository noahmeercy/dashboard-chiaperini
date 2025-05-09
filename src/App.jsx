import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from './containers/Login/login'
import Cadastro from './containers/Cadastro/cadastro'
import ListarUsuarios from "./containers/Lista/lista"
// import DashboardHome from "./containers/DashboardHome/dashboardHome"
import DashboardContent from './componentes/DashboardContent/DashboardContent';
import AlmoxarifadoHome from "./containers/AlmoxarifadoHome/almoxarifadohome"
import GerenciamentoEpi from "./containers/GerenciamentoEpi/gerenciamentoepi"
import CadastroFicha from "./containers/GerenciamentoEpi/CadastroFicha/CadastroFicha"
import CadastroEpi from "./containers/GerenciamentoEpi/CadastroEpi/CadastroEpi"
import TrocarEpi from "./containers/GerenciamentoEpi/TrocarEpi/trocarepi"
import TabelaTroca from "./componentes/TabelaTroca"

import Layout from "./componentes/Layout/Layout";

function App() {

    return (
        <BrowserRouter>
            <Routes>  
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />


                <Route path="/listar-usuarios" element={<Layout><ListarUsuarios/></Layout>} />
                <Route path="/dashboard-home" element={<Layout><DashboardContent/></Layout>} />
                <Route path="/almoxarifado-home" element={<Layout><AlmoxarifadoHome/></Layout>} />
                <Route path="/gerenciamento-epi" element={<Layout><GerenciamentoEpi/></Layout>} />
                <Route path="/cadastro-ficha" element={<Layout><CadastroFicha/></Layout>} />
                <Route path="/cadastro-epi" element={<Layout><CadastroEpi/></Layout>} />
                <Route path="/trocar-epi" element={<Layout><TrocarEpi/></Layout>} />
                <Route path="/tabela-troca" element={<Layout><TabelaTroca exibirFiltros={true}/></Layout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App