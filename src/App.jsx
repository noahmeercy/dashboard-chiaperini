import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from './containers/Login/login'
import Cadastro from './containers/Cadastro/cadastro'
import ListarUsuarios from "./containers/Lista/lista"
import Dashboard from "./containers/dashboard/dashboard"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/listar-usuarios" element={<ListarUsuarios/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App