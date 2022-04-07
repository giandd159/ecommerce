import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";



import img1 from '../../assets/img/nimagen1.jpg';
import img2 from '../../assets/img/nimagen2.jpg';
import img3 from '../../assets/img/nimagen3.jpg';


// 2880 1180 image size


function Carousel2() {

  const images = [
    {
      original: img1,
      
    },

    {
      original: img2,
    },
  
    {
      original: img3,
    },
  
  ];


  const someComponent = props => {
    // console.log(props.someProps.objectKey)
    return <div>{/* {props.someProps.objectKey} */}</div>;
  };

  return (
    <ImageGallery
      items={images}
      //   defaultImage={defaultImage}
      infinite={true}
      autoplay={true}
      slidesPerView={3}
      showBullets={true}
      lazyLoad={true}
      showPlayButton={true}
      renderCustomControls={someComponent}
      className="ImageGallery2"
    />
  );

}

export default Carousel2; 