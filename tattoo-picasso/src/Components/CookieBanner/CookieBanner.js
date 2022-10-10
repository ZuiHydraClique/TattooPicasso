import React from 'react';
import { useEffect } from 'react';
import './CookieBanner.css';

function CookieBanner() {

    useEffect (() => {
        if(document.cookie == "bannerclicked=true") {
            document.getElementById('cookie-banner').style.opacity = 0;
        } else {
            document.getElementById('cookie-banner').style.opacity = 1;
        }
    }, [])

    function removeBanner() {
        document.getElementById('cookie-banner').style.opacity = 0;
        document.cookie = "bannerclicked=true";
    }

    return (
        <div id="cookie-banner">
            <div id="inner-cookie-banner">
                <div id="banner-text">
                    Wir verwenden Cookies, um die notwendige Seitenfunktionalität 
                    zu gewährleisten und das Benutzererlebnis zu verbessern. Mit der Nutzung 
                    unserer Website stimmst du unserer Datenschutzerklärung und unseren Cookie-Richtlinien zu.
                </div>
                <button id="banner-button" onClick={removeBanner}>
                    OK
                </button>
            </div>
        </div>
  );
}

export default CookieBanner;
