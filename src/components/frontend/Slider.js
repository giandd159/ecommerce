import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/nimagen1.jpg';
import img2 from '../../assets/img/nimagen2.jpg';
import img3 from '../../assets/img/nimagen3.jpg';
import { Autoplay } from 'swiper';
function ImageSlider() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        arrows: true,
        centerPadding: '0',
        draggable:true

    }
    return (
        <Slider {...settings}>



            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img1} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img2} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img3} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img1} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img2} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img3} />
                    </div>
                  
                </div>
            </div> 

{/*             
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img1} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img1} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img1} />
                    </div>
                  
                </div>
            </div> */}

{/*             
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/15.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> */}
            {/* <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/7.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> */}
            {/* <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="images/16.jpg" />
                    </div>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                    <div className="details">
                        <h2>John Doe <span className="job-title">UI Developer</span></h2>
                    </div>
                </div>
            </div> */}
        </Slider>
    )
}

export default ImageSlider