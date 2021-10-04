import React from 'react';
import { Carousel } from 'react-bootstrap';

const SliderVideo = () => {
    return (


        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://www.tutorialandexample.com/wp-content/uploads/2019/09/Computer-Network.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Blender_2.45_screenshot.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-75"
                    src="https://www.electroschematics.com/wp-content/uploads/2009/10/headphone-amplifier.gif?fit=795%2C465"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default SliderVideo;