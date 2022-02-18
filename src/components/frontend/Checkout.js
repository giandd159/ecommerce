import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function Checkout() {
    if (!localStorage.getItem('auth_token')) {
        navigate('/');

        swal("Warning", 'Login to go to cart page', "error");

    }

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    var totalCartPrice = 0;

    const [checkoutInput, setCheckoutInput] = useState(
        {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        });
    const [error, setError] = useState([]);



    const handleInput = (e) => {

        e.persist();
        setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value })
    }

    const submitOrder = (e) => {
        e.preventDefault();
        //e.persist();
        const data = {

            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode
        }
        axios.post('/api/place-order', data).then(res => {

            console.log(data);
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setError([]);
                navigate('/thank-you');
            } else if (res.data.status === 422) {
                swal("All fields are mandatory", "", "error");
                setError(res.data.errors);

            }
        });
    }











    useEffect(() => {

        axios.get(`/api/cart`).then(res => {

            if (res.data.status === 200) {
                setCart(res.data.cart);

                setLoading(false);



            } else if (res.data.status === 401) {
                navigate('/');

                swal("Error", res.data.message, "error");
            }
        });

    }, [navigate]);



    if (loading) {
        return <h1>Loading Checkout ...</h1>
    }


    var checkout_HTML = '';
    if (cart.length > 0) {
        checkout_HTML = <div>
            <div className="row">
                <div className="col-md-6">

                    <div className="form-group mb-3">

                        <label>

                            First Name
                        </label>
                        <input type="text" name="firstname" onChange={handleInput} defaultValue={checkoutInput.firstName} className="form-control" />
                        <small className="text-danger">{error.firstName} </small>

                    </div>
                </div>
                <div className="col-md-6">

                    <div className="form-group mb-3">

                        <label>

                            Last Name    </label>
                        <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />
                        <small className="text-danger">{error.lastName} </small>

                    </div>
                </div>

                <div className="col-md-6">

                    <div className="form-group mb-3">

                        <label>

                            Phone Number
                        </label>
                        <input type="text" name="phone" onChange={handleInput} value={checkoutInput.phone} className="form-control" />
                        <small className="text-danger">{error.phone} </small>

                    </div>
                </div>

                <div className="col-md-6">

                    <div className="form-group mb-3">

                        <label>

                            Email Address
                        </label>
                        <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" />
                        <small className="text-danger">{error.email} </small>

                    </div>
                </div>


                <div className="col-md-12">

                    <div className="form-group mb-3">

                        <label>

                            Full Address
                        </label>
                        <textarea rows="3" name="address" onChange={handleInput} defaultValue={checkoutInput.address} className="form-control"></textarea>
                        <small className="text-danger">{error.address} </small>


                    </div>
                </div>

                <div className="col-md-4">

                    <div className="form-group mb-3">

                        <label>

                            City
                        </label>
                        <input type="text" name="city" onChange={handleInput} value={checkoutInput.city} className="form-control" />
                        <small className="text-danger">{error.city} </small>


                    </div>
                </div>


                <div className="col-md-4">

                    <div className="form-group mb-3">

                        <label>

                            State
                        </label>
                        <input type="text" name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" />
                        <small className="text-danger">{error.state} </small>

                    </div>
                </div>
                <div className="col-md-4">

                    <div className="form-group mb-3">

                        <label>

                            Zip code
                        </label>
                        <input type="text" name="zipcode" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" />
                        <small className="text-danger">{error.zipcode} </small>

                    </div>

                </div>


                <div className="col-md-12">

                    <div className="form-group text-end">

                        <button type="button" onClick={submitOrder} className="btn btn-primary">Place Order</button>

                    </div>

                </div>
            </div>
        </div>


    } else {
        checkout_HTML = <div>  <div className="card card-body py-5 text-center shadow-sm">
            <h4>

                Your shopping Cart is Empty. You are in checkout Page
            </h4>

        </div> </div>
    }
    return (
        <div>


            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Home / Checkout
                    </h6>

                </div>
            </div>


            <div className="py-4">

                <div className="container">
                {checkout_HTML }
                </div>
            </div>
        </div>

    )
}
export default Checkout;