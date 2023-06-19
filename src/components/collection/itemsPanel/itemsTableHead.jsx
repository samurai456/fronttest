
function ItemsTableHead(){
    return(
        <thead>
            <tr>
                <th className="text-center">
                    <input 
                        type="checkbox" 
                    />
                </th>
                <th>ID</th>
                <th>Name</th>
                <th>Tags</th>
                <th>Publication date</th>
                <th>Author</th>
            </tr>
        </thead>
    )
}

export { ItemsTableHead }