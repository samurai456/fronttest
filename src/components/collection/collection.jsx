import { CollectionDetails } from './collectionDetails/collectionDetails'
import { ItemsPanel } from './itemsPanel/itemsPanel'

function Collection(){
    return(
        <div className="m-4 d-flex flex-column">
            <CollectionDetails />
            <b className="fs-4 align-self-center my-4">Collection items</b>
            <ItemsPanel />
        </div>
    )
}

export { Collection }