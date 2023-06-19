import { request } from '../../request/request'

function SignIn(){

    function handleClick(){
        const url = 'http://localhost:8000';
        request(url, 'post', res=>console.log(res), {email : 'some@s', password: 'pass'});
    }

    const adaptive = " col-9 col-xl-3 col-lg-4 col-sm-7 col-md-5 "
    return(
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className={adaptive}>
                <label>Email</label>
                <input className="form-control" />
            </div>
            <div className={adaptive}>
                <label>Password</label>
                <input className="form-control" />
            </div>
            <div className={adaptive+'text-end mt-3'}>
                <button
                    className="btn btn-primary px-3"
                    onClick={handleClick}
                >
                    Sign in
                </button>
            </div>
        </div>
    )
}

export {SignIn}