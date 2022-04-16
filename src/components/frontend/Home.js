import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';
import Footer from './Footer'

import axios from 'axios';
import { Link } from 'react-router-dom'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import GalerrySlider from './Slider1';

import Contact from './Contact';

import banner from './banner.gif';
import banner2 from './newImage.png';


import ImageSlider from './Slider';

import SwiperCore, { EffectCoverflow, Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination, Navigation]);




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
        return <h1 className="loading">Loading Categories ...</h1>
    } else {


        var showCategoryList = '';
        showCategoryList = category.map((item) => {
            return (

                <div className="col-md-4 mb-5 mx-5 " key={item.id}>

                    <div className=" container1 mx-5" >

                        <Link to={`/collections/${item.slug}`}>
                            <img src={`http://localhost:8000/${item.image}`} width="auto" height="321px" alt={item.name} />

                        </Link>

                        <div className="mx-5">

                            <Link to={`/collections/${item.slug}`}>
                                <h5 className="imageText">

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
                    <svg className="mySVG"
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

            <h3 className="mt-5">
                Las últimas tendencias
            </h3>

            <div className="containerSlider">
                <div className="boxa">
                    <img className="promocion" src={banner} height="321px" alt="banner" />

                </div>
                <div className="boxb">
                    <Contact ></Contact>
                </div>


            </div>








            <div className="logoSlider">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    loop={true}
                >
                    <SwiperSlide >
                        <img className="mySwiperImages" src="https://gamarraclick.com/themes/warehouse/assets/img/BBVA_WEB1.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className="mySwiperImages" src="https://gamarraclick.com/themes/warehouse/assets/img/BCP_MOBILE.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img className="mySwiperImages" src="https://gamarraclick.com/themes/warehouse/assets/img/IBK_WEB.jpg" alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>




            <div className="container mt-5 carousel">
                <ImageSlider />
            </div>

            <div className="container mt-5 carousel">
                <GalerrySlider />

            </div>










            <div class="sliderImages mb-5">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"coverflow"}
                    loop={true}

                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 40,
                        // depth: 500,
                        // modifier: 1,
                        slideShadows: false,
                    }}
                    navigation={true}
                    className="mySwiper mt-5"
                    pagination={true}



                >


                    {showCategoryList.map(item =>
                        <SwiperSlide key={item.key} name={item.name} >

                            {item}
                        </SwiperSlide>
                    )}




                </Swiper>


            </div>



       



            <div class="newContainer">
                <div class="newBox">
                    <img className="newImage" src={banner2} height="321px" alt="banner" />

                </div>

            </div>
            <Footer>
            
            </Footer>

        </div>
    );

}

export default Home; 