import React from 'react';
import './Tat6.css';
import '../GeneralSingleArtist.css'

import tat6 from './Tat6-Images/tat6.png';
import tat6Overlay from './Tat6-Images/tat6-overlay.png';
import moonBlue from '../GeneralArtistImages/moonBlue.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import closeButton from '../GeneralArtistImages/close-button.png';

function openNav() {
    document.getElementById("tat6-myNav").style.height = "100%";
    document.getElementById("tat6-myNav").style.width = "110%";
    document.getElementById("tat6-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("tat6-myNav").style.width = "0%";
    document.getElementById("tat6-myNav").style.height = "0%";
    document.getElementById("tat6-content").style.opacity = "0%";
}


function Tat6() {
    return (
        <div>
            <div className="single-artist"  onClick={openNav}>
                <img className="artist-image" src={tat6} alt="" />
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
            <div id="tat6-myNav" className="overlay">
                <div className="close-button-line">
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="tat6-content">
                    
                    <img src={tat6Overlay} alt="artist1" id="artist-overlay-pic" />

                    <div id="artist-text-content">

                        <div id="artist-headline">Künstlername</div>

                        <div id="artist-text">
                            <div>blackwork artist</div>
                            <div>des isses</div>
                        </div>

                    </div>

                </div>

            </div>
        
        </div>
        

  );
}

export default Tat6;