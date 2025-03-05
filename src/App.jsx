import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Login from './containers/Login/login'
import Cadastro from './containers/Cadastro/cadastro'
import ListarUsuarios from "./containers/Lista/lista"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
                <Route path="/listar-usuarios" element={<ListarUsuarios/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App