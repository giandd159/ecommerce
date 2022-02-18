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

    return (
        <div>


            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Home / Cart
                    </h6>

                </div>
            </div>


            <div className="py-4">

                <div className="container">
                    <div className="row">
                        <div className="col-md-7">

                            <div className="card">


                                <div className="card-header">

                                    <h6>
                                        Basic Information
                                    </h6>


                                </div>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="form-group mb-3">

                                                <label>

                                                    First Name
                                                </label>
                                                <input type="text" name="firstname" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="form-group mb-3">

                                                <label>

                                                    Last Name    </label>
                                                <input type="text" name="lastname" className="form-control" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <div className="form-group mb-3">

                                                <label>

                                                    Phone Number
                                                </label>
                                                <input type="text" name="phone" className="form-control" />

                                            </div>
                                        </div>

                                        <div className="col-md-6">

                                            <div className="form-group mb-3">

                                                <label>

                                                    Email Address
                                                </label>
                                                <input type="text" name="email" className="form-control" />

                                            </div>
                                        </div>


                                        <div className="col-md-12">

                                            <div className="form-group mb-3">

                                                <label>

                                                    Email Address
                                                </label>
                                                <textarea rows="3" className="form-control"></textarea>


                                            </div>
                                        </div>

                                        <div className="col-md-4">

                                            <div className="form-group mb-3">

                                                <label>

                                                    City
                                                </label>
                                                <input type="text" name="city" className="form-control" />


                                            </div>
                                        </div>


                                        <div className="col-md-4">

                                            <div className="form-group mb-3">

                                                <label>

                                                    State
                                                </label>
                                                <input type="text" name="state" className="form-control" />

                                            </div>
                                        </div>
                                        <div className="col-md-4">

                                            <div className="form-group mb-3">

                                                <label>

                                                    Zip code
                                                </label>
                                                <input type="text" name="zipcode" className="form-control" />

                                            </div>

                                        </div>


                                        <div className="col-md-12">

                                            <div className="form-group text-end">

                                                <button type="button" className="btn btn-primary">Place Order</button>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className="col-md-5">



                            <table className="table table-bordered">
                                <thead>
                                    <tr>

                                        <th>
                                            Product
                                        </th>
                                        <th width="50%">
                                            Price
                                        </th>
                                        <th className="text-center">
                                            Quantity
                                        </th>
                                        <th className="text-center">
                                            Total
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, idx) => {
                                        totalCartPrice += item.product.selling_price * item.product_qty

                                        return (
                                            <tr key={idx}>
                                               

                                                    <td>
                                                    {item.product.name}

                                                    </td>
                                                    <td width="50%">
                                                    {item.product.selling_price}

                                                    </td>
                                                    <td className="text-center">
                                                    {item.product_qty}

                                                    </td>
                                                    <td className="text-center">
                                                    {item.product.selling_price*item.product_qty}

                                                    </td>

                                               
                                            </tr>
                                        )
                                    })}

                                    <tr>
                                        <td colSpan="2" className="text-end fw-bold"> 
                                            GrandTotal
                                        </td>

                                        <td colSpan="2" className="text-end fw-bold">
                                            {totalCartPrice}
                                        </td>
                                    </tr>
                                </tbody>



                            </table>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default Checkout;