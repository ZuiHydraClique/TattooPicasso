import React from 'react';
import { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

import cloudsLeftGif from './NavbarImages/moon-left.gif';
import cloudsLeft from './NavbarImages/moon-left.png';

import cloudsRightGif from './NavbarImages/moon-right.gif';
import cloudsRight from './NavbarImages/moon-right.png'
;
import onlyMoon from './NavbarImages/moon-only.png';


function NavBar() {

    const [navbar, setNavbar] = useState(false);

    const changeSize = () => {
        if(window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeSize);

    return (
        <div className={navbar ? 'whole-navbar active' : 'whole-navbar'}>

            <div className={navbar ? 'side-navbar pic-left-up side-active' : 'side-navbar pic-left-up'}>
                {/*<img className={navbar ? 'cloud-image image-active' : 'cloud-image'} src={cloudsLeftGif} alt=""/>
                <img className={navbar ? 'cloud-image-below image-active' : 'cloud-image-below'} src={cloudsLeft} alt=""/>*/}
                <div className={navbar ? 'left-side-navbar activeLeft' : 'left-side-navbar'}>
                     
                    <Link className="navbar-text" to="team-scroll" spy={true} smooth={true}>
                        <div>
                            Team
                        </div>
                    </Link>
                </div>
            </div>

            <Link id="middle-side-navbar" to="carousel-scroll" spy={true} smooth={true}>
                <img className={navbar ? 'logo-navbar active-logo' : 'logo-navbar'} src={tattooPicassoLogo} alt="logo" />
            </Link>

            <div  className={navbar ? 'side-navbar pic-right-up side-active' : 'side-navbar pic-right-up'}>
                {/*<img className={navbar ? 'cloud-image image-active' : 'cloud-image'} src={cloudsRightGif} alt=""/>
                <img className={navbar ? 'cloud-image-below image-active' : 'cloud-image-below'} src={cloudsRight} alt=""/>*/}
                <div className={navbar ? 'right-side-navbar activeRight' : 'right-side-navbar'}>                   
                     {/*<Link className="navbar-text" to="maps-scroll" spy={true} smooth={true}>
                        <div>
                            Standort
                        </div>
                    </Link>*/}
                    <Link className="navbar-text" to="contact-scroll" spy={true} smooth={true}>
                        <div>
                            Kontakt
                        </div>
                    </Link>
                    
                </div>
                
            </div>

        </div>
    );
}

export default NavBar;