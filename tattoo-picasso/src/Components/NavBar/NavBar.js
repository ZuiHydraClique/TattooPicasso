import React from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

function NavBar() {

    return (
        <div className="whole-navbar">

            <div className="side-navbar pic-left-up">
                <div className="left-side-navbar">
                    <Link className="navbar-text" to="team-scroll" spy={true} smooth={true}>
                        <div>
                            Team
                        </div>
                    </Link>
                </div>
            </div>

            <Link id="middle-side-navbar" to="carousel-scroll" spy={true} smooth={true}>
                <img className="logo-navbar" src={tattooPicassoLogo} alt="logo" />
            </Link>

            <div  className="side-navbar pic-right-up">
                <div className="right-side-navbar">                   
                    <Link className="navbar-text" to="contact-scroll" spy={true} smooth={true}>
                        <div id="kontakt-text">
                            Kontakt
                        </div>
                    </Link>
                </div>
                
            </div>

        </div>
    );
}

export default NavBar;