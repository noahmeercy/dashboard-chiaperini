import { Link } from 'react-router-dom'
import './almoxarifadohome.css'




function AlmoxarifadoHome() {
    return (
        <main className='container-dash'>
            <div className='container-card'>
                <div className='card red'>
                    <h3 className='tip'>TESTE</h3>
                    <p className="second-text">GERENCIAMENTO DE ESTOQUE</p>
                </div>
                <Link to={"/gerenciamento-epi"}>
                    <div className='card blue'>
                        <h3 className='tip'>TESTE</h3>
                        <p className="second-text">GERENCIAMENTO DE EPI</p>
                    </div>
                </Link>
            </div>
        </main>
    )
}

export default AlmoxarifadoHome