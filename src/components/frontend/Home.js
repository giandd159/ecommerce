import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';

import axios from 'axios';
import { Link } from 'react-router-dom'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


import Contact from './Contact'
import Carousel2 from './Carousel2'


import img1 from '../../assets/img/nimagen1.jpg';
import img2 from '../../assets/img/nimagen2.jpg';
import img3 from '../../assets/img/nimagen3.jpg';



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

    var containerHTML = '';

    containerHTML =
            
            <div>
                    <img src={img1} width="auto" height="321px" />
                    <img src={img2} width="auto" height="321px" />
                    <img src={img3} width="auto" height="321px" /> 
            </div>
       

    // console.log(containerHTML);

    if (loading) {
        return <h1>Loading Categories ...</h1>
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
                    <img className="promocion" src={'http://localhost:3000/img/banner.gif'} height="321px" alt="banner" />

                </div>
                <div className="boxb">
                    <Contact ></Contact>
                </div>


            </div>



            <div className="asd">
                    <Carousel2 ></Carousel2>
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
                    <img className="newImage" src={'http://localhost:3000/img/newImage.png'} height="321px" alt="banner" />

                </div>

            </div>

            <footer class="footer-area">
                <div class="footer-wave-box">
                    <div class="footer-wave footer-animation"></div>
                </div>
                <div class="main">
                    <div class="footer">
                        <div class="single-footer">
                            <h4>Sobre Nosotros</h4>
                            <p>Somos líderes en ventas </p>
                            <p>   en todo el país.</p>
                            <p> Visita nuestras redes sociales.</p>


                        </div>
                        <div class="single-footer">
                            <h4>Menu Principal</h4>
                            <ul>
                                <li><a href=""><i class="fas fa-chevron-right"></i> Inicio</a></li>
                                {/* <li><a href="/about"><i class="fas fa-chevron-right"></i> Sobre Nosotros</a></li> */}
                                <li><a href=""><i class="fas fa-chevron-right"></i> Coleccion</a></li>
                                <li><a href="/Collections"><i class="fas fa-chevron-right"></i> Compra</a></li>
                            </ul>
                        </div>
                        <div class="single-footer">
                            <h4>quick links</h4>
                            <ul>
                                <li><a href="/privacy"><i class="fas fa-chevron-right"></i> Política de privacidad</a></li>
                                <li><a href="/terms"><i class="fas fa-chevron-right"></i> Terminos & Condiciones</a></li>
                                <li><a href="/disclaimer"><i class="fas fa-chevron-right"></i> disclaimer</a></li>
                            </ul>
                        </div>
                        <div class="single-footer">
                            <h4>contact us</h4>
                            <ul>
                                <li><a href=""><i class="fas fa-map-marker-alt"></i> Av. Ricardo Elías Aparicio 740, La Molina</a></li>
                                <li><a href=""><i class="fas fa-mobile-alt"></i> +88 0123 456 789</a></li>
                                <li><a href=""><i class="far fa-envelope"></i> gabrielquezada159@gmail.com</a></li>
                            </ul>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                    </div>
                    <div class="copy">
                        <p>&copy; 2022, Todos los derechos reservados</p>
                    </div>
                </div>
            </footer>

        </div>
    );

}

export default Home; 