import React, { useState, useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
function AddProduct() {

    const [categoryList, setCategoryList] = useState([]);
    const [errorList, setError] = useState([]);
    const navigate = useNavigate();

    const [productInput, setProduct] = useState( {



        category_id: '',
        slug: '',
        name :'',
        description:'',


        meta_title:'',
        meta_descrip:'',
        meta_keyword:'',

        selling_price:'',
        original_price:'',
        qty :'',
        brand:'',
        featured:'',
        popular:'',
        status:'',


    });


    const [picture, setPicture] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setProduct({ ...productInput, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setPicture({ image :e.target.files[0] })   
    }

    useEffect(() => {

        axios.get(`/api/all-category`).then(res => {

            if (res.data.status === 200) {
                setCategoryList(res.data.category);

            }
            // else if (res.data.status === 404) {
            //     swal("Error", res.data.message, "error");
            //     navigate('/admin/view-category');

            //   }


        });

    }, []);




    const submitProduct = (e) => {
        e.preventDefault();


        //const data = productInput;
        const formData = new FormData();
        formData.append('image',picture.image);
        formData.append('category_id',productInput.category_id);
        formData.append('slug',productInput.slug);
        formData.append('name',productInput.name);
        formData.append('description',productInput.description);


        formData.append('meta_title',productInput.meta_title);
        formData.append('meta_keyword',productInput.meta_keyword);
        formData.append('meta_description',productInput.meta_descrip);

        formData.append('selling_price',productInput.selling_price);
        formData.append('original_price',productInput.original_price);
        formData.append('qty',productInput.qty);
        formData.append('brand',productInput.brand);
        formData.append('featured',productInput.featured);
        formData.append('popular',productInput.popular);
        formData.append('status',productInput.status);



        axios.post('/api/store-product',formData).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");


                setProduct({...productInput,



                    category_id: '',
                    slug: '',
                    name :'',
                    description:'',
            
            
                    meta_title:'',
                    meta_descrip:'',
                    meta_keyword:'',
            
                    selling_price:'',
                    original_price:'',
                    qty :'',
                    brand:'',
                    featured:'',
                    popular:'',
                    status:'',
            
            
                });

                setPicture({...productInput,
                    picture : '',
                });
                setError([]);


            } else if (res.data.status === 422) {
                swal("All fields are mandatory", "", "error");
                setError(res.data.errors);
                

            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                navigate('/admin/view-category');
            }
        });
    }



    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">

                    <h4>Add Product
                        <Link to="/admin/view-product" className="btn btn-primary btn-sm float-end ">  View Product
                        </Link>

                    </h4>
                </div>
                <div className="card-body">

                    <form onSubmit={submitProduct} encType="multipart/form-data">

                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO Tags</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Other details</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">



                                <div className="form-group mb-3">

                                    <label>Select Category</label>
                                    <select name="category_id" onChange={handleInput} value={productInput.category_id} className="form-control">
                                        <option>
                                            Select Category
                                        </option>
                                        {
                                            categoryList.map((item) => {
                                                return (
                                                    <option value={item.id} key={item.id}>
                                                        {item.name}
                                                    </option>
                                                )
                                            })
                                        }

                                    </select>
                                    <small className="text-danger"> {errorList.category_id}</small>

                                </div>

                                <div className="form-group mb-3">
                                    <label>Slug</label>
                                    <input type="text" name="slug" onChange={handleInput} value={productInput.slug} className="form-control" />
                                   <small className="text-danger"> {errorList.slug}</small>

                                </div>


                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={productInput.name} className="form-control" />
                               <small className="text-danger"> {errorList.name}</small>

                                </div>

                                <div className="form-group mb-3">
                                    <label> Description</label>
                                    <textarea name="descrip" onChange={handleInput} value={productInput.descrip} className="form-control" />
                                </div>





                            </div>
                            <div className="tab-pane card-body border fade" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">


                                <div className="form-group mb-3">
                                    <label>Meta Title</label>
                                    <textarea name="meta_title" onChange={handleInput} value={productInput.meta_title} className="form-control" />
                               <small className="text-danger"> {errorList.meta_title}</small>

                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta Keywords</label>
                                    <textarea name="meta_keyword" onChange={handleInput} value={productInput.meta_keyword} className="form-control" />
                               
                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta description</label>
                                    <textarea name="meta_descrip" onChange={handleInput} value={productInput.meta_descrip} className="form-control" />
                                </div>

                            </div>
                            <div className="tab-pane card-body border fade" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">

                                <div className="row">

                                    <div className="col-md-4 form-group mb-3">
                                        <label>Selling price</label>
                                        <input type="text" name="selling_price" onChange={handleInput} value={productInput.selling_price} className="form-control" />
                                        <small className="text-danger"> {errorList.selling_price}</small>

                                    </div>

                                    <div className="col-md-4 form-group mb-3">
                                        <label>Original price</label>
                                        <input type="text" name="original_price" onChange={handleInput} value={productInput.original_price} className="form-control" />
                                        <small className="text-danger"> {errorList.original_price}</small>

                                    </div>


                                    <div className="col-md-4 form-group mb-3">
                                        <label>Quantity</label>
                                        <input type="text" name="qty" onChange={handleInput} value={productInput.qty} className="form-control" />
                                        <small className="text-danger"> {errorList.qty}</small>

                                    </div>


                                    <div className="col-md-4 form-group mb-3">
                                        <label>Brand</label>
                                        <input type="text" name="brand" onChange={handleInput} value={productInput.brand} className="form-control" />
                                         <small className="text-danger"> {errorList.brand}</small>
                                   </div>


                                    <div className="col-md-8 form-group mb-3">
                                        <label>Image</label>
                                        <input type="file" name="image" onChange={handleImage} className="form-control" />
                                        <small className="text-danger"> {errorList.image}</small>

                                    </div>


                                    <div className="col-md-4 form-group mb-3">
                                        <label>Featured (checked=shown)</label>
                                        <input type="checkbox" name="featured" onChange={handleInput} value={productInput.featured} className="w-50 h-50" />
                                    </div>

                                    <div className="col-md-4 form-group mb-3">
                                        <label>Popular (checked=shown)</label>
                                        <input type="checkbox" name="popular" onChange={handleInput} value={productInput.popular} className="w-50 h-50" />
                                    </div>

                                    <div className="col-md-4 form-group mb-3">
                                        <label>Featured (checked=Hidden)</label>
                                        <input type="checkbox" name="status" onChange={handleInput} value={productInput.status} className="w-50 h-50" />
                                    </div>


                                </div>



                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">Submit </button>

                    </form>
                </div>


            </div>
        </div>

    )
}

export default AddProduct;