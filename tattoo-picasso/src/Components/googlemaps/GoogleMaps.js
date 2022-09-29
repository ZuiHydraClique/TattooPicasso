import React from 'react';

import './GoogleMaps.css';

function GoogleMaps() {

    return (
        <div style={{ 
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div id="place-headline">
                Standort
            </div>
            <div id="adress-block">
                <a id="adress" href="https://www.google.de/maps/place/Tattoo+pikasso/@49.4407155,11.0524012,17z/data=!3m1!4b1!4m5!3m4!1s0x479f57fc28a32b99:0x656c9dfffc44d001!8m2!3d49.440712!4d11.0545899">
                    Schwabacher Str. 35, 90439 Nürnberg
                </a>
            </div>
            <iframe title="standort"
                width="90%" 
                height="500" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=%20Schwabacherstr%2035,%20N%C3%BCrnberg&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
            </iframe>
        </div>
    );
        

}

export default GoogleMaps;