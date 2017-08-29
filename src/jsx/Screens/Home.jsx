import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Link} from 'react-router';
import SCREEN from '../../js/Screen.js';

const HOME_DATA = require('../../ajax/home.json');

var carousel = HOME_DATA.carousel;
var blurb = HOME_DATA.blurb;
var announcement = HOME_DATA.announcement;
var tiles = HOME_DATA.tiles;

const Home = React.createClass ({

    render() {
        return (
            <div>
                <div>
                    <Carousel interval={3000} pauseOnHover={false}>
                        {
                            carousel.map(function(obj, index) {
                                return (
                                    <Carousel.Item key={index}>
                                        <img src={obj.img}/>
                                        <Carousel.Caption className="Carousel-Caption">
                                            <h1>{obj.caption}</h1>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                );
                            })
                        }
                    </Carousel>
                </div>
                <div className="container">
                    <div className="row Announcement-Wrapper">
                        <div className="Announcement-Title">
                            {announcement.title}
                        </div>
                        <div className="Announcement-Text">
                            {announcement.description}
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
                                        src={tiles.about.img}
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                {tiles.about.title}
                            </div>
                            <div className="Home-Info-Text">
                                {tiles.about.description}
                            </div>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
                            <div className="Home-Image-Wrapper">
                                <Link to={SCREEN.COMPANY}>
                                    <img
                                        src={tiles.company.img}
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                {tiles.company.title}
                            </div>
                            <div className="Home-Info-Text">
                                {tiles.company.description}
                            </div>
                        </div>
                        <div className="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0">
                            <div className="Home-Image-Wrapper">
                                <Link to={SCREEN.FAQ}>
                                    <img
                                        src={tiles.faq.img}
                                        className="img-responsive img-rounded Home-Info-Image"
                                    />
                                </Link>
                            </div>
                            <div className="Home-Info-Title">
                                {tiles.faq.title}
                            </div>
                            <div className="Home-Info-Text">
                                {tiles.faq.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Home;