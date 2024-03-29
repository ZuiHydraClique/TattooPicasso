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
                            <div className="footer-headline">Kontakt</div>
                            <div className="footer-attributes">Telefon: <a id="tel-num" href="tel:+4915734347200">01573/4347200</a></div>
                            <div className="footer-attributes">E-Mail: tattoopikasso@gmail.com</div>
                            <div className="footer-attributes">Instagram: tattoo_pikasso</div>
                            <div className="footer-attributes">Facebook: Tattoo Pikasso</div>
                        </div>
                    </div>

                    <div>
                        <div id="footer-right-content">
                            <div id="follow-us">
                                folgt uns doch auf
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
