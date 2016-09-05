import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Unconditional = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/tSZED5wR7RI?list=PLA9F9B73DE017EF37';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.HIDDEN_KISSES} className="Show-Link">
                {'Previous Show: Hidden Kisses'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.PHASES} className="Show-Link">
                {'Next Show: Phases'}
            </Link>
        );

        return (
            <div className="container">
                <Header img={image}/>
                <div className="video-container row">
                    <iframe className="iFrame-Playlist" src={source} height="100%" frameBorder="0" allowFullScreen></iframe>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        {prevShow}
                    </div>
                    <div className="col-xs-3 col-xs-offset-6 Next-Show">
                        {nextShow}
                    </div>
                </div>
            </div>
        );
    }
});

export default Unconditional;