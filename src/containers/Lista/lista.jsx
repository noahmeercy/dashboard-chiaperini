import { useEffect, useState } from "react"
import api from "../../services/api"



function ListarUsuarios() {
    const [allUsers, setAllUsers] = useState([])

    useEffect(() => {
        
        async function loadUsers() {

            const token = localStorage.getItem('token')
            const { data: { users } } = await api.get('/listar-usuarios', {
                headers: { Authorization: `Bearer ${token}` }
            })

            setAllUsers(users)

        }

        loadUsers()
    }, [])


    return (
        <div>
            <h2>Lista de Usuários</h2>
        <ul>
            {allUsers.map( user =>
                <li key={user.id}>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
            )}
        </ul>
        </div>
    )
}

export default ListarUsuarios