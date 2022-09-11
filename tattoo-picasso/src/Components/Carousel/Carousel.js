import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from './CarouselImages/Unbenannt.png';

import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
    <img src={Image} onDragStart={handleDragStart} role="presentation" />,
    <img src={Image} onDragStart={handleDragStart} role="presentation" />,
    <img src={Image} onDragStart={handleDragStart} role="presentation" />,
];

function Carousel() {
    return (
        <AliceCarousel controlsStrategy="responsive" animationEasingFunction="ease-in-out" mouseTracking="true" infinite="true" animationType="ease" autoPlayStrategy="all" autoPlay="true" autoPlayInterval="1000" mouseTracking items={items} />
    );
}

export default Carousel;