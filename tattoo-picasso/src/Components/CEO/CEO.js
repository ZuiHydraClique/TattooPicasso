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
                    22 Jahre bin ich bereits leidenschaftlicher Tattoowierer 
                    und seit 2013 führe ich mein eigenes Tattoostudio in Nürnberg. 
                    Am liebsten entwerfe ich eigene Kunstwerke und bringe diese mit meiner 
                    langjährigen Erfahrung auf die Haut meiner Kunden. Mein Ziel ist es den Wünschen 
                    meiner Kunden nachzugehen und sie bestmöglich zu verwirklichen.
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default CEO;
