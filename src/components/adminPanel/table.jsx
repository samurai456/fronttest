import { TableHead } from './tableHead'
import { TableBody } from './tableBody'
import { useState } from 'react'

function Table(){
    const [users, setUsers] = useState(data);

    return(
        <table className="table table-striped mt-4">
            <TableHead setUsers={setUsers} />
            <TableBody users={users} setUsers={setUsers} />
        </table>
    )
}

export { Table }






const data = [
    {
        id: 1,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: true,
        checked: false,
    },
    {
        id: 2,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'blocked',
        isAdmin: true,
        checked: false,
    },
    {
        id: 3,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: false,
        checked: false,
    },
    {
        id: 4,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'blocked',
        isAdmin: false,
        checked: false,
    },
    {
        id: 5,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: true,
        checked: false,
    },
    {
        id: 6,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: true,
        checked: false,
    },
    {
        id: 7,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: true,
        checked: false,
    },
    {
        id: 8,
        nickname: 'sam',
        email: 'some@mail',
        registrationDate: '2542-40-45',
        lastLoginDate: '2074-45-65',
        status: 'active',
        isAdmin: true,
        checked: false,
    }
]