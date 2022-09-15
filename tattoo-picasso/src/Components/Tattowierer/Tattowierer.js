import React from 'react';
import './Tattowierer.css';

/*IMAGES*/
import bauchbinde from './TattowiererImages/bauchbinde.png';

import artist1 from './TattowiererImages/tattowierer1.png';
import artist2 from './TattowiererImages/tattowierer2.png';
import artist3 from './TattowiererImages/tattowierer3.png';
import artist4 from './TattowiererImages/tattowierer4.png';
import artist5 from './TattowiererImages/tattowierer5.png';


function Tattowierer() {
    return (
        <div id="whole-tattowierer">
            
            <div id="tat-headline">
                Künstler
            </div>

            <div className="single-artist">
                <img className="artist-image" src={artist1} alt="" />
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

            <div className="single-artist">
                <img className="artist-image" src={artist2} alt="" />
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

            <div className="single-artist">
                <img className="artist-image" src={artist3} alt=""/>
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

            <div className="single-artist">
                <img className="artist-image" src={artist4} alt=""/>
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

            <div className="single-artist">
                <img className="artist-image" src={artist5} alt=""/>
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

            <div className="single-artist">
                <img className="artist-image" src={artist3} alt=""/>
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

        </div>
  );
}

export default Tattowierer;