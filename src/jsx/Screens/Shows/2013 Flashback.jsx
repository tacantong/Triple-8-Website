import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Flashback = React.createClass({
    render() {
        var source = 'https://www.youtube.com/embed/9lgL-ZaJnCY?list=PLL3D9fP4iNupCBP54z28YAbun0IT7aax6';
        var image = undefined;
        var prevShow = (
            <Link to={SCREEN.SHOW.HOLIC} className="Show-Link">
                {'Previous Show: -Holic'}
            </Link>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.D8TE_NIGHT} className="Show-Link">
                {'Next Show: D8te Night'}
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

export default Flashback;