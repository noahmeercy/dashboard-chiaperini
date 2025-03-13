import "./gerenciamentoepi.css"
import { Link } from "react-router-dom"




function GerenciamentoEpi () {
    return (
        <main className="container-epi">
            <Link to="/cadastro-ficha">
            <div className="button-epi">
                <p>CADASTRAR FICHA</p>
            </div>
            </Link>
        </main>
    )
}

export default GerenciamentoEpi