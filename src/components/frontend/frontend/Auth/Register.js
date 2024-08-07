import axios from 'axios';
import React, { useState } from 'react'
import Navbar from '../../../../layouts/frontend/Navbar';

import swal from 'sweetalert';
import  { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const [registerInput, setRegister] = useState(
    {
      name: '',
      email: '',
      password: '',
      errorList:[],
    }
  );

  const handleInput = (e) => {
    e.persist();
    setRegister({ ...registerInput, [e.target.name]: e.target.value });
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: registerInput.name,
      email : registerInput.email,
      password : registerInput.password,
      
    }

    axios.get('/sanctum/csrf-cookie').then(response => {

    axios.post('/api/register',data).then(res=> {
      if(res.data.status===200){
      localStorage.setItem('auth_token',res.data.token);
      localStorage.setItem('auth_name',res.data.username);
      swal("Success",res.data.message,"success");
      navigate('/');

      }else{
        setRegister({ ...registerInput,errorList:res.data.validation_errors})
    }
    })
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
                  Register
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={registerSubmit}>
                  <div className="form-group mb-3">
                    <label >Full Name</label>
                    <input type="" onChange={handleInput} value={registerInput.name} className="form-control" name="name" placeholder="Enter email" />
                    <span>{registerInput.errorList.name}</span>
                  </div>


                  <div className="form-group mb-3">
                    <label >Email address</label>
                    <input type="email" onChange={handleInput} value={registerInput.email} className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <span>{registerInput.errorList.email}</span>

                  </div>


                  <div className="form-group mb-3">
                    <label >Password</label>
                    <input type="password" onChange={handleInput} value={registerInput.password} className="form-control" name="password" placeholder="Password" />
                    <span>{registerInput.errorList.password}</span>

                  </div>





                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div >

  );

}
export default Register;