import React from 'react';

import { useState } from 'react';
import Slider from 'react-slick';

import Image1 from './CarouselImages/carouselImg1.png';
import Image2 from './CarouselImages/carouselImg2.png';
import Image3 from './CarouselImages/carouselImg3.png';
import Image4 from './CarouselImages/carouselImg4.png';
import Image5 from './CarouselImages/carouselImg5.png';
import Image6 from './CarouselImages/carouselImg6.png';
import Image7 from './CarouselImages/carouselImg7.png';
import Image8 from './CarouselImages/carouselImg8.png';
import Image9 from './CarouselImages/carouselImg9.png';
import Image10 from './CarouselImages/carouselImg10.png';
import Image11 from './CarouselImages/carouselImg11.png';
import Image12 from './CarouselImages/carouselImg12.png';
import Image13 from './CarouselImages/carouselImg13.png';
import Image14 from './CarouselImages/carouselImg14.png';
import Image15 from './CarouselImages/carouselImg15.png';
import Image16 from './CarouselImages/carouselImg16.png';
import Image17 from './CarouselImages/carouselImg17.png';
import Image18 from './CarouselImages/carouselImg18.png';
import Image19 from './CarouselImages/carouselImg19.png';
import Image20 from './CarouselImages/carouselImg20.png';

import './Carousel.css';

const images = [
    Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10,
     Image11, Image12, Image13, Image14, Image15, Image16, Image17, Image18, Image19, Image20 
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

    const settingsOne = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 700,
        slidesToShow: 1,
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
            <div id="slider-three">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide active-slide" : "slide nonactive-slide"}>
                            <img id="carousel-image" src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
            
            <div id="slider-one">
                <Slider {...settingsOne}>
                    {images.map((img, idx) => (
                        <div className="slide active-slide-one">
                            <img id="carousel-image" src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
            
        </div>

    );
}

export default Carousel;