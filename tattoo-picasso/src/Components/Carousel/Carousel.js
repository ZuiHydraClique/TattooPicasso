import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image1 from './CarouselImages/Unbenannt1.png';
import Image2 from './CarouselImages/Unbenannt2.png';
import Image3 from './CarouselImages/Unbenannt3.png';
import Image4 from './CarouselImages/Unbenannt4.png';
import Image5 from './CarouselImages/Unbenannt5.png';
import Image6 from './CarouselImages/Unbenannt6.png';
import Image7 from './CarouselImages/Unbenannt7.png';

import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img id="carousel-image" src={Image1} alt="1" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image2} alt="2" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image3} alt="3" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image4} alt="4" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image5} alt="5" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image6} alt="6" onDragStart={handleDragStart} role="presentation" />,
    <img id="carousel-image" src={Image7} alt="7" onDragStart={handleDragStart} role="presentation" />
];

function Carousel() {
    return (
        <AliceCarousel
            controlsStrategy="responsive"
            animationEasingFunction="ease-in-out"
            mouseTracking="true" infinite="true"
            animationType="ease" autoPlayStrategy="all"
            autoPlay="true" autoPlayInterval="5000" items={items}/>
    );
}

export default Carousel;