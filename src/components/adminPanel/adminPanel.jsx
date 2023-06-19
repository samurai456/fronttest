import { ToolMenu } from './toolMenu.jsx'
import { Table } from './table'

function AdminPanel(){
    return(
        <div>
            <ToolMenu />
            <Table />
        </div>
    )
}

export { AdminPanel }