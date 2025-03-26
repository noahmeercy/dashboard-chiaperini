// import { Title } from "./style"
import './login.css'
import logo from '../../assets/logo.png';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';


function Login() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value

            })


            localStorage.setItem('token', token)
            console.log(token)
            alert("Login Ok")

            navigate('/dashboard-home')

        } catch (err) {
            alert("Senha ou Email incorretos")
        }
    }

    return (

        <main className='wrapper'>
            <div className='container'>
            <div className='logo'>
                <img src={logo} alt='logo_chiaperini' />
            </div>
            <div className="title-login">
                <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input-box'>
                    <input ref={emailRef} placeholder='Usuário' type='email' />
                    <i className='bx bxs-user' />
                </div>
                <div className='input-box'>
                    <input ref={passwordRef} placeholder='Senha' type='password' />
                    <i className='bx bxs-lock-alt' />
                </div>
                <button type="submit" className='login'>Entrar</button>
            </form>
            </div>


            {/* <div className='remember-forgot'>
                <label>
                    <input type='checkbox' />
                    Lembrar Login
                </label>
                <a href='#'>REDEFINIR SENHA</a>
            </div>

            <div className='register-link'>
                <p>Não tem uma conta? <Link to="/Cadastro">Cadastre-se</Link></p>
            </div> */}

        </main>

    )
}

export default Login