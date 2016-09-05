import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const D8te_Night = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/dgXcqKGFltw?list=PLL3D9fP4iNuqRDNw5-3uoIvvAdzBk6cOF';
        var image = './src/images/Headers/d8te.jpg';
        var prevShow = (
            <Link to={SCREEN.SHOW.FLASHBACK} className="Show-Link">
                {'Previous Show: Flashback'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.FORTUNE} className="Show-Link">
                {'Next Show: Fortune'}
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

export default D8te_Night;