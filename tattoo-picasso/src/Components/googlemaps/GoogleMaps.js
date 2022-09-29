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