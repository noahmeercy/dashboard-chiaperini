import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Home from './containers/Home/home'
import Cadastro from './containers/Cadastro/cadastro'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App