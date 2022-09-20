import React from 'react';
import './Tat5.css';
import '../GeneralSingleArtist.css'

import tat5 from './Tat5-Images/tat5.png';
import tat5Overlay from './Tat5-Images/tat5-overlay.png';
import moonBlue from '../GeneralArtistImages/moonBlue.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import closeButton from '../GeneralArtistImages/close-button.png';

function openNav() {
    document.getElementById("tat5-myNav").style.height = "100%";
    document.getElementById("tat5-myNav").style.width = "110%";
    document.getElementById("tat5-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("tat5-myNav").style.width = "0%";
    document.getElementById("tat5-myNav").style.height = "0%";
    document.getElementById("tat5-content").style.opacity = "0%";
}

function Tat5() {
    return (
        <div>
            <div className="single-artist"  onClick={openNav}>
                <img className="artist-image" src={tat5} alt="" />
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
            <div id="tat5-myNav" className="overlay">
                <div className="close-button-line">
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="tat5-content">
                    
                    <img src={tat5Overlay} alt="artist1" id="artist-overlay-pic" />

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

export default Tat5;