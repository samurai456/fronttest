import plusIcon from '../adminPanel/static/plus.svg'
import bookPic from '../adminPanel/static/book.avif'
import whiskeyPic from '../adminPanel/static/whiskey.png'
import sigarsPic from '../adminPanel/static/sigars.jfif'
import { CollectionDropdown } from './dropdown'

function CollectionsList(){

    const adaptive = "col-lg-4 col-xl-3 col-md-4 col-sm-6 col-12 p-0 mb-5";
    const adaptive2 = "col-9 col-lg-10 col-xl-9 col-md-11 col-sm-11 mx-auto "
    return(
        <div className="row justify-content-start mt-5 mx-3">
            {collections.map(i=>(
                <div className={adaptive}>
                    <div className={adaptive2+"border rounded btn btn-secondary d-flex flex-column"} style={{height: 320}}>
                        <div className="p-4 h4 border-bottom d-flex justify-content-between">
                            <div className="flex-grow-1">{i.name}</div>
                            <CollectionDropdown />
                        </div>
                        <div className="p-4 position-relative flex-grow-1">
                            <img src={i.img?i.img:plusIcon} width="90%" height="90%" className="position-absolute rounded m-auto top-0 bottom-0 start-0 end-0"/>
                        </div>
                    </div>
                </div>
            ))}
            <div className={adaptive}>
                <div className={adaptive2+" border rounded btn btn-light d-flex flex-column"} style={{height: 320}}>
                    <div className="p-4 h4 border-bottom text-nowrap">
                        New collection
                    </div>
                    <div className="p-4 position-relative flex-grow-1">
                        <img src={plusIcon} width="90%" height="90%" className="position-absolute rounded m-auto top-0 bottom-0 start-0 end-0"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { CollectionsList }


const collections = [
    {
        name: 'favorite books',
        img: bookPic,
    },
    {
        name: 'wiskey',
        img: whiskeyPic,
    },
    {
        name: 'sigars',
        img: sigarsPic,
    }
]