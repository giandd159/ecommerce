import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

import { Link } from 'react-router-dom'

function ViewProduct() {

    

    const [loading, setLoading] = useState(true);
    const [viewProduct, setProduct] = useState([]);

    useEffect(() => {

        document.title = "View Product";
        axios.get('/api/view-product').then(res => {
            if (res.data.status === 200) {
                setProduct(res.data.products);
            }
            setLoading(false);
        });

    }, []);



    var displayProductData = '';

    if (loading) {
        return <h1>Views Products Loading ...</h1>
    } else {
        displayProductData = viewProduct.map((item) => {
            return (
                <tr key={item.id}>
                    <td>  {item.id} </td>
                    <td>  {item.category.name} </td>
                    <td>  {item.name} </td>
                    <td>  {item.selling_price} </td>
                    <td><img src={`http://localhost:8000/${item.image}`} width="50px" height="50px" alt={item.name} />  </td>
                    
                    <td>
                        <Link to={`/admin/edit-product/${item.id}`} className="btn btn-success btn-sm">Edit  </Link>
                    </td>
                    <td>
                    <button type="button"  className="btn btn-danger" >Delete</button>

                  
                    </td>
                </tr>
            )


        });
    }


    return (
        <div className="container px-4 mt-3">
            <div className="card-header">

                <h1 className="mt-4">View Product
                    <Link to="/admin/add-product" className="btn btn-primary btn-sm float-end">Add Product  </Link>
                </h1>

            </div>
            <div className="card-body">

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category Name</th>
                            <th>Product Name</th>
                            <th>Selling Price</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayProductData}
                    </tbody>


                </table>
            </div>
    </div>
    )

        }


    export default ViewProduct;