import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// import defaultImage from "./assets/images/default.jpg";
// import "./styles.css";

import img1 from '../../assets/img/3Slider.jpg';
import img2 from '../../assets/img/newCustomImage.jpg';
import img3 from '../../assets/img/5Slider.png';

import img4 from '../../assets/img/4Slider.jpg';
import img6 from '../../assets/img/6Slider.png';

// 2880 1180 image size


function Contact() {

  const images = [
    {
      original: img1,
      //   thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },

    {
      original: img2,
      //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img4,
      //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img3,
      //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img6,
      //   thumbnail: 'https://picsum.photos/id/1019/250/150/',
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

      showBullets={true}
      lazyLoad={true}
      showPlayButton={true}
      fullscreen={true}
      renderCustomControls={someComponent}
    />
  );

}

export default Contact; 