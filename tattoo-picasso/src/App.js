import React from 'react';
import './App.css';

/*Components*/
import NavBar from './Components/NavBar/NavBar.js';
import Carousel from './Components/Carousel/Carousel.js';
import CEO from './Components/CEO/CEO.js';
import Footer from './Components/Footer/Footer';
import AllArtists from './Components/Aritsts/AllArtists';
import GoogleMaps from './Components/googlemaps/GoogleMaps.js';

function App() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <div id="whole-body">

            <NavBar />

            <div style={{ height: "220px" }} />

            <Carousel />

            <div style={{ height: "300px" }} />

            <CEO />

            <div style={{ height: "300px" }} />

            <AllArtists />

            <div style={{ height: "500px" }} />

            <GoogleMaps />

            <div style={{ height: "600px" }} />

            <Footer />
            </div>
        </div>
  );
}

export default App;
