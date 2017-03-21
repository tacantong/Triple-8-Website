import React from 'react';
import Gallery from 'react-photo-gallery';
import {Nav, NavItem} from 'react-bootstrap';
import SHOWS from '../../js/Show.js';

const GALLERY_DATA = require('../../ajax/gallery.json');

const ImageGallery = React.createClass ({
    getInitialState() {
      return({
          show: SHOWS.INK,
          photos: GALLERY_DATA
      });
    },

    _changeShows(show) {
        this.setState({
            reset: true,
            show: show
        }, () => this.setState({reset: false}));
    },

    _renderGallery(photos) {
        return (
            this.state.reset ? <div/> :
            <Gallery
                photos={photos}
                lightboxShowImageCount={true}
            />
        );
    },

    render() {
        var show = this.state.photos[this.state.show];
        return (
            <div className="container">
                <Nav
                    bsStyle="pills"
                    activeKey={this.state.show}
                    onSelect={this._changeShows}
                    className="Gallery-Tab"
                >
                    <NavItem eventKey={SHOWS.INK}>2016 INK</NavItem>
                    <NavItem eventKey={SHOWS.FORTUNE}>2015 Fortune</NavItem>
                    <NavItem eventKey={SHOWS.D8TE_NIGHT}>2014 D8te Night</NavItem>
                    <NavItem eventKey={SHOWS.FLASHBACK}>2013 Flashback</NavItem>
                    <NavItem eventKey={SHOWS.HOLIC}>2012 -Holic</NavItem>
                    <NavItem eventKey={SHOWS.AWAKENING}>2011 Awakening</NavItem>
                    <NavItem eventKey={SHOWS.PHASES}>2010 Phases</NavItem>
                    <NavItem eventKey={SHOWS.UNCONDITIONAL}>2009 Unconditional</NavItem>
                    <NavItem eventKey={SHOWS.HIDDEN_KISSES}>2008 Hidden Kisses</NavItem>
                </Nav>
                <div className="Gallery-Header col-xs-12">
                    <div className="Gallery-Title">
                        {show ? show.title : ''}
                    </div>
                    {show && show.photographer ?
                        (<div className="Gallery-Sub-Title">
                            Photo Credit: <a href={show.link} target="_blank">{show.photographer}</a>
                        </div>) :
                        <div className="Gallery=Sub-Title">&nbsp;</div>}
                </div>
                {this._renderGallery(show ? show.photos : [])}
            </div>
        );
    }
});

export default ImageGallery;