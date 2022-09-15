import React from 'react';
import './NavBar.css';
/*import { Link } from 'react-scroll';*/

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

function NavBar() {
    return (
        <div id="whole-navbar">

            <div className="side-navbar">
                <div id="left-side-navbar">
                    <div className="navbar-text">
                        Reiter 1
                    </div>
                    <div className="navbar-text">
                        Reiter 2 
                    </div>
                </div>
                
            </div>

            <div id="middle-side-navbar">
                <img id="logo-navbar" src={tattooPicassoLogo} alt="logo" />
            </div>

            <div className="side-navbar">
                <div id="right-side-navbar">
                    <div className="navbar-text">
                        Reiter 3
                    </div>
                    <div className="navbar-text">
                        Reiter 4
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default NavBar;
