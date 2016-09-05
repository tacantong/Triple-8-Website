import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Holic = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/Q7mewPYYDJ0?list=PL449B8F743B778A47';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.AWAKENING} className="Show-Link">
                {'Previous Show: Awakening'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.FLASHBACK} className="Show-Link">
                {'Next Show: Flashback'}
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

export default Holic;