

function TableBody({users, setUsers}){

    function handleChange(e, id){
        const checked = e.target.checked;
        const newUsers = users.map(i=>(i.id===id)? {...i, checked}: {...i});
        setUsers(newUsers);
    }

    return(
        <tbody>
            {users.map(i=>(
                <tr key={i.id}>
                    <td className="text-center"> 
                        <input
                            type="checkbox"
                            checked={i.checked} 
                            onChange={e=>handleChange(e, i.id)}
                        />
                    </td>
                    <td>{i.id}</td>
                    <td>{i.nickname}</td>
                    <td>{i.email}</td>
                    <td>{i.registrationDate.slice(0, 10)}</td>
                    <td>{i.lastLoginDate.slice(0, 10)}</td>
                    <td className={
                        i.status==='active' ? 'text-success':'text-danger'
                    }>
                        {i.status}
                    </td>
                    <td>{i.isAdmin? 'Yes': 'No'}</td>
                </tr>
            ))}
        </tbody>
    )
}

export { TableBody }