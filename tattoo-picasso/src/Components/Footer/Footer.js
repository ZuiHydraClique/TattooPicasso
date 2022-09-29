import React from 'react';
import './Footer.css';

/*IMAGES*/
import facebookIcon from './FooterImages/facebook-icon.png';
import instagramIcon from './FooterImages/instagram-icon.png';
import tiktokIcon from './FooterImages/tiktok-icon.png';
import pinterestIcon from './FooterImages/pinterest-icon.png';

function Footer() {
    return (
        <div id="whole-footer">
            <div id="footer-spacer"></div>

            <div id="footer-content">
                <div id="footer-inner-content">
                    <div id="footer-left-content">
                        <div className="footer-item">
                            <div className="footer-headline">Impressum</div>
                            <div className="footer-attributes">Schwabacherstraße 35</div>
                            <div className="footer-attributes">90439 Nürnberg</div>
                            <div className="footer-attributes">Mo - Fr 11:00-19:00</div>
                            <div className="footer-attributes">Sa 11:00-17:00</div>
                        </div>

                        <div className="footer-item">
                            <div className="footer-headline">Kontakt</div>
                            <div className="footer-attributes">Telefon: 01573/4347200</div>
                            <div className="footer-attributes">E-Mail: tattoopikasso@gmail.com</div>
                            <div className="footer-attributes">Instagram: tattoo_pikasso</div>
                            <div className="footer-attributes">Facebook: Tattoo Pikasso</div>
                        </div>
                    </div>

                    <div>
                        <div id="footer-right-content">
                            <div id="follow-us">
                                folge uns doch auf
                            </div>
                            <div id="footer-socails">
                                <a href="https://www.instagram.com/tattoo_pikasso/">
                                    <img className="socials-pic" src={instagramIcon} alt=""/>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100063521922062">
                                    <img className="socials-pic" src={facebookIcon} alt=""/>
                                </a>
                                <a href="https://www.tiktok.com/@tattoopikasso">
                                    <img className="socials-pic" src={tiktokIcon} alt=""/>
                                </a>
                            
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
  );
}

export default Footer;
