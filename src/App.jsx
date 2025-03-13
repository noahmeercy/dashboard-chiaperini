import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from './containers/Login/login'
import Cadastro from './containers/Cadastro/cadastro'
import ListarUsuarios from "./containers/Lista/lista"
import DashboardHome from "./containers/DashboardHome/dashboardHome"
import AlmoxarifadoHome from "./containers/AlmoxarifadoHome/almoxarifadohome"
import GerenciamentoEpi from "./containers/GerenciamentoEpi/gerenciamentoepi"
import CadastroFicha from "./containers/GerenciamentoEpi/CadastroFicha/CadastroFicha"
import CadastroEpi from "./containers/GerenciamentoEpi/CadastroEpi/CadastroEpi"



function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/listar-usuarios" element={<ListarUsuarios/>} />
                <Route path="/dashboard-home" element={<DashboardHome/>} />
                <Route path="/almoxarifado-home" element={<AlmoxarifadoHome/>} />
                <Route path="/gerenciamento-epi" element={<GerenciamentoEpi/>} />
                <Route path="/cadastro-ficha" element={<CadastroFicha/>} />
                <Route path="/cadastro-epi" element={<CadastroEpi/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App