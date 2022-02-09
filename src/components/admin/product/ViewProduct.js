import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

import { Link } from 'react-router-dom'

function ViewProduct() {
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);



    return (
        <div className="container px-4">
        <div className="card">
            <div className="card-header">

                <h1 className="mt-4">View Product
                    <Link to="/admin/add-category" className="btn btn-primary btn-sm float-end">Add category  </Link>
                </h1>

            </div>
            <div className="card-body">

                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Status</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewcategory_HTML_TABLE}
                    </tbody>


                </table>
            </div>
        </div>
    </div>
    )

        }


    export default ViewProduct;