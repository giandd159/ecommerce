import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';

import axios from 'axios';
import { Link } from 'react-router-dom'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import { Swiper, SwiperSlide } from "swiper/react";



// import 'swiper/modules/pagination/pagination.min.css'
function Home() {

    const container = useRef(null)


    const [loading, setLoading] = useState(true);


    const [category, setCategory] = useState([]);



    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../src/assets/Lottie/92131-ecommerce.json')
        })
    }, [])
    var listItems = '';
    useEffect(() => {


        axios.get(`/api/getCategory`).then(res => {

            if (res.data.status === 200) {


                setCategory(res.data.category);

                // listItems = res.data.category.map((d) => <li key={d.id}>{d.id}</li>);
                //console.log(category);



            }
        });

    }, []);
    var showCategoryList = '';

    useEffect(() => {
        // action on update of movies   
        setLoading(false);

        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../../src/assets/Lottie/92131-ecommerce.json')
        })
    }, [category]);


    if (loading) {
        return <h1>Loading Categories ...</h1>
    } else {
        var showCategoryList = '';
        showCategoryList = category.map((item) => {
            return (

                <div className="col-md-4" key={item.id}>
                    <Link to="/login">
                        <img src={`http://localhost:8000/${item.image}`} width="150px" height="150px" alt={item.name} />

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
        console.log(showCategoryList)
    }





    return (
        <div className="App">

            <div className="container" ref={container}>




            </div>

            {/* <div>


                {showCategoryList}



            </div> */}
            <section className="section section-xl section-shaped pb-250">
                <div className="shape shape-style-1 bg-gradient-info">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>


                <div className="separator separator-bottom separator-skew">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </section>

            <Swiper
                spaceBetween={70}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                centeredSlides={true}
                navigation={true}
                
                
            >

                {showCategoryList.map(item =>
                    <SwiperSlide key={item.key} name={item.name} >

                        {item}
                    </SwiperSlide>
                )}





            </Swiper>


            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">returns</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="#">watch</a></li>
                                <li><a href="#">bag</a></li>
                                <li><a href="#">shoes</a></li>
                                <li><a href="#">dress</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    );

}

export default Home; 