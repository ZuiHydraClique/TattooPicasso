import React from 'react';
import './Tat1.css';
import '../GeneralSingleArtist.css'

import { useState } from 'react';
import Slider from 'react-slick';

import tat1 from './Tat1-Images/tat1.png';
import tat1Overlay from './Tat1-Images/tat1-overlay.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import moonBlue from '../GeneralArtistImages/moonBlue.png';
import closeButton from '../GeneralArtistImages/close-button.png';

/*IMAGES*/
import imagetat11 from './Tat1-Images/image1.png';
import imagetat12 from './Tat1-Images/image2.png';
import imagetat13 from './Tat1-Images/image3.png';
import imagetat14 from './Tat1-Images/image4.png';
import imagetat15 from './Tat1-Images/image5.png';
import imagetat16 from './Tat1-Images/image6.png';

const images = [
    imagetat11, imagetat12, imagetat13, imagetat14, imagetat15, imagetat16
]

function openNav() {
    document.getElementById("tat1-myNav").style.height = "100%";
    document.getElementById("tat1-myNav").style.width = "100%";
    document.getElementById("tat1-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("tat1-myNav").style.width = "0%";
    document.getElementById("tat1-myNav").style.height = "0%";
    document.getElementById("tat1-content").style.opacity = "0%";
}

function Tat1() {

    const [imageIndex, setImageIndex] = useState(0)

    const settingsTatFive = {
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

    const settingsTatThree = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        speed: 700,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        autoplaySpeed: 8000,
        //nextArrow: <NextArrow />
        //prevArrow: <PrevArrow />
        beforeChange: (current, next) => setImageIndex(next)
    }

    return (
        <div>
            <div className="single-artist"  onClick={openNav}>
                <img className="artist-image" src={tat1} alt="" />
                <div className="bauchbinde">
                    <img src={bauchbinde} alt=""/>
                    <div className="bauchbinde-inhalt">
                        <div className="artist-name">
                            Künstlername
                        </div>
                        <div className="artist-attributes">
                            Balckwork, Farbwork
                        </div>
                    </div>
                </div>
            </div>
            
            {/*OVERLAY*/}
            <div id="tat1-myNav" className="overlay">

                {/*UPPER LINE*/}
                <div className="close-button-line">
                    <div id="type-of-artist">
                        Tattowierer
                    </div>
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                {/*ACTUAL CONTENT*/}
                <div className="overlay-content" id="tat1-content">
                    {/*TEXTS AND IMAGE*/}
                    <div id="overlay-content-middle">
                        {/*LEFT SIDE*/}
                        <div id="overlay-left-side">
                            <div id="tat-state">
                                <div>
                                    Status:
                                </div>
                                <div id="state-available">
                                    verfügbar
                                </div>
                            </div>
                            <div id="sincewhen-container">
                                <div>
                                    tattowiert seit:
                                </div>
                                <div>
                                    2022
                                </div>
                            </div>
                        </div>
                        {/*MIDDLE SIDE*/}
                        <div id="overlay-middle-side">
                            <div id="overlay-artist-name">
                                Künstlername
                            </div>
                            <img src={tat1} alt="artist1" id="artist-overlay-pic" />
                            <div id="text-under-pic">
                                <div id="tat-state">
                                    <div>
                                        Status:
                                    </div>
                                    <div id="state-available">
                                        verfügbar
                                    </div>
                                </div>
                                <div id="sincewhen-container">
                                    <div>
                                        tattowiert seit:
                                    </div>
                                    <div>
                                        2022
                                    </div>
                                </div>
                                <div id="theme-below-pic">
                                    <div className="below-pic-single-theme">Blackwork</div>
                                    <div className="below-pic-single-theme">Mandala</div>
                                    <div className="below-pic-single-theme">Shitass</div>
                                </div>
                            </div>
                            
                        </div>
                        {/*RIGHT SIDE*/}
                        <div id="overlay-right-side">
                            <div id="artist-text-content">
                                <div id="themes-headline">Themen</div>
                                <div className="single-theme">Blackwork</div>
                                <div className="single-theme">Mandala</div>
                                <div className="single-theme">Shitass</div>
                            </div>
                        </div>
                    </div>
                
                    {/*SLIDER*/}
                    <div id="whole-slider-container">
                        <div id="whole-slider-artist-five">
                            <Slider {...settingsTatFive}>
                                {images.map((img, idx) => (
                                    <div className={idx === imageIndex ? "slide-artists active-slide" : "slide-artists nonactive-slide"}>
                                        <img src={img} alt={img} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div id="whole-slider-artist-three">
                            <Slider {...settingsTatThree}>
                                {images.map((img, idx) => (
                                    <div className={idx === imageIndex ? "slide-artists active-slide" : "slide-artists nonactive-slide"}>
                                        <img src={img} alt={img} />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        

  );
}

export default Tat1;