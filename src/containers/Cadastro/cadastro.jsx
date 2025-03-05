import './cadastro.css'
import logo from '../../assets/logo.png';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api'



function Cadastro() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value

            })
            alert("Usuário cadastrado com sucesso")
        } catch (err) {
            alert("Erro ao cadastrar Usuário")
        }


    }

    return (

        <main className='container'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <h2 className='title-cadastro'>Cadastrar Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input ref={nameRef} placeholder='Digite um Nome' type='text' />
                    <i className='bx bxs-user' />
                </div>
                <div className="input-box">
                    <input ref={emailRef} placeholder='Digite um email' type="email" />
                    <i className='bx bxs-user' />
                </div>
                <div className="input-box">
                    <input ref={passwordRef} placeholder='Digite uma Senha' type="password" />
                    <i className='bx bxs-lock-alt' />
                </div>
                <button type='submit' className='cadastro'>Cadastrar</button>
            </form>
        </main>

    )
}

export default Cadastro