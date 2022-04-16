import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function ViewProduct(props) {

    var params = useParams();

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [product, setProduct] = useState([]);

    const [category, setCategory] = useState([]);

    const product_slug = params.slug;

    const productCount = product.length;

    console.log(productCount);
    console.log(product);

    useEffect(() => {

        axios.get(`/api/fetchproducts/${product_slug}`).then(res => {

            if (res.data.status === 200) {
                setProduct(res.data.product_data.product);
                setCategory(res.data.product_data.category);

                setLoading(false);

            } else if (res.data.status === 400) {
                swal("Warning", res.data.message, "warning");


            } else if (res.data.status === 404) {
                navigate('/collections');

                swal("Error", res.data.message, "error");
            }
        });

    }, [product_slug]);



    if (loading) {
        return <h1 className="loadingProduct"> Loading Products ...</h1>
    } else {


        var showProductList = '';


        if (productCount) {


            showProductList = product.map((item) => {
                return (


                    <div className="col-md-3" key={item.id}>
                        <Link to={`/collections/${item.category.slug}/${item.slug}`}>
                            <img src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.name} />
                        </Link>

                        <div className="card-body">

                            <Link to={`/collections/${item.category.slug}/${item.slug}`}>
                                <h5>

                                    {item.name}
                                </h5>
                            </Link>



                        </div>
                    </div>

                )


            });





        } else {

            showProductList = <div className="col-md-12">
                <h4>

                    No product Available for  {category.name} </h4>
            </div>

        }

    }



    return (
        <div>


            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Collections / {category.name}                    </h6>

                </div>
            </div>


            <div className="py-3">

                <div className="container">
                    <div className="row">


                        {showProductList}

                    </div>

                </div>
            </div>


        </div>
    );

}

export default ViewProduct; 