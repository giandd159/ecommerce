import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom'

import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import styled from 'styled-components';
import Modal from './Modal'
function Checkout() {
    if (!localStorage.getItem('auth_token')) {
        navigate('/');

        swal("Warning", 'Login to go to cart page', "error");

    }

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [estadoModal, setEstadoModal] = useState(false);
    var totalCartPrice = 0;
    const [price, setPrice] = useState(0);



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



    var orderinfo_data = {

        firstname: checkoutInput.firstname,
        lastname: checkoutInput.lastname,
        phone: checkoutInput.phone,
        email: checkoutInput.email,
        address: checkoutInput.address,
        city: checkoutInput.city,
        state: checkoutInput.state,
        zipcode: checkoutInput.zipcode,
        payment_mode: 'Paid by paypal',
        payment_id: ''
    }


    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

    const createOrder = (data, actions) => {

        
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: price,
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details){

            orderinfo_data.payment_id = details.id
        
        axios.post('/api/place-order', orderinfo_data).then(res => {

                    if (res.data.status === 200) {
                         swal("Order Placed Successfully", res.data.message, "success");
                         setError([]);
                         navigate('/thank-you');
                     } else if (res.data.status === 422) {
                         swal("All fields are mandatory", "", "error");
                         setError(res.data.errors);

                     }
                 });
        
        
        }
        
        );




    }

    const submitOrder = (e, payment_mode) => {
        e.preventDefault();
        //e.persist();
        var data = {

            firstname: checkoutInput.firstname,
            lastname: checkoutInput.lastname,
            phone: checkoutInput.phone,
            email: checkoutInput.email,
            address: checkoutInput.address,
            city: checkoutInput.city,
            state: checkoutInput.state,
            zipcode: checkoutInput.zipcode,
            payment_mode: payment_mode,
            payment_id: ''
        }
        // axios.post('/api/place-order', data).then(res => {

        //     //console.log(data);
        //     if (res.data.status === 200) {
        //       //  swal("Success", res.data.message, "success");
        //         setError([]);
        //        // navigate('/thank-you');
        //     } else if (res.data.status === 422) {
        //         swal("All fields are mandatory", "", "error");
        //         setError(res.data.errors);

        //     }
        // });

        console.log('hey paymentmontacad', payment_mode)
        switch (payment_mode) {
            // case 'cod':
            //     axios.post('/api/place-order', data).then(res => {

            //         if (res.data.status === 200) {
            //            // swal("Order Placed Successfully", res.data.message, "success");
            //             setError([]);
            //           //  navigate('/thank-you');
            //         } else if (res.data.status === 422) {
            //             swal("All fields are mandatory", "", "error");
            //             setError(res.data.errors);

            //         }
            //     });
            //     break;
            // case 'razor':
            //     axios.post('/api/validate-order', data).then(res => {

            //         if (res.data.status === 200) {
            //             setError([]);

            //             var options = {
            //                 "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
            //                 "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            //                 "currency": "INR",
            //                 "name": "Acme Corp",
            //                 "description": "Test Transaction",
            //                 "image": "https://example.com/your_logo",
            //                 "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            //                 "handler": function (response) {
            //                     alert(response.razorpay_payment_id);
            //                     alert(response.razorpay_order_id);
            //                     alert(response.razorpay_signature)
            //                 },
            //                 "prefill": {
            //                     "name": "Gaurav Kumar",
            //                     "email": "gaurav.kumar@example.com",
            //                     "contact": "9999999999"
            //                 },
            //                 "notes": {
            //                     "address": "Razorpay Corporate Office"
            //                 },
            //                 "theme": {
            //                     "color": "#3399cc"
            //                 }
            //             };

            //         } else if (res.data.status === 422) {
            //             swal("All fields are mandatory", "", "error");
            //             setError(res.data.errors);

            //         }
            //     });


            //     break;
            case 'payonline':
                axios.post('/api/validate-order', data).then(res => {
                    if (res.data.status === 200) {
                        setEstadoModal(!estadoModal)

                        //setModal(true);
                        //console.log(modal);
                        setError([]);

                        //    var myModal =  window.bootstrap.Modal(document.getElementById('payOnlineModal'));
                        //  myModal.show();
                        //console.log("paypal")



                    } else if (res.data.status === 422) {
                        swal("All fields are mandatory", "", "error");
                        setError(res.data.errors);

                    }
                });
                break;
            default:
                break;
        }



    }











    useEffect(() => {

        axios.get(`/api/cart`).then(res => {
            res.data.cart.map((item, idx) => {

                setPrice(item.product.selling_price * item.product_qty)
//                 console.log(price);
//setPrice(322);
            })

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


                <div className="col-md-7">
                    <div className="card">
                        <div className="card-header">
                            <h4>
                                Basic Information
                            </h4>
                        </div>

                        <div className="card-body">
                            <div className="row">


                                <div className="col-md-6">

                                    <div className="form-group mb-3">

                                        <label>

                                            First Name
                                        </label>
                                        <input type="text" name="firstname" onChange={handleInput} defaultValue={checkoutInput.firstname} className="form-control" />
                                        <small className="text-danger">{error.firstname} </small>

                                    </div>
                                </div>
                                <div className="col-md-6">

                                    <div className="form-group mb-3">

                                        <label>

                                            Last Name    </label>
                                        <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" />
                                        <small className="text-danger">{error.lastname} </small>

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

                                        <button type="button" onClick={(e) => submitOrder(e, 'cod')} className="btn btn-primary">Place Order</button>
                                        <button type="button" onClick={(e) => submitOrder(e, 'razorpay')} className="btn btn-primary">Place Order</button>
                                        <button type="button" onClick={(e) => submitOrder(e, 'payonline')} className="btn btn-primary">paypal</button>

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
                                <th width="50%">Product</th>
                                <th >Price</th>
                                <th >Qty</th>
                                <th >Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, idx) => {
                                totalCartPrice += item.product.selling_price * item.product_qty

                                return (
                                    <tr key={idx}>
                                        <td>{item.product.name}</td>
                                        <td>{item.product.selling_price}</td>
                                        <td>{item.product_qty}</td>
                                        <td>{item.product.selling_price * item.product_qty}</td>

                                    </tr>
                                )
                            })}

                            <tr>
                                <td colSpan="2" className="text-end">GrandTotal</td>
                                <td colSpan="2" className="text-end">{totalCartPrice}</td>
                                
                            </tr>
                        </tbody>

                    </table>
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
            <ContenedorBotones>
                <Boton onClick={(e) => submitOrder(e, 'payonline')}>Modal 1</Boton>
                {/* <Boton onClick={() => setEstadoModal(!estadoModal)}>Modal 1</Boton> */}

            </ContenedorBotones>
            <Modal
                estado={estadoModal}
                cambiarEstado={setEstadoModal}
            >
                <Contenido>

                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                    <Boton>
                        Aceptar
                    </Boton>
                </Contenido>

            </Modal>

            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Home / Checkout
                    </h6>

                </div>
            </div>


            <div className="py-4">

                <div className="container">
                    {checkout_HTML}
                </div>
            </div>
        </div>

    )
}
export default Checkout;

const ContenedorBotones = styled.div`
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
`;

const Boton = styled.button`
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #fff;
	border: none;
	background: #1766DC;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}
`;

const Contenido = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font-size: 42px;
		font-weight: 700;
		margin-bottom: 10px;
	}
	p {
		font-size: 18px;
		margin-bottom: 20px;
	}
	img {
		width: 100%;
		vertical-align: top;
		border-radius: 3px;
	}
`;