import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'

function Category() {
    const [picture, setPicture] = useState([]);
    const [errorList, setError] = useState([]);

    const [categoryInput, setCategory] = useState(
        {
            slug: '',
            name: '',
            descrip: '',
            status: '',
            meta_title: '',
            meta_keyword: '',
            meta_descrip: '',
            error_list: [],
        });

    const handleInput = (e) => {

        e.persist();
        setCategory({ ...categoryInput, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setPicture({ image :e.target.files[0] })   
    }

    const submitCategory = (e) => {
        e.preventDefault();
        //e.persist();
        //const data = {

            // slug: categoryInput.slug,
            // name: categoryInput.name,
            // description: categoryInput.descrip,
            // status: categoryInput.status,
            // meta_title: categoryInput.meta_title,
            // meta_keyword: categoryInput.meta_keyword,
            // meta_descrip: categoryInput.meta_descrip

            const formData = new FormData();
            formData.append('image',picture.image);
            formData.append('name',categoryInput.name);

            formData.append('slug',categoryInput.slug);
            formData.append('description',categoryInput.description);
            formData.append('status',categoryInput.status);
            formData.append('meta_title',categoryInput.meta_title);
        
            formData.append('meta_keyword',categoryInput.meta_keyword);
            formData.append('meta_description',categoryInput.meta_descrip);

        //}
        axios.post('/api/store-category', formData).then(res => {

            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                document.getElementById('category_Form').reset();
            } else if (res.data.status === 400) {
                setCategory({ ...categoryInput, error_list: res.data.errors })
            }
        });
    }



    var display_errors = [];
    if (categoryInput.error_list) {
        display_errors =
            [
                categoryInput.error_list.slug,
                categoryInput.error_list.name,
                categoryInput.error_list.meta_title
            ]
    }


    return (
        <div className="container-fluid px-4">

            {
                display_errors.map((item, i) => {
                    return (<p className="mb-1" key={i} >{item}</p>);
                })
            }

            <div className="card mt-4">
                <div className="card-header">

                    <h1 className="mt-4"> Add Category
                        <Link to="/admin/view-category" className="btn btn-primary btn-sm float-end">View Category</Link>
                    </h1>
                </div>
                <div className="card-body">

                    <form onSubmit={submitCategory} id="category_Form">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="seo-tags" aria-selected="false">Seo Tags</button>
                            </li>

                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="form-group mb-3">
                                    <label>Slug</label>
                                    <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />


                                </div>
                                <div className="form-group mb-3">
                                    <label>Name</label>
                                    <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />


                                </div>
                                <div className="form-group mb-3">
                                    <label>Description</label>
                                    <textarea name="descrip" onChange={handleInput} value={categoryInput.descrip} className="form-control" />

                                </div>

                                <div className="col-md-8 form-group mb-3">
                                    <label>Image</label>
                                    <input type="file" name="image" onChange={handleImage} className="form-control" />
                                    <small className="text-danger"> {errorList.image}</small>

                                </div>


                                <div className="form-group mb-3">
                                    <label>Status</label>
                                    <input type="checkbox" onChange={handleInput} value={categoryInput.status} name="status" /> Status 0=shown/1=hidden
                                </div>

                            </div>
                            <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">
                                <div className="form-group mb-3">
                                    <label>Meta Title</label>
                                    <textarea name="meta_title" onChange={handleInput} value={categoryInput.meta_title} className="form-control" />

                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta Keywords</label>
                                    <textarea name="meta_keywords" onChange={handleInput} value={categoryInput.meta_keywords} className="form-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Meta description</label>
                                    <textarea name="meta_descrip" onChange={handleInput} value={categoryInput.meta_descrip} className="form-control" />
                                </div>


                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary px-4 fload end">Submit </button>
                    </form>
                </div>
            </div>
        </div>

    );

}

export default Category; 