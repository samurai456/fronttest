import { ItemsToolBar } from './itemsToolBar'
import { ItemsTable } from './itemsTable'

function ItemsPanel(){
    return(
        <div>
            <div className="mb-4">
                <ItemsToolBar />
            </div>
            <ItemsTable />
        </div>
    )
}

export { ItemsPanel }