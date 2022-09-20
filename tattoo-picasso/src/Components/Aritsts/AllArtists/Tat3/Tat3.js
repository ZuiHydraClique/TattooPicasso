import React from 'react';
import './Tat3.css';
import '../GeneralSingleArtist.css'

import { useState } from 'react';
import Slider from 'react-slick';

import tat3 from './Tat3-Images/tat3.png';
import tat3Overlay from './Tat3-Images/tat3-overlay.png';
import moonBlue from '../GeneralArtistImages/moonBlue.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import closeButton from '../GeneralArtistImages/close-button.png';

/*IMAGES*/
import imagetat31 from './Tat3-Images/image1.png';
import imagetat32 from './Tat3-Images/image2.png';
import imagetat33 from './Tat3-Images/image3.png';
import imagetat34 from './Tat3-Images/image4.png';
import imagetat35 from './Tat3-Images/image5.png';
import imagetat36 from './Tat3-Images/image6.png';

const images = [
    imagetat31, imagetat32, imagetat33, imagetat34, imagetat35, imagetat36
]

function openNav() {
    document.getElementById("tat3-myNav").style.height = "100%";
    document.getElementById("tat3-myNav").style.width = "100%";
    document.getElementById("tat3-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("tat3-myNav").style.width = "0%";
    document.getElementById("tat3-myNav").style.height = "0%";
    document.getElementById("tat3-content").style.opacity = "0%";
}

function Tat3() {

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
            <div className="single-artist"  onClick={openNav} id="tat3-single-artist">
                <img className="artist-image" src={tat3} alt="" />
                <div className="bauchbinde">
                    <img id="moon-on-single-artist" src={moonBlue} alt=""/>
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

           <div id="tat3-myNav" className="overlay">
                <div className="close-button-line">
                    <div id="moon-title">
                        <div id="overlay-title">Tattowierer</div>
                        <img id="overlay-title-image" src={moonBlue} alt=""/>
                    </div>
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="tat3-content">

                    <div id="image-container">
                        <img src={tat3Overlay} alt="artist" id="artist-overlay-pic" />
                    </div>
                    
                    <div id="text-and-slider">
                        <div id="only-text">
                            
                            <div id="artist-text-content">
                                <div id="artist-headline-artistname">Künstlername</div>
                                <div id="artist-headline-realname">bürgerlicher Name</div>
                                <div id="themes-headline">Themen</div>
                                <div className="single-theme">Blackwork</div>
                                <div className="single-theme">Mandala</div>
                                <div className="single-theme">Shitass</div>
                            </div>  

                            <div id="appointment-container">
                                <div id="appointment-inner-container">
                                    <div id="appointment-headline">Termine</div>
                                    <div className="appointment-detail">Termine1</div>
                                    <div className="appointment-detail">Termine2</div>
                                    <div className="appointment-detail">Termine3</div>
                                    
                                    <div id="artist-attributes">
                                        <div className="further-artist-attributes">
                                            <div>tättowiert seit:</div>
                                            <div className="attribute-value">2022</div>
                                        </div>

                                        <div className="further-artist-attributes">
                                            <div>geboren am:</div>
                                            <div className="attribute-value">02.03.2022</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        
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
        

  );
}

export default Tat3;