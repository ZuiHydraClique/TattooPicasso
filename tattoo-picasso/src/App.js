import React from 'react';
import './App.css';

/*Components*/
import NavBar from './Components/NavBar/NavBar.js';
import Carousel from './Components/Carousel/Carousel.js';
import CEO from './Components/CEO/CEO.js';
import Tattowierer from './Components/Tattowierer/Tattowierer.js';
import PermMakeup from './Components/PermanentMakeup/PermMakeup.js';
import Footer from './Components/Footer/Footer';

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

            <Tattowierer />

            <div style={{ height: "300px" }} />

            <PermMakeup /> 

            <div style={{ height: "600px" }} />

            <Footer />
            </div>
        </div>
  );
}

export default App;
