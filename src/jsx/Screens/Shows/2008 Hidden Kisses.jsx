import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Hidden_Kisses = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/mCLwy3wqOAU?list=PLBC41601B7186C5B8';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.SILK_N_SPICE} className="Show-Link">
                {'Previous Show: Silk n\' Spice'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.UNCONDITIONAL} className="Show-Link">
                {'Next Show: Unconditional'}
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

export default Hidden_Kisses;