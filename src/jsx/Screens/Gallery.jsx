import React from 'react';
import Gallery from 'react-photo-gallery';
import {Nav, NavItem} from 'react-bootstrap';

const GALLERY_DATA = require('../../ajax/gallery.json');

var shows = Object.keys(GALLERY_DATA);

const ImageGallery = React.createClass ({
    getInitialState() {
      return({
          show: shows[0],
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
                    {
                        shows.map(function(show) {
                            var obj = GALLERY_DATA[show];
                            return (
                                <NavItem eventKey={show}>{obj.year + " " + obj.title}</NavItem>
                            );
                        })
                    }
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