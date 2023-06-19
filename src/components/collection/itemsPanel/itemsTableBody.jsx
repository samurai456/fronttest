
function ItemsTableBody(){
    return(
        <tbody>
            {items.map(i=>(
                <tr key={i.id}>
                    <td className="text-center">
                        <input type="checkbox"/>
                    </td>
                    <td>{i.id}</td>
                    <td>{i.name}</td>
                    <td>{i.tags[0]}</td>
                    <td>{i.publicationDate}</td>
                    <td>{i.author}</td>
                </tr>
            ))}
        </tbody>
    )
}

export { ItemsTableBody }


const items = [
    {
        id: 'ssd456d1a32s1d6',
        name: 'sigar 1986 y',
        tags: ['some', 'very', 'cool'],
        publicationDate: '2020-12-85',
        author: 'Yoel Romero',
    },
    {
        id: 'ssd456d1a32dsads',
        name: 'sigar 1986 y',
        tags: ['some', 'very', 'cool'],
        publicationDate: '2020-12-85',
        author: 'Yoel Romero',
    },
    {
        id: 'ssd456d1gdsf1d6',
        name: 'sigar 1986 y',
        tags: ['some', 'very', 'cool'],
        publicationDate: '2020-12-85',
        author: 'Yoel Romero',
    },
    {
        id: 'ssddsad1a32s1d6',
        name: 'sigar 1986 y',
        tags: ['some', 'very', 'cool'],
        publicationDate: '2020-12-85',
        author: 'Yoel Romero',
    },
    {
        id: 'ssmkknd1a32s1d6',
        name: 'sigar 1986 y',
        tags: ['some', 'very', 'cool'],
        publicationDate: '2020-12-85',
        author: 'Yoel Romero',
    },
]