import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MyGlobalStyles from './styles/globalStyles'
import './index.css'

// import Home from './containers/Home'
// import Cadastro from './containers/Cadastro'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    {/* <Home /> */}
    {/* <Cadastro /> */}
    <App />
  </StrictMode>,
)
