import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
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
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.screen.width)

    var AuthButtons = '';

    if (!localStorage.getItem('auth_token')) {

        AuthButtons = (
            <Fragment>

                <li className="items">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>

                <li className="items">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
            </Fragment>

        )
    } else {
        AuthButtons = (
            <Fragment>
                <li className="items">
                    <button type="button" onClick={logoutSubmit} className="nav-link btn btn-sm text-white">Logout</button>
                </li>
            </Fragment>

        );
    }


    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.screen.width);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])



    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <nav className="navbar  sticky-top">
            <button  type="button"  onClick={handleToggle}>
                {navbarOpen ?(
    <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
  ) : (
    <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
  )}  <span className="navbar-toggler-icon"></span>
            </button>
            {(navbarOpen || screenWidth > 1023) && (





                <ul className="list" >

                    <li className="items">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="items">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                    <li className="items">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>

                    <li className="items">
                        <Link className="nav-link" to="/collections">Collection</Link>
                    </li>

                    <li className="items">
                        <Link className="nav-link" to="/cart">Cart</Link>
                    </li>

                    {
                        AuthButtons
                    }

                </ul>


            )}
        </nav>

    );

}
export default Navbar;