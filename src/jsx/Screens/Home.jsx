import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router';
import SCREEN from '../../js/Screen.js';

const Home = React.createClass ({
    // propTypes: {
    //     onScreenChange: React.PropTypes.func
    // },

    render() {
        var blurb = "Welcome to Triple 8 Dance Company's website! We are Princeton University's premier East Asian dance company. Known for our diversity of styles, we choreograph and perform traditional Asian dance, lyrical, contemporary, hip hop, k-pop, and martial arts. We have a close-knit family of members with different backgrounds, some of whom had no previous dance experience and many of whom are members of other dance groups on and off campus.";

        return (
            <div>
                <div>
                    <Carousel interval={3000} pauseOnHover={false}>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/1.png"/>
                            <Carousel.Caption className="Carousel-Caption">
                                <h1>Triple 8 Dance Company</h1>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/2.png"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/3.png"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/4.png"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/5.png"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src="./src/images/Headers/Carousel/6.png"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="container">
                    <div className="row Announcement-Wrapper">
                        <div className="Announcement-Title">
                            Welcome Class of 2020!
                        </div>
                        <div className="Announcement-Text">
                            If you're looking at trying something new or want to improve your dance ability and repertoire check out Triple 8, Princeton's premier East Asian dance company!
                        </div>
                    </div>
                    <div className="row">
                        <div className="Home-Blurb col-xs-12">
                            {blurb}
                        </div>
                    </div>
                    <div className="row Home-Info">
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
                            <div className="Home-Image-Wrapper">
                                <Link to={SCREEN.ABOUT}>
                                    <img
                                        src="./src/images/Home/1.png"
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                About
                            </div>
                            <div className="Home-Info-Text">
                                Founded in 2003, Triple 8 performs cross-cultural choreography, blending a myriad of different styles together. Click the image for more info!
                            </div>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
                            <div className="Home-Image-Wrapper">
                                <Link to={SCREEN.COMPANY}>
                                    <img
                                        src="./src/images/Home/2.png"
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                Company
                            </div>
                            <div className="Home-Info-Text">
                                Our company is made up of a close-knit group of dancers both with years of dance experience and no dance experience prior to joining. Check out our talented dancers!
                            </div>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
                            <div className="Home-Image-Wrapper">
                                <Link to={SCREEN.FAQ}>
                                    <img
                                        src="./src/images/Home/3.png"
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                Audition
                            </div>
                            <div className="Home-Info-Text">
                                We hold auditions every Fall. Take a look at our FAQ for more info on how to join the Triple 8 family!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;