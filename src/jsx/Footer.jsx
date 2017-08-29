import React from 'react';

const Footer = React.createClass({
    _renderIcon(href, faClass) {
        return (
            <a href={href} target='_blank' className="footer-link">
                <i className={"footer-link-img " + faClass}/>
            </a>
        );
    },

    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-icons footer-section">
                        {this._renderIcon('https://www.facebook.com/Triple8DanceCompany', "fa fa-facebook")}
                        {this._renderIcon('https://twitter.com/triple8dance', "fa fa-twitter")}
                        {this._renderIcon('http://www.youtube.com/triple8dancecompany', "fa fa-youtube")}
                    </div>
                    <div className="footer-copyright footer-section">
                        COPYRIGHT &copy; TRIPLE 8 DANCE COMPANY 2017
                    </div>
                    <div className="footer-message footer-section">
                        TRIPLE WHAAAT?!
                    </div>
                </div>
            </footer>
        );
    }
});

export default Footer;