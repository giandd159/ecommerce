import React, { useEffect, useState, useRef } from 'react';
import lottie from 'lottie-web';

import axios from 'axios';
import { Link } from 'react-router-dom'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";



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
        return <h1>Loading Categories ...</h1>
    } else {
        var showCategoryList = '';
        showCategoryList = category.map((item) => {
            return (

                <div className="col-md-4 mb-5 mx-5 " key={item.id}>

                    <div className="mx-5" >

                        <Link to="/login">
                            <img src={`http://localhost:8000/${item.image}`} width="150px" height="200px" alt={item.name} />

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

            <div class="slider mb-5">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
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

            <div className="logoSlider">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="Xd"

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



            {/* <div class="footer mt-5">
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
            </div>  */}


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