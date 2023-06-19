import deleteIcon from './static/delete.png'
import unblockIcon from './static/unblock.png'

function ToolMenu(){
    return(
        <div className="d-flex align-items-center justify-content-between mt-4 text-nowrap" >
            <div className="ps-5 row justify-content-start w-100">
                <button
                    className="btn btn-danger m-1 px-4 col-5 col-md-auto col-sm-4"
                >
                    Block
                </button>
                <button 
                    className="btn btn-info m-1 col-2 col-md-auto col-sm-3"
                >
                    <img src={unblockIcon} height={25}/>
                </button>
                <button 
                    className="btn btn-danger m-1 col-2 col-md-auto col-sm-3"
                >
                    <img src={deleteIcon} height={25} />
                </button>
                <button 
                    className="btn btn-primary px-4 m-1 col-10 col-md-auto col-sm-5"
                >
                    Add to admins
                </button>
                <button 
                    className="btn btn-primary m-1 px-4 col-10 col-md-auto col-sm-5"
                >
                    Delete from admins
                </button>
            </div>
            <div className="align-self-start pe-4">
                <button className="btn btn-primary m-2 p-3">
                    Go back
                </button>
            </div>
        </div>
    )
}

export { ToolMenu }