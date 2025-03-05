import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Home from './containers/Home'
// import Cadastro from './containers/Cadastro'
import App from './App'
import MyGlobalStyles from './styles/globalStyles'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyGlobalStyles />
    {/* <Home /> */}
    {/* <Cadastro /> */}
    <App />
  </StrictMode>,
)
