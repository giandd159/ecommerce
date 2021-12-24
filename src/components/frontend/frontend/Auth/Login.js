import React from 'react'
import Navbar from '../../../../layouts/frontend/Navbar';
//import Navbar from '../../layouts/frontend/Navbar';



function Login() {

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
                                <form>
                                  

                                    <div className="form-group mb-3">
                                        <label >Email address</label>
                                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>


                                    <div className="form-group mb-3">
                                        <label >Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
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