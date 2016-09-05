import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Awakening = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/FZXg3VXU8PM?list=PL69165D23E5E67855';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.PHASES} className="Show-Link">
                {'Previous Show: Phases'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.HOLIC} className="Show-Link">
                {'Next Show: -Holic'}
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

export default Awakening;