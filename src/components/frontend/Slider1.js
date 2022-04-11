import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../../assets/img/SliderFull/30-03-CT-CATEGORIA-REG-1-update_abril.jpg';
// import img2 from '../../assets/img/SliderFull/nimagen2.jpg';
import img2 from '../../assets/img/SliderFull/30-03-CT-CATEGORIA-REG-3-update_abril.jpg';
import img3 from '../../assets/img/SliderFull/30-03-CT-CATEGORIA-REG-7-update_abril.jpg';
import img4 from '../../assets/img/SliderFull/CT-4-EXPW-31-03-update_abril.jpg';
import img5 from '../../assets/img/SliderFull/CT-5 HOME-EXP-04-04.jpg';
import img6 from '../../assets/img/SliderFull/CT-6-EXPW-31-03cyber-wongg.jpg';
import img7 from '../../assets/img/SliderFull/CT-6-EXPW-31-03cyber-wong.jpg';
// import img8 from '../../assets/img/SliderFull/CT-TOP-BAR-WONG-05-04.jpg';


// import img3 from '../../assets/img/SliderFull/nimagen3.jpg';
import { Autoplay } from 'swiper';
function GalerrySlider() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                        <img src={img4} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img5} />
                    </div>
                  
                </div>
            </div>

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img6} />
                    </div>
                  
                </div>
            </div> 

            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img7} />
                    </div>
                  
                </div>
            </div> 
            {/* <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src={img8} />
                    </div>
                  
                </div>
            </div>  */}

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

export default GalerrySlider