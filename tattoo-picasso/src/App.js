import React from 'react';
import './App.css';

/*Components*/
import NavBar from './Components/NavBar/NavBar.js';
import CarouselOne from './Components/Carousel/CarouselOne.js';
import CarouselThree from './Components/Carousel/CarouselThree.js';
import CEO from './Components/CEO/CEO.js';
import Footer from './Components/Footer/Footer';
import AllArtists from './Components/Aritsts/AllArtists';
import GoogleMaps from './Components/googlemaps/GoogleMaps.js';
import ArtGallery from './Components/ArtGallery/ArtGallery';

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div id="whole-body">
                <NavBar />

                <div id="carousel-scroll" style={{ height: "130px" }} />
                
                <CarouselOne />
                <CarouselThree />

                <div id="carousel-ceo-spacer"/>
                
                <div id="ceo-scroll"></div>
                <CEO />

                {/*<div id="allartists-scroll" style={{ height: "150px" }} />

                <AllArtists />

                <div style={{ height: "250px" }} />
                
                <div id="artgallery-scroll"></div>
                <ArtGallery />*/}

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
