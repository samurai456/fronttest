import { DropdownUserMenu } from './dropdownUserMenu.jsx'


function Header(){
    return (
        <div className="row border-bottom justify-content-between p-3 px-4 m-0 ">
            <div className="col-auto h3 mb-0 order-1 d-flex align-items-center" style={{cursor: 'pointer'}}>Main</div>
            <div className="col-12 order-sm-2 order-3 col-xl-7 col-lg-8 col-md-9 col-sm-8 row justify-content-center align-items-center my-1">
                <div className="col-xl-5 col-lg-6 col-md-6 col-sm-8 col-8 px-1">
                    <input className="form-control" type="search"/>
                </div>
                <div className="col-auto row justify-content-end">
                    <button className="btn btn-primary col-auto px-4">Search</button>
                </div>
            </div>
            <div className="col-auto text-center order-sm-3 order-2 my-1">
               <DropdownUserMenu />
            </div>
        </div>
    )
}

export { Header }