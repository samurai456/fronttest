import { ItemsTableBody } from './itemsTableBody'
import { ItemsTableHead } from './itemsTableHead'

function ItemsTable(){
    return(
        <table className="table table-striped mt-4">
            <ItemsTableHead />
            <ItemsTableBody />
        </table>
    )
}

export { ItemsTable }