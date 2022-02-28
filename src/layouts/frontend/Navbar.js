import React from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
    const navigate = useNavigate();
    const logoutSubmit = (e) => {
        e.preventDefault();
        axios.post(`api/logout`).then(res => {

            if (res.data.status === 200) {
                localStorage.removeItem('auth_token', res.data.token);
                localStorage.removeItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                navigate('/');

            }

        })
    }

    var AuthButtons = '';

    if (!localStorage.getItem('auth_token')) {

        AuthButtons = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </ul >
        )
    } else {
        AuthButtons = (
            <li className="nav-item">
                <button type="button" onClick={logoutSubmit} className="nav-link btn btn-danger btn-sm text-white">Logout</button>
            </li>
        );
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">


                </Link>
                <div>
                    <img className="" src={'http://localhost:3000/img/cash.png'} width="50px" height="50px" />

                </div>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-1">
                        <li className="nav-item mt-3">
                            <img src={'http://localhost:3000/img/whatsapp.png'} width="30px" height="30px" />
                        </li>
                        <li className="nav-item mt-3 m-1">
                            <p>993322223</p>
                        </li>
                        <li className="nav-item mt-3">
                            <img src={'http://localhost:3000/img/repartidor.png'} width="30px" height="30px" />
                        </li>

                        <li className="nav-item mt-3 m-1">
                            <p>Delivery gratis</p>
                        </li>

                        <li className="nav-item mt-3 m-1">
                            <img src={'http://localhost:3000/img/chat.png'} width="30px" height="30px" />
                        </li>

                        <li className="nav-item mt-3 m-1">
                            <p>email@gmail.com</p>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-1">


                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/collections">Collection</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                        {
                            AuthButtons
                        }

                    </ul>

                </div>
            </div>
        </nav>

    );

}
export default Navbar;