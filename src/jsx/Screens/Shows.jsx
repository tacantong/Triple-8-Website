import React from 'react';
import {Link} from 'react-router';
import Header from '../Header.jsx';

const Shows = React.createClass ({

    render() {

        var videoURL = this.props.route.video;
        var imageURL = this.props.route.image;
        var prevShow = (
            this.props.route.prevShow ?
            (<Link to={this.props.route.prevShow.key} className="Show-Link">
                {'Previous Show: ' + this.props.route.prevShow.name}
            </Link>) :
            (<div/>)
        );
        var nextShow = (
            this.props.route.nextShow ?
            (<Link to={this.props.route.nextShow.key} className="Show-Link">
                {'Next Show: ' + this.props.route.nextShow.name}
                {'Next Show: ' + this.props.route.nextShow.name}
            </Link>) :
            (<div/>)
        );

        return (
            <div className="container">
                <Header img={imageURL}/>
                <div className="video-container row">
                    <iframe className="iFrame-Playlist" src={videoURL} height="100%" frameBorder="0" allowFullScreen></iframe>
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

export default Shows;