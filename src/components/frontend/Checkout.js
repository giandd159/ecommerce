import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';
import { PayPalButton } from "react-paypal-button-v2";

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

    const [price, setPrice] = useState('');

    useEffect(() => {

        axios.get(`/api/cart`).then(res => {

            if (res.data.status === 200) {
                setCart(res.data.cart);
                console.log(cart);
                res.data.cart.map((item, idx) => {

                    setPrice(item.product.selling_price * item.product_qty)
                    
                })

                setLoading(false);


            } else if (res.data.status === 401) {
                navigate('/');

                swal("Error", res.data.message, "error");
            }
        });

    }, [navigate]);




    const handleInput = (e) => {

        e.persist();
        setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value })
    }

    const submitOrder = (e, payment_mode) => {
       // e.preventDefault();
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
     axios.post('/api/place-order', data).then(res => {

            //console.log(data);
         if (res.data.status === 200) {
              //  swal("Success", res.data.message, "success");
                setError([]);
            // navigate('/thank-you');
         } else if (res.data.status === 422) {
             swal("All fields are mandatory", "", "error");
             setError(res.data.errors);

            }
         });

       // console.log('hey paymentmontacad', payment_mode)
        //switch (payment_mode) {
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
      //      case 'payonline':
        //        axios.post('/api/validate-order', data).then(res => {
          //          if (res.data.status === 200) {


            //            setError([]);

                        //   var myModal =  window.bootstrap.Modal(document.getElementById('payOnlineModal'));
                        // myModal.show();
                        //console.log("paypal")

              //      } else if (res.data.status === 422) {
                //        swal("All fields are mandatory", "", "error");
                  //      setError(res.data.errors);

                  //  }
               // });
                //break;
          //  default:
            //    break;
       // }



    }













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

                    {/* <div className="form-group text-end">

                        <button type="button" onClick={(e) => submitOrder(e, 'cod')} className="btn btn-primary">Place Order</button>
                        <button type="button" onClick={(e) => submitOrder(e, 'razorpay')} className="btn btn-primary">Place Order</button>
                        <button type="button" onClick={(e) => submitOrder(e, 'payonline')} className="btn btn-primary">paypal</button>

                    </div> */}
                    
                    <PayPalButton
                     options={{
                        clientId: "AWMf_5zpQPNAay2g4mLmFFldXbXycJKilI1utjKf2xm8ba3vRFq0kOrZ6X7muleb6VbaM2EaUop5cApr",
                        currency : 'USD',
                        
                    }}
                        amount=  {price}
                        onClick={(e) => submitOrder(e, 'payonline')} 
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        
                        onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);
                           
                            // OPTIONAL: Call your server to save the transaction
                            // return fetch("/paypal-transaction-complete", {
                            //     method: "post",
                            //     body: JSON.stringify({
                            //         orderId: data.orderID
                            //     })
                            // });
                        }}
                       
                    />
                   
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


            <div class="modal fade" id="payOnlineModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Online Payment Mode</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <hr />
                        </div>

                    </div>
                </div>
            </div>

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