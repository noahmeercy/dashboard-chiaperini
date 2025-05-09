import React from 'react';
import { Link } from 'react-router-dom';


const menuItems = [
    {text: 'Dashboard', path: '/dashboard-home'},
    {text: 'Almoxarifado', path: '/almoxarifado-home'},
    // {text: 'Listar Usuários', path: '/listar-usuarios'},
    // {text: 'Gerenciamento de EPI', path: '/gerenciamento-epi'},
    // {text: 'Cadastro de Ficha', path: '/cadastro-ficha'},
    // {text: 'Cadastro de EPI', path: '/cadastro-epi'},
    // {text: 'Trocar EPI', path: '/trocar-epi'},
    // {text: 'Tabela de Troca', path: '/tabela-troca'}
];

function Sidebar() {
     return (
        <div className='tw-w-40 tw-bg-gray-800 tw-text-white tw-p-4'>
            <h2 className='tw-text-2xl tw-font-semibold tw-mb-4 tw-text-center'>MENU</h2>
            <ul className='tw-list-none tw-p-0'>
                {menuItems.map((item) => (
                    <li key={item.path} className='tw-mb-2'>
                        <Link
                         to={item.path}
                         className='tw-block tw-p-2 tw-rounded hover:tw-bg-gray-700 tw-transition tw-duration-200'>
                            {item.text}
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>
     ); 
} 

export default Sidebar;