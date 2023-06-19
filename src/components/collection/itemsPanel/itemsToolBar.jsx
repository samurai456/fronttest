import deleteIcon from '../../adminPanel/static/delete.png'


function ItemsToolBar(){
    return(
        <div className="ps-5 row justify-content-start w-100">
            <button
                className="btn btn-primary m-1 px-4 col-auto"
            >
                New item
            </button>
            <button 
                className="btn btn-info m-1 px-4 col-auto"
            >
                Edit
            </button>
            <button 
                className="btn btn-danger px-4 m-1 col-auto"
            >
                <img src={deleteIcon} height={25} />
            </button>
            <button 
                className="btn btn-primary px-4 m-1 col-auto"
            >
                Filter
            </button>
        </div>
    )
}

export { ItemsToolBar }