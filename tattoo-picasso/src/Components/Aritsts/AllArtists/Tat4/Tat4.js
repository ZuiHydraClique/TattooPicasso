import React from 'react';
import './Tat4.css';
import '../GeneralSingleArtist.css'

import { useState } from 'react';
import Slider from 'react-slick';

import tat4 from './Tat4-Images/tat4.png';
import tat4Overlay from './Tat4-Images/tat4-overlay.png';
import moonBlue from '../GeneralArtistImages/moonBlue.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import closeButton from '../GeneralArtistImages/close-button.png';

/*IMAGES*/
import imagetat41 from './Tat4-Images/image1.png';
import imagetat42 from './Tat4-Images/image2.png';
import imagetat43 from './Tat4-Images/image3.png';
import imagetat44 from './Tat4-Images/image4.png';
import imagetat45 from './Tat4-Images/image5.png';
import imagetat46 from './Tat4-Images/image6.png';

const images = [
    imagetat41, imagetat42, imagetat43, imagetat44, imagetat45, imagetat46
]


function openNav() {
    document.getElementById("tat4-myNav").style.height = "100%";
    document.getElementById("tat4-myNav").style.width = "100%";
    document.getElementById("tat4-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("tat4-myNav").style.width = "0%";
    document.getElementById("tat4-myNav").style.height = "0%";
    document.getElementById("tat4-content").style.opacity = "0%";
}


function Tat4() {

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
                <img className="artist-image" src={tat4} alt="" />
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

           <div id="tat4-myNav" className="overlay">
                <div className="close-button-line">
                    <div id="moon-title">
                        <div id="overlay-title">Tattowierer</div>
                    </div>
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="tat4-content">

                    <div id="image-container">
                        <img src={tat4} alt="artist" id="artist-overlay-pic" />
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

export default Tat4;