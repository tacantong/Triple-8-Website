import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Phases = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/riDcPmxIX84?list=PLF3F7906D4B5B6126';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.UNCONDITIONAL} className="Show-Link">
                {'Previous Show: Unconditional'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.AWAKENING} className="Show-Link">
                {'Next Show: Awakening'}
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

export default Phases;