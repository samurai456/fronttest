import sigarsPic from '../../adminPanel/static/sigars.jfif'
import bookPic from '../../adminPanel/static/book.avif'

function CollectionDetails(){

    return(
        <div className="row border">
            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-12 row justify-content-center">
                <div className="position-relative col-md-12 col-sm-8 col-10" style={{height: 320}}>
                    <img src={bookPic} width="90%" height="90%" className="position-absolute rounded m-auto top-0 bottom-0 start-0 end-0"/>
                </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 d-flex flex-column fs-4 p-4">
                <div><b>Collection name: </b>{collection.name}</div>
                <div><b>Description: </b>{collection.description}</div>
                <div><b>Topic: </b>{collection.topic}</div>
            </div>
        </div>
    )
}

export { CollectionDetails }


const collection ={
    name: 'Cuban sigars',
    description: 'This collection will contain a list of very valuable and rare cuban sigars',
    topic: 'Sigars',
}