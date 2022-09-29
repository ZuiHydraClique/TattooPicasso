import React from 'react';
import './ArtGallery.css';

import { useState } from 'react';
import Slider from 'react-slick';

import moon from './ArtGalleryImages/moon.png';
import upArrow from './ArtGalleryImages/up-arrow.png';

import flower1 from './ArtGalleryImages/FlowersImages/image1.png';
import flower2 from './ArtGalleryImages/FlowersImages/image2.png';
import flower3 from './ArtGalleryImages/FlowersImages/image3.png';
import flower4 from './ArtGalleryImages/FlowersImages/image4.png';
import flower5 from './ArtGalleryImages/FlowersImages/image5.png';
import flower6 from './ArtGalleryImages/FlowersImages/image6.png';

const flowerImages = [
    flower1, flower2, flower3, flower4, flower5, flower6
]

function openNav1() {
    //document.getElementById("flower-slider").style.display = "block";
    //document.getElementById("flower-slider").style.marginLeft = "10%";
    document.getElementById("flower-slider").style.marginTop = "0px";
    document.getElementById("flower-slider").style.zIndex = "0";
    document.getElementById("flower-slider").style.opacity = "1";

    document.getElementById("flowers-nav").style.height = "100%";
    document.getElementById("flowers-nav").style.marginTop = "80px";
    document.getElementById("flowers-nav").style.opacity = "1";
    
}

function closeNav1() {
    //document.getElementById("flower-slider").style.display = "none";
    //document.getElementById("flower-slider").style.marginLeft = "100%";
    document.getElementById("flower-slider").style.marginTop = "-20%";
    document.getElementById("flower-slider").style.opacity = "0";
    document.getElementById("flower-slider").style.zIndex = "-100";

    document.getElementById("flowers-nav").style.height = "0%";
    document.getElementById("flowers-nav").style.marginTop = "0px";
    document.getElementById("flowers-nav").style.opacity = "0";
}

function ArtGallery() {

    const [imageIndex, setImageIndex] = useState(0)

    const settingsTat = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 700,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 8000,
        //nextArrow: <NextArrow />
        //prevArrow: <PrevArrow />
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <div id="whole-art-gallery">
            <div id="artgallery-headline">
                Kunstgallery
            </div>

            <div id="moon-pictures">
                <div id="moons-left">
                    <div className="single-moon" onClick={openNav1}>
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Blumen
                        </div>
                    </div>

                    <div className="single-moon">
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Aquarell
                        </div>
                    </div>

                    <div className="single-moon">
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Realistisch
                        </div>
                    </div>
                </div>

                <div id="moons-right">
                    <div className="single-moon">
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Piercing
                        </div>
                    </div>
                    <div className="single-moon">
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Partner
                        </div>
                    </div>
                    <div className="single-moon">
                        <img className="single-moon-picture" src={moon} alt='' />
                        <div className="moon-headline">
                            Coverup
                        </div>
                    </div>
                </div>
            </div>
            

            <div id="flowers-nav">
                <div className="arrow-box" onClick={closeNav1}>
                    <img className="slider-arrow" src={upArrow} alt="" />
                </div>
                <div className="slider-headline">
                    Blumen
                </div>
                <div id="flower-slider">
                    <Slider {...settingsTat}>
                        {flowerImages.map((flowerImages, idx) => (
                            <div className={idx === imageIndex ? "slide-artists active-slide" : "slide-artists nonactive-slide"}>
                                <img src={flowerImages} alt={flowerImages} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            
        </div>
  );
}

export default ArtGallery;
