import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import img01 from '../../assets/images/img01.jpg';
import img02 from '../../assets/images/img02.jpg'
import img03 from '../../assets/images/img03.jpg'
import './index.css'




const Header = () => {
    return (
        <div>
            <Carousel className="carousel1">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img01}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img02}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img03}
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="description">
                <h1>Welcome to the Wild Code School</h1>


                <h2>THE WILD CODE SCHOOL, WHAT IS IT?</h2>

                <p>The Wild Code School offers a new training system,
                   in a warm and friendly atmosphere,
                   with a learning to practice: in 5 months,
                   students realize projects with real customers,
                   the static site to the dynamic application.
                   No more classrooms with well-aligned tables,
                   exit the theory hours without concrete application with the Wild Code School! Students,
                   selected on their motivation,
                   creativity, autonomy and passion,
                   are invited to leave their shoes at the entrance and sit around a table or on a sofa to learn the code while helping
                   each other and sharing their knowledge and experiences.
                   In addition to its alternative educational methods, the Wild Code School stands out as the school of French Tech and
                   a start-up that wants to be a digital incubator.
                   It is notably at the origin of numerous initiatives on the territory and organizer of events which aim to open the
                   digital world to the general public.
                </p>
            </div>
        </div>
    );

};

export default Header;