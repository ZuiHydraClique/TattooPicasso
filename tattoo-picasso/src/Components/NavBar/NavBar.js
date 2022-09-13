import React from 'react';
import './NavBar.css';
/*import { Link } from 'react-scroll';*/

/*Images*/
import tattooPicassoLogo from './NavbarImages/tattoo-picasso-logo.png';

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function NavBar() {
    return (
        <div id="whole-navbar">

            <div id="left-side-navbar">
                <img id="logo-navbar" src={tattooPicassoLogo} alt="logo" />
            </div>

            <div id="navbar-content">

                <div id="middle-side-navbar">

                    <div id="navbar-registers">
                        <div className="register-item">
                            Reiter1
                        </div>
                        <div className="register-item">
                            Reiter2
                        </div>
                        <div className="register-item">
                            Reiter3
                        </div>
                    </div>

                    <div className="right-side-navbar">
                        <div className="hamburger-select" onClick={openNav}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            }}>
                            <div className="hamburger-spacer"></div>
                            <div className="hamburger-spacer"></div>
                            <div className="hamburger-spacer"></div>
                        </div>
                    </div>

                    {/*START OF HAMBURGEROVERLAY*/}
                    <div id="myNav" className="overlay">

                        <div className="closed-hamburger-select" style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-end"
                        }}>
                            <div className="hamburger-select" onClick={closeNav}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    paddingRight: "20px"
                                }}>
                                <div className="hamburger-spacer"></div>
                                <div className="hamburger-spacer"></div>
                                <div className="hamburger-spacer"></div>
                            </div>

                        </div>

                        <div className="all-hamburger-items">
                            <div className="hamburger-item">
                                Hamburger Item 1
                            </div>

                            <div className="hamburger-item">
                                Hamburger Item 2
                            </div>

                            <div className="hamburger-item">
                                Hamburger Item 3
                            </div>

                            <div className="hamburger-item">
                                Hamburger Item 4
                            </div>
                        </div>

                    </div>
                    {/*END OF HAMBURGEROVERLAY*/}

                </div>

                <div id="navbar-h-spacer"></div>

            </div>

        </div>
    );
}

export default NavBar;
