import React from 'react';
import './NavBar.css';

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

function NavBar() {
    return (
        <div id="whole-navbar">

            <div id="navbar-content">

                <div id="left-side-navbar">
                    <img id="logo-navbar" src={tattooPicassoLogo} alt="logo" />
                </div>

                <div id="middle-side-navbar">
                    <div>
                        CEO
                    </div>
                    <div>
                        Team
                    </div>
                    <div>
                        Termine
                    </div>
                </div>

                <div id="right-side-navbar">
                    <div id="hamburger-select">
                        Hamburger Select
                    </div>
                </div>

            </div>

            <div id="navbar-h-spacer"></div>

        </div>
    );
}

export default NavBar;
