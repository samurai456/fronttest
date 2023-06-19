import { request } from '../../request/request'
import { useState } from 'react'

function SignUp(){
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleClick(){
        const url = 'http://localhost:8000/api/somekey1/keys2';
        request(url, 'get', res=>console.log(res));
    }

    const adaptive = " col-9 col-xl-3 col-lg-4 col-sm-7 col-md-5 "
    return(
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <div className={adaptive}>
                <label>Nickname</label>
                <input className="form-control" />
            </div>
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
                    Sign up
                </button>
            </div>
        </div>
    )
}

export {SignUp}