import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import wildCode3 from './../../image/wildCode3.jpg';
import wildCode2 from './../../image/wildCode2.jpg';
import wildCode from './../../image/wildCode.jpg';
import './index.css'




const Header = () => {
    return (
        <Carousel className="carousel1">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wildCode3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wildCode2}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={wildCode}
                    alt="Third slide"
                />

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );

};

export default Header;