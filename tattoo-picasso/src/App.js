import React, { useEffect } from 'react';
import './App.css';

import ReactGa from 'react-ga';

/*Components*/
import NavBar from './Components/NavBar/NavBar.js';
import CarouselOne from './Components/Carousel/CarouselOne.js';
import CarouselThree from './Components/Carousel/CarouselThree.js';
import CEO from './Components/CEO/CEO.js';
import Footer from './Components/Footer/Footer';
import AllArtists from './Components/Aritsts/AllArtists';
import GoogleMaps from './Components/googlemaps/GoogleMaps.js';
import ArtGallery from './Components/ArtGallery/ArtGallery';
import TattooCloseup from './Components/Pictures/TattooCloseup';
import Gamble from './Components/Gamble/Gamble';
import Appointment from './Components/Appointment-Sektion/Appointment';
import CookieBanner from './Components/CookieBanner/CookieBanner';

function App() {

    useEffect (() => {
        ReactGa.initialize('G-39MMWJCDWV')

        ReactGa.pageview('/');
    }, [])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div id="whole-body">
                
                <CookieBanner />

                <NavBar />

                <div id="carousel-scroll" style={{ height: "130px" }} />
                

                <CarouselOne />
                <CarouselThree />

                <div id="gamble-scroll" style={{ height: "20px" }} />

                <Gamble />
                
                <div id="carousel-ceo-spacer" style={{ height: "50px" }} />
                

                <div id="ceo-scroll"></div>
                <CEO />
                
                {/*<div id="allartists-scroll" style={{ height: "150px" }} />

                <AllArtists />

                <div style={{ height: "250px" }} />
                
                <div id="artgallery-scroll"></div>
                <ArtGallery />

                <Appointment />*/}

                <div id="maps-scroll" style={{ height: "150px" }}></div>
                <GoogleMaps />

                
                <div style={{height: "200px"}}></div>
                <div id="contact-scroll"></div>
                <Footer />
                <div id="bottom-pic-container">
                    <div id="pic-under-left">
                    </div>
                    <div id="pic-under-right">
                    </div>
                </div>
            </div>
        </div>
  );
}

export default App;
