import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function ViewCategory() {
    const [loading, setLoading] = useState(true);

    const [category, setCategory] = useState([]);
    useEffect(() => {

        axios.get(`/api/getCategory`).then(res => {

            if (res.data.status === 200) {
                setCategory(res.data.category);
                setLoading(false);
            }
        });

    }, []);



    if (loading) {
        return <h1 className="loading">Loading Categories ...</h1>
    } else {
        var showCategoryList = '';
        showCategoryList = category.map((item) => {
            return (


                <div className="col-md-4" key={item.id}>
                    <Link to="/login">
                        <img src={`http://localhost:8000/${item.image}`} width="50px" height="50px" alt={item.name} />
                    </Link>

                    <div className="card">
                        <div className="card-body">

                            <Link to={`/collections/${item.slug}`}>
                                <h5>

                                    {item.name}
                                </h5>
                            </Link>


                        </div>

                    </div>
                </div>






            )


        });
    }



    return (
        <div>


            <div className="py-3 bg-info">

                <div className="container">


                    <h6>

                        Category Page
                    </h6>

                </div>
            </div>


            <div className="py-3">

                <div className="container">
                    <div className="row">


                        {showCategoryList}

                    </div>

                </div>
            </div>


        </div>
    );

}

export default ViewCategory; 