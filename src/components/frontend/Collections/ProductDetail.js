import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function ProductDetail(props) {


    var params = useParams();

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    const [quantity, setQuantity] = useState(1);



    const category_slug = params.category;

    const product_slug = params.product;



    useEffect(() => {

        axios.get(`/api/viewproductdetail/${category_slug}/${product_slug}`).then(res => {

            if (res.data.status === 200) {
                setProduct(res.data.product);

                setLoading(false);



            } else if (res.data.status === 404) {
                navigate('/collections');

                swal("Error", res.data.message, "error");
            }
        });

    }, [product_slug, category_slug]);


    //Quantity increment n decrements in Hooks
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prevCount => prevCount - 1)
        }
    }

    //Quantity increment n decrements in Hooks

    const handleIncrement = () => {
        if (quantity < 10) {
            setQuantity(prevCount => prevCount + 1)
        }
    }

    const submitAddtocart = (e) => {
        e.preventDefault();

        const data = {
            product_id: product.id,
            product_qty: quantity
        }

        axios.post('/api/add-to-cart', data).then(res => {

            if (res.data.status === 201) {

                swal("Success", res.data.message, "success");


            } else if (res.data.status === 409) {
                //ALready added to cart 
                swal("Success", res.data.message, "success");


            } else if (res.data.status === 401) {
                navigate('/collections');

                swal("Error", res.data.message, "error");


            } else if (res.data.status === 404) {
                swal("Warning", res.data.message, "warning");
            }


        });
    }


    if (loading) {
        return <h1>Loading Product details ...</h1>
    } else {

        var avail_Stock = '';

        if (product.qty > 0) {


            avail_Stock =


                <div>
                    <label className="btn-sm btn-success px-4 mt-2">In Stock </label>

                    <div className="row">
                        <div className="col-md-3 mt-3">
                            <div className="input-group">
                                <button type="button" onClick={handleDecrement} className="input-group-text">-</button>
                                <div className="form-control text-center">
                                    {quantity}
                                </div>
                                <button type="button" onClick={handleIncrement} className="input-group-text">+</button>

                            </div>
                        </div>



                        <div className="col-md-3 mt-3">
                            <button type="button" onClick={submitAddtocart} className="btn-sm btn-primary px-4 mt-2">Add to cart</button>

                        </div>
                    </div>
                </div>
        } else {

            avail_Stock = <div>
                <label className="btn-sm btn-danger px-4 mt-2">Out of Stock </label>

            </div>

        }




    }

    return (
        <div>


            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Collections / {product.category.name}/{product.name}              </h6>

                </div>
            </div>


            <div className="py-3">

                <div className="container">
                    <div className="row">
                        <div className="col-md-4 border-end">


                            <img src={`http://localhost:8000/${product.image}`} alt={product.name} className="w-100" />


                        </div>
                        <div className="col-md-8">

                            <h4>
                                {product.name}
                                <span className="float-end badge btn-sm btn-danger badge-pil">
                                    {product.brand}
                                </span>
                            </h4>
                            <p>
                                {product.description}
                            </p>



                            <h4 className='mb-1'>
                                Rs:  {product.selling_price}
                                <s className='ms-2'>
                                    Rs: {product.original_price}
                                </s>
                            </h4>

                            <div>

                                {avail_Stock}
                            </div>
                            <button type="button" className="btn-sm btn-danger px-4 mt-2">Add to wishlist</button>


                        </div>

                    </div>



                </div>

            </div>
        </div>



    );


}

export default ProductDetail; 