import React from 'react';
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import Header from '../Header.jsx';

const ABOUT_DATA = require('../../ajax/about.json');

var fb = (
    <a href="http://www.facebook.com/Triple8DanceCompany" target="_blank">Facebook</a>
);
var youtube = (
    <a href="http://www.youtube.com/triple8dancecompany" target="_blank">Youtube</a>
);
var image = ABOUT_DATA.img;
var caption = ABOUT_DATA.caption;
var title = ABOUT_DATA.title;
var blurb = (<span>{ABOUT_DATA.blurb} Check us out on {fb} and on {youtube}.</span>);
var tooltip = (<Tooltip id="tooltip"><strong>{ABOUT_DATA.tooltip}</strong></Tooltip>);
var videoTitle = ABOUT_DATA.videoTitle;
var VIDEO_LIST = ABOUT_DATA.videos;

const About = React.createClass ({
    getInitialState() {
        const VIDS_TO_DISPLAY = 3;

        var vids = new Array(VIDS_TO_DISPLAY);
        var n = VIDS_TO_DISPLAY;

        while (n > 0) {
            var x = Math.floor(Math.random() * VIDEO_LIST.length);
            if (vids.indexOf(VIDEO_LIST[x]) > -1)
                continue;
            vids[n - 1] = VIDEO_LIST[x];
            n--;
        }
        return {
          videos: vids
        };
    },

    _refreshVideos() {
        const VIDS_TO_DISPLAY = 3;

        var vids = new Array(VIDS_TO_DISPLAY);
        var n = VIDS_TO_DISPLAY;

        while (n > 0) {
            var x = Math.floor(Math.random() * VIDEO_LIST.length);
            if (vids.indexOf(VIDEO_LIST[x]) > -1)
                continue;
            vids[n-1] = VIDEO_LIST[x];
            n--;
        }
        this.setState({videos: vids});
    },

    _renderFeaturedVideo() {
        return this.state.videos.map(function(vid, i) {
            return (
                <div className="col-xs-12 col-sm-4 About-Video-Wrapper" key={i}>
                    <div className="About-Video">
                        <iframe className="iFrame-Playlist" src={vid} height="100%" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            );
        });
    },

    render() {

        return (
            <div>
                <Header img={image} label={caption}/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 About-Title">
                            {title}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            {blurb}
                        </div>
                    </div>

                    <div className="About-Video-Header">
                        {videoTitle}&nbsp;
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <i className="fa fa-refresh About-Refresh" onClick={this._refreshVideos}/>
                        </OverlayTrigger>
                    </div>
                    <div className="row">
                        {this._renderFeaturedVideo()}
                    </div>
                </div>
            </div>
        );
    }
});

export default About;