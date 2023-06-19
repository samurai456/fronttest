
function TableHead({setUsers}){

    function handleChange(e){
        setUsers(old=>old.map(i=>({...i, checked: e.target.checked})));
    }

    return(
        <thead>
            <tr>
                <th className="text-center">
                    <input 
                        type="checkbox" 
                        onChange={handleChange}
                    />
                </th>
                <th>ID</th>
                <th>Nickname</th>
                <th>Email</th>
                <th>Registration date</th>
                <th>Last login date</th>
                <th>Status</th>
                <th>is admin</th>
            </tr>
        </thead>
    )
}

export { TableHead }