import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Fortune = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/j3cQYjVmU5c?list=PLL3D9fP4iNur0EkYPpiQzYikXLsrurq-C';
        var image = './src/images/Headers/fortune.jpg';
        var prevShow = (
            <Link to={SCREEN.SHOW.D8TE_NIGHT} className="Show-Link">
                {'Previous Show: D8te Night'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.INK} className="Show-Link">
                {'Next Show: INK'}
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

export default Fortune;