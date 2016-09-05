import React from 'react';
import {Link} from 'react-router';
import Header from '../../Header.jsx';
import SCREEN from '../../../js/Screen';

const Silk_n_Spice = React.createClass ({
    render() {
        var source = 'https://www.youtube.com/embed/PxU3O10rzRk?list=PLB9F686BFEB21B282';
        var image = undefined;
        var prevShow = (
            <div/>
        );
        var nextShow = (
            <Link to={SCREEN.SHOW.HIDDEN_KISSES} className="Show-Link">
                {'Next Show: Hidden Kisses'}
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

export default Silk_n_Spice;