import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUsers, FaBox, FaCog, FaFileAlt, FaTools, FaExchangeAlt, FaTable } from 'react-icons/fa';


const menuItems = [
    {text: 'Dashboard', path: '/dashboard-home', icon: FaHome},
    {text: 'Almoxarifado', path: '/almoxarifado-home', icon: FaBox},

    // {text: 'Gerenciamento de EPI', path: '/gerenciamento-epi', icon: FaTools},
    // {text: 'Cadastro de Ficha', path: '/cadastro-ficha', icon: FaTools},
    // {text: 'Cadastro de EPI', path: '/cadastro-epi', icon: FaTools},
    // {text: 'Trocar EPI', path: '/trocar-epi',icon: FaTools},
    {text: 'Tabela de Troca', path: '/tabela-troca',icon: FaTable}
];

function Sidebar() {
     return (
        <div className='tw-w-30 tw-bg-gray-800 tw-text-white tw-p-4'>
            {/* <h2 className='tw-text-2xl tw-font-semibold tw-mb-4 tw-text-center'>MENU</h2> */}
            <ul className='tw-list-none tw-p-0'>
                {menuItems.map((item) => (
                    <li key={item.path} className='tw-mb-2 tw-relative'>
                        <Link
                         to={item.path}
                         className='tw-p-2 tw-rounded hover:tw-bg-gray-700 tw-transition tw-duration-200 tw-ease-in-out tw-flex tw-items-center tw-justify-center'
                         >
                            {item.icon && <item.icon className="tw-text-xl" />}
                    
                        </Link>
                    </li>
                ))}
            </ul> 
        </div>
     ); 
} 

export default Sidebar;