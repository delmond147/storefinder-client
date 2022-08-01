import React from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className="text-light">Register your structure on FINDER</h2>
                    <p className="text-white">Are you a structure renter or agency, and wish to lease your property to thousands of potential business people or buyers</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Third slide"

                />
                <Carousel.Caption>
                    <h2 className="text-light">Search for avialable business structures anywhere around +237 CMR</h2>
                    <p className="text-white">Get a structure to run your business activities, without going through any search wahala. Just search and fine your perfect business structure.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"

                />
                <Carousel.Caption>
                    <h2 className="text-light">Your number one business structure rental solution in CMR.</h2>
                    <p className="text-white">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;