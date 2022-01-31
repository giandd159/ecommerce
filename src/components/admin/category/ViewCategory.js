import React, { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

import { Link } from 'react-router-dom'
function ViewCategory() {
    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);


    useEffect(() => {
        axios.get('/api/view-category').then(res => {
            //console.log(res.data.category);
            if (res.status === 200) {
                setCategoryList(res.data.category);
            }
            setLoading(false);
        });

        //  return () => {
        //     setAuthenticated(false);
        // };
    }, []);


    var viewcategory_HTML_TABLE = '';

    if (loading) {
        return <h1>Loading Category ...</h1>
    } else {
        viewcategory_HTML_TABLE = categoryList.map((item) => {
            return (
                <tr key={item.id}>
                    <td>  {item.id} </td>
                    <td>  {item.name} </td>
                    <td>  {item.slug} </td>
                    <td>  {item.status} </td>
                    <td>
                        <Link to={`edit-category/${item.id}`} className="btn btn-success btn-sm">Edit  </Link>
                    </td>
                    <td>
                        <Link to={`delete-category/${item.id}`} className="btn btn-danger btn-sm">Delete  </Link>
                    </td>
                </tr>
            )


        });
    }



    return (

        <div className="container px-4">
            <div className="card">
                <div className="card-header">

                    <h1 className="mt-4">Add Category
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
    );

}

export default ViewCategory; 