import React from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from './img/img1.jpg';
import image2 from './img/img2.webp';
import image3 from './img/img3.webp';
import image4 from './img/img4.jpg';
import './recipes.css';

export const Home = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <div>
  
<Slider {...settings}>
   
      <div className='abc'>
        <img src={image1} />
      </div>
      <div className='abc'>
        <img src={image2}/>
      </div>
      <div className='abc'>
      <img src={image3}/>
      </div>
      <div className='abc'>
      <img src={image4}/>
      </div>

    </Slider>
    </div>
  );
}



