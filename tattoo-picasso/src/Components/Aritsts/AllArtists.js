import React from 'react';
import './AllArtists.css';

/*ARTIST*/
import Tat1 from './AllArtists/Tat1/Tat1.js';
import Tat2 from './AllArtists/Tat2/Tat2.js';
import Tat3 from './AllArtists/Tat3/Tat3.js';
import Tat4 from './AllArtists/Tat4/Tat4.js';
import Tat5 from './AllArtists/Tat5/Tat5.js';
import Tat6 from './AllArtists/Tat6/Tat6.js';
import Perm1 from './AllArtists/Perm1/Perm1.js';

import moonBlue from './AllArtists/GeneralArtistImages/moonBlue.png';
import moonPink from './AllArtists/GeneralArtistImages/moonPink.png';

function AllArtists() {
    return (
        <div id="whole-artists-section">
            <div id="employees-headline">unsere Künstler</div>
            <div id="whole-tattowierer">
                
                {/*
                <div id="tat-headline">
                    <div id="mitarbeiter">Mitarbeiter</div>
                    <div className="whole-artist-description">
                        <img id="pink-moon-on-title" src={moonBlue} alt=""/>
                        <div className="artist-description">Tattowierer</div>
                    </div>
                    <div className="whole-artist-description">
                        <img id="blue-moon-on-title" src={moonPink} alt=""/>
                        <div className="artist-description">Permanent<br/>Makeup</div>
                    </div>
                </div>*/}
                <div>
                    <Tat1 />
                </div>

                <div>
                    <Tat2 />
                </div>

                <div>
                    <Tat3 />
                </div>

                <div>
                    <Tat4 />
                </div>

                <div>
                    <Perm1 />
                </div>

            </div>
        </div>
        
        
  );
}

export default AllArtists;