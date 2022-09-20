import React from 'react';

import { useState } from 'react';
import Slider from 'react-slick';

import Image1 from './CarouselImages/Unbenannt1.png';
import Image2 from './CarouselImages/Unbenannt2.png';
import Image3 from './CarouselImages/Unbenannt3.png';
import Image4 from './CarouselImages/Unbenannt4.png';
import Image5 from './CarouselImages/Unbenannt5.png';
import Image6 from './CarouselImages/Unbenannt6.png';
import Image7 from './CarouselImages/Unbenannt7.png';

import './Carousel.css';

const images = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7
]


function Carousel() {

    //const NextArrow = ({onClick}) => {
    //  return (
    //    <div onClick={onClick}>
    //        <img />
    //    </div>
    //    )
    //}

    //const PrevArrow = ({onClick}) => {
    //  return (
    //    <div onClick={onClick}>
    //        <img />
    //    </div>
    //    )
    //}

    const [imageIndex, setImageIndex] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 700,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        //nextArrow: <NextArrow />
        //prevArrow: <PrevArrow />
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <div id="whole-slider">
            <Slider {...settings}>
                {images.map((img, idx) => (
                    <div className={idx === imageIndex ? "slide active-slide" : "slide nonactive-slide"}>
                        <img id="carousel-image" src={img} alt={img} />
                    </div>
                ))}
            </Slider>
        </div>

    );
}

export default Carousel;