import React from 'react';
import {OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import Header from '../Header.jsx';
var VIDEO_LIST = [
    'https://www.youtube.com/embed/JHDLLZtxzaI',
    'https://www.youtube.com/embed/XlBRcPP5BP8',
    'https://www.youtube.com/embed/Sv6R-on0rbA',
    'https://www.youtube.com/embed/4FdIv4cTbz4',
    'https://www.youtube.com/embed/ebucX2-Wsxw',
    'https://www.youtube.com/embed/nt3eojCRMWg',
    'https://www.youtube.com/embed/NMpOs-q-vWk',
    'https://www.youtube.com/embed/MZEiFz_sH38',
    'https://www.youtube.com/embed/Tpa0BkFnY2E',
    'https://www.youtube.com/embed/tNYqbVO_WS4',
    'https://www.youtube.com/embed/pxxOuXCuvyE',
    'https://www.youtube.com/embed/AKC8hlKqJwg',
    'https://www.youtube.com/embed/VlJ21x8Age4',
    'https://www.youtube.com/embed/s1VKZSxznjM',
    'https://www.youtube.com/embed/fS5OYXts10k',
    'https://www.youtube.com/embed/lwyjKYOfHcY',
    'https://www.youtube.com/embed/gnlTL6_Lj1M',
    'https://www.youtube.com/embed/Bxb8xrARaEQ',
    'https://www.youtube.com/embed/EOPdOwzAKlo',
    'https://www.youtube.com/embed/NMpOs-q-vWk',
    'https://www.youtube.com/embed/0oNNZpoIbH0',
    'https://www.youtube.com/embed/J0TPCOcEo-4',
    'https://www.youtube.com/embed/-KiQcIq6EgM',
    'https://www.youtube.com/embed/oExL2IFWcmI',
    'https://www.youtube.com/embed/sewoNNtVSh4',
    'https://www.youtube.com/embed/HhYcwrSV0oU',
    'https://www.youtube.com/embed/jEHvFe7R6BE'
];

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
        var fb = (
            <a href="http://www.facebook.com/Triple8DanceCompany" target="_blank">Facebook</a>
        );
        var youtube = (
            <a href="http://www.youtube.com/triple8dancecompany" target="_blank">Youtube</a>
        );
        var blurb = (<span>Founded in 2003, Triple 8 Dance company is Princeton University's premier East Asian dance company. Our mission is to use dance as an artistic means of exposing East Asian culture to the Princeton community. Over the years, we have grown to serve many purposes here on campus. To members of the East Asian community, we show them a piece of home. To the non-East Asian community, we serve as exposure to unfamiliar cultures. To non-dancers, we make dance accessible to beginners. To our members, we are a family. Triple 8 fosters the creativity and growth of its members to become dancers who can choreograph pieces and hold workshops. Our namesake "888" symbolizes a triple promise of luck and prosperity. Check us out on {fb} and on {youtube}.</span>);

        var tooltip = (<Tooltip id="tooltip"><strong>Get a new set of videos!</strong></Tooltip>);

        return (
            <div>
                <Header img="./src/images/Headers/squad3.png" label="Triple What?!"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 About-Title">
                            History & Mission Statement
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            {blurb}
                        </div>
                    </div>

                    <div className="About-Video-Header">
                        Check out some of our videos to get a taste of how we dance!&nbsp;
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