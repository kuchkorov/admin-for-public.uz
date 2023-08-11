import {useRef, useState} from 'react'
import http from '../../services/http';

const Login = ({setToken}) => {
    const [ hasError, setHasError] = useState(false)
    const loginInput = useRef(null);
    const passwordInput = useRef(null);

    const onLogin =(e)=> {
        e.preventDefault();
        http.post('/login', {
            email: loginInput.current.value,
            password: passwordInput.current.value
        })
        .then((res) => {
            // alert("Successfully!!!")
            console.log(setToken);
            window.localStorage.setItem('token', res.data.token)
        })
        .catch(()=> {
            setHasError(true)
        })
    }
    return(
        <>
         <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card p-3 mt-5">
                        {
                            hasError ? (
                            <div class="alert alert-danger" role="alert">
                                Login yoki parolda xatolik!!!
                            </div>
                            ) : (
                                <></>
                            )
                        }
                   
                    <form onSubmit={onLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input ref={loginInput} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input ref={passwordInput} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-3"></div>
            </div>
        
         </div>
        </>
    )
}

export default Login