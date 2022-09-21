import React from 'react';
import { useState } from 'react';
import './NavBar.css';
/*import { Link } from 'react-scroll';*/

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

function NavBar() {

    const [navbar, setNavbar] = useState(false);

    const changeSize = () => {
        if(window.scrollY >= 200) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    window.addEventListener('scroll', changeSize);

    return (
        <div className={navbar ? 'whole-navbar active' : 'whole-navbar'}>

            <div className="side-navbar">
                <div className={navbar ? 'left-side-navbar activeLeft' : 'left-side-navbar'}>
                    <div className="navbar-text">
                        Reiter 1
                    </div>
                    <div className="navbar-text">
                        Reiter 2 
                    </div>
                </div>
                
            </div>

            <div id="middle-side-navbar">
                <img className={navbar ? 'logo-navbar activeL' : 'logo-navbar'} src={tattooPicassoLogo} alt="logo" />
            </div>

            <div className="side-navbar">
                <div className={navbar ? 'right-side-navbar activeRight' : 'right-side-navbar'}>
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
