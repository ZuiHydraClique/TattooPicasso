import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <div id="footer-spacer"></div>

            <div id="footer-content">
                <div className="footer-item">
                    <div className="footer-headline">Impressum</div>
                    <div>Schwabacherstraße 35</div>
                    <div>90439 Nürnberg</div>
                    <div>Mo - Fr 11:00-19:00</div>
                    <div>Sa 11:00-17:00</div>
                </div>

                <div className="footer-item">
                    <div className="footer-headline">Kontakt</div>
                    <div>Telefon: </div>
                    <div>E-Mail: </div>
                    <div>Instagram: tattoo_pikasso</div>
                    <div>Facebook: Tattoo Pikasso</div>
                </div>

            </div>
        </div>
  );
}

export default Footer;
