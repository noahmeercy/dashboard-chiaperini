// import { Title } from "./style"
import './home.css'
import logo from '../../assets/logo.png';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';


function Home() {

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const data = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value

            })

            console.log(data)
            alert("Login Ok")
        } catch (err) {
            alert("Senha ou Email incorretos")
        }
    }

    return (

        <main className='container'>
            <div className='logo'>
                <img src={logo} alt='logo_chiaperini' />
            </div>
            <div className="title-login">
                <h2>Login</h2>
            </div>
            <form>
                <div className='input-box'>
                    <input ref={emailRef} placeholder='Usuário' type='email' />
                    <i className='bx bxs-user' />
                </div>
                <div className='input-box'>
                    <input ref={passwordRef} placeholder='Senha' type='password' />
                    <i className='bx bxs-lock-alt' />
                </div>
            </form>

            <div className='remember-forgot'>
                <label>
                    <input type='checkbox' />
                    Lembrar Login
                </label>
                <a href='#'>REDEFINIR SENHA</a>
            </div>
            <button type="submit" className='login'>Entrar</button>

            <div className='register-link'>
                <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
            </div>
        </main>

    )
}

export default Home