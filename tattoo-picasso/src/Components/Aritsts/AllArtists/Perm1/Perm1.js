import React from 'react';
import './Perm1.css';
import '../GeneralSingleArtist.css'

import perm1 from './Perm1-Images/perm1.png';
import perm1Overlay from './Perm1-Images/perm1-overlay.png';
import bauchbinde from '../GeneralArtistImages/bauchbinde.png';
import moonPink from '../GeneralArtistImages/moonPink.png';
import closeButton from '../GeneralArtistImages/close-button.png';

function openNav() {
    document.getElementById("perm1-myNav").style.height = "100%";
    document.getElementById("perm1-myNav").style.width = "110%";
    document.getElementById("perm1-content").style.opacity = "100%";
}

function closeNav() {
    document.getElementById("perm1-myNav").style.width = "0%";
    document.getElementById("perm1-myNav").style.height = "0%";
    document.getElementById("perm1-content").style.opacity = "0%";
}

function Perm1() {
    return (
        <div>
            <div className="single-artist"  onClick={openNav}>
                <img className="artist-image" src={perm1} alt="" />
                <div className="bauchbinde">
                    <img id="moon-on-single-artist" src={moonPink} alt=""/>
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
                    <img src={closeButton} alt="close" id="close-button" onClick={closeNav} />
                </div>

                <div className="overlay-content" id="perm1-content">
                    
                    <img src={perm1Overlay} alt="artist" id="artist-overlay-pic" />

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

export default Perm1;