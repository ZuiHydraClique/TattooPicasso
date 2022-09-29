import React from 'react';
import './Perm1.css';
import '../GeneralSingleArtist.css'

import { useState } from 'react';
import Slider from 'react-slick';

import perm1 from './Perm1-Images/perm1.png';
import perm1Overlay from './Perm1-Images/perm1-overlay.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import moonPink from '../GeneralArtistImages/moonPink.png';
import closeButton from '../GeneralArtistImages/close-button.png';

/*IMAGES*/
import imageperm11 from './Perm1-Images/image1.png';
import imageperm12 from './Perm1-Images/image2.png';
import imageperm13 from './Perm1-Images/image3.png';
import imageperm14 from './Perm1-Images/image4.png';
import imageperm15 from './Perm1-Images/image5.png';
import imageperm16 from './Perm1-Images/image6.png';

const images = [
    imageperm11, imageperm12, imageperm13, imageperm14, imageperm15, imageperm16
]

function openNav() {
    document.getElementById("perm1-myNav").style.height = "100%";
    document.getElementById("perm1-myNav").style.width = "100%";
    document.getElementById("perm1-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("perm1-myNav").style.width = "0%";
    document.getElementById("perm1-myNav").style.height = "0%";
    document.getElementById("perm1-content").style.opacity = "0%";
}

function Perm1() {

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
        <div>
            <div className="single-artist"  onClick={openNav}>
                <img className="artist-image" src={perm1} alt="" />
                <div className="bauchbinde">
                    <img src={bauchbinde} alt=""/>
                    <div className="bauchbinde-inhalt">
                        <div className="artist-name">
                            Künstlername
                        </div>
                        <div className="artist-attributes">
                            Pircing
                        </div>
                    </div>
                </div>
           </div>

           <div id="perm1-myNav" className="overlay">
                <div className="close-button-line">
                    <div id="moon-title">
                        <div id="overlay-title">Permanent Makeup</div>
                    </div>
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="perm1-content">

                    <div id="image-container">
                        <img src={perm1} alt="artist" id="artist-overlay-pic" />
                    </div>
                    
                    <div id="text-and-slider">

                        <div id="only-text">
                            
                            <div id="artist-text-content">
                                <div id="artist-headline-artistname">Künstlername</div>
                                <div id="themes-headline">Themen</div>
                                <div className="single-theme">Blackwork</div>
                                <div className="single-theme">Mandala</div>
                                <div className="single-theme">Shitass</div>
                            </div>  
                    
                            <div id="sincewhen-container">
                                <div id="sincewhen-inner-container">
                                    <div>
                                        tattowiert seit:
                                    </div>
                                    <div>
                                        2022
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                

                        <div id="whole-slider-container">
                            <div id="whole-slider-artist">
                                <Slider {...settingsTat}>
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
        
        </div>
        

  );
}

export default Perm1;