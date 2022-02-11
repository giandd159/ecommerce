import React, { useState, useEffect } from 'react'
import axios from 'axios';

function ViewCategory() {


    useEffect(() => {

        axios.get(`/api/getCategory`).then(res => {

            if (res.data.status === 200) {
                console.log(res.data.category);

            }
        });


       


    }, []);


    return (
        <div>


            <div className="py-3 bg-warning">

                <div className="container">


                    <h6>

                        Category Page
                    </h6>

                </div>
            </div>


            <div className="py-3">

                <div className="container">
                    <div className="row">


                        <h6>

                            Category Page
                        </h6>
                    </div>

                </div>
            </div>


        </div>
    );

}

export default ViewCategory; 