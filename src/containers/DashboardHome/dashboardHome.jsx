import './dashboardHome.css'



function DashboardHome() {
    return (
        <main className='container-dash'>
            <div className='container-card'>
                <div className='card red'>
                    <h3 className='tip'>RH</h3>
                    <p className="second-text">Lorem Ipsum</p>
                </div>
                <div className='card blue'>
                    <h3 className='tip'>ALMOXARIFADO</h3>
                    <p className="second-text">Lorem Ipsum</p>
                </div>
                <div className='card green'>
                    <h3 className='tip'>COMPRAS</h3>
                    <p className="second-text">Lorem Ipsum</p>
                </div>
                <div className='card orange'>
                    <h3 className='tip'>NACIONALIZADO</h3>
                    <p className="second-text">Lorem Ipsum</p>
                </div>
            </div>

        </main >
    );
}

export default DashboardHome