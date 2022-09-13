import React from 'react';
import './App.css';

/*Components*/
import NavBar from './Components/NavBar/NavBar.js';
import Carousel from './Components/Carousel/Carousel.js';
import CEO from './Components/CEO/CEO.js';

function App() {
    return (
        <div style={{
            backgroundColor: "black",
            paddingBottom: "3000px",
            display: "flex",
            flexDirection: "column"
        }}>

            <NavBar />

            <div style={{ height: "80px" }} />

            <Carousel />

            <div style={{ height: "400px" }} />

            <CEO />

        </div>
  );
}

export default App;
