import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const INK = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/igLtZoX6CYY?list=PLL3D9fP4iNurZUdB6T5dFXBQxIMam86Kc';
        var image = './src/images/Headers/ink.png';
        var prevShow = (
            <Link to={SCREEN.SHOW.FORTUNE} className="Show-Link">
                {'Previous Show: Fortune'}
            </Link>
        );
        var nextShow = (
            <div/>
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

export default INK;