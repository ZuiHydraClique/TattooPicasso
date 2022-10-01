import React from 'react';
import './Gamble.css';

import gambleImage from './gewinnspiel.jpg';

function Gamble() {
    return (
        <div className="whole-gamble">
            <a href="https://www.instagram.com/p/CjKm1VXtLJp/?utm_source=ig_web_copy_link">
                <img id="gamble-image" src={gambleImage} />
            </a>
        </div>
    );
}

export default Gamble;
