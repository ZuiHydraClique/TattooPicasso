import React from 'react';
import './CEO.css';

import ceoPicture from './CEOImages/CEO-Image.png';

function CEO() {
    return (
        <div className="whole-ceo">
            <div id="ceo-content">
                <img id="ceo-image" alt="" src={ceoPicture} />
                <div id="whole-text">
                    <div id="ceo-name-headline">Zaur Pinkhasov</div>
                    <div id="ceo-text">
                    Bereits seit X Jahren bin ich leidenschaftlicher Tattoowierer 
                    und seit X Jahren habe ich meinen eigenen Tattooladen. 
                    Am liebsten entwerfe ich realistische Kunstwerke und bringe diese 
                    mit meinem über lange Zeit ausgebildetem Skill auf die Haut meiner Kunden.
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CEO;
