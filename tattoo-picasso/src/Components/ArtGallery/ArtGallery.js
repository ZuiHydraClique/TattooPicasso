import React from 'react';
import './ArtGallery.css';

import moon from './ArtGalleryImages/moon.png';

function ArtGallery() {
    return (
        <div>

            <div id="moon-pictures">
                <img className="single-moon-picture" src={moon} alt=''/>
                <img className="single-moon-picture" src={moon} alt=''/>
                <img className="single-moon-picture" src={moon} alt=''/>
                <img className="single-moon-picture" src={moon} alt=''/>
            </div>

        </div>
  );
}

export default ArtGallery;
