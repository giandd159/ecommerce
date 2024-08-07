import React, { useState } from 'react'
import Navbar from '../../../../layouts/frontend/Navbar';
//import Navbar from '../../layouts/frontend/Navbar';
import axios from 'axios';
import  { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function Login() {

    const navigate = useNavigate();

    const [loginInput, setLogin] = useState({

        email: '',
        password: '',
        errorList:[],

    })

    const handleInput = (e) => {

        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
        

    }

    const loginSubmit = (e) => {
        e.preventDefault();
       
        const data = {

            email: loginInput.email,
            password: loginInput.password

        }

        axios.get('/sanctum/csrf-cookie').then(response => {

        axios.post(`api/login`, data).then(res => {

            if (res.data.status === 200) {
                localStorage.setItem('auth_token',res.data.token);
                localStorage.setItem('auth_name',res.data.username);
                swal("Success",res.data.message,"success");

                if (res.data.role === 'admin') {
                  
                    
                    navigate('/admin/dashboard');
    
                }  else {
                    navigate('/');
                }



              

            } 
            else if (res.data.status === 401) {
                swal("Warning",res.data.message,"warning");
                console.log(loginInput)
            } else {
                console.log('1',res.data)
                setLogin({ ...loginInput, errorList:res.data.validation_errors })
                
                console.log('2', res.data.validation_errors)
            }
        });
    });

    }

    return (
        <div>
            < Navbar></Navbar>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                < h4>
                                    Login
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>


                                    <div className="form-group mb-3">
                                        <label >Email address</label>
                                        <input type="email" name="email" onChange={handleInput} value={loginInput.email} className="form-control"  />

                                    </div>


                                    <div className="form-group mb-3">
                                        <label >Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={loginInput.password} className="form-control" placeholder="Password"  />

                                    </div>



                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Login;