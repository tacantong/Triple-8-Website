import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import Header from '../Header.jsx';

const CONTACT_DATA = require('../../ajax/contact.json');

var imageURL = CONTACT_DATA.img;
var caption = CONTACT_DATA.caption;
var title = CONTACT_DATA.title;
var formspree = CONTACT_DATA.formspree;
var links = (
    <div>
        <i className="fa fa-youtube-play"/>
        <span>&nbsp;</span>
        <a href="http://www.youtube.com/triple8dancecompany" target="_blank">Youtube</a><br/>
        <i className="fa fa-facebook-square"/>
        <span>&nbsp;</span>
        <a href="http://www.facebook.com/Triple8DanceCompany" target="_blank">Facebook</a><br/>
        <i className="fa fa-envelope"/>
        <span>&nbsp;</span>
        <a href="mailto:triple8@princeton.edu">triple8@princeton.edu</a>
    </div>
);

const Contact = React.createClass ({
    render() {
        return (
            <div>
                <Header img={imageURL} label={caption}/>
                <div className="container">
                    <div className="row Contact-Media">
                        <div className="col-xs-2">&nbsp;</div>
                        <div className="col-xs-8">
                            <b>{title}</b><br/>
                            <hr/>
                            {links}
                        </div>
                        <div className="col-xs-2">&nbsp;</div>
                    </div>
                    <div>
                        <form action={formspree}
                              method="POST">
                            <div className = "row">
                                <div className="col-xs-2">&nbsp;</div>
                                <FormGroup controlId={'formControlsText'} className="col-xs-4">
                                    <FormControl
                                        type="text"
                                        className="Contact-Input"
                                        placeholder="Name"
                                        name="name"
                                    />
                                </FormGroup>
                                <FormGroup controlId={'formControlsEmail'} className="col-xs-4">
                                    <FormControl
                                        type="email"
                                        className="Contact-Input"
                                        placeholder="Email"
                                        name="_replyto"
                                    />
                                </FormGroup>
                                <div className="col-xs-2">&nbsp;</div>
                            </div>
                            <div className = "row">
                                <div className="col-xs-2">&nbsp;</div>
                                <FormGroup controlId={'formControlsTextarea'} className="col-xs-8">
                                    <FormControl
                                        componentClass="textarea"
                                        className="Contact-Input"
                                        placeholder="Message"
                                        name="message"
                                    />
                                </FormGroup>
                                <div className="col-xs-2">&nbsp;</div>
                            </div>
                            <div className = "row">
                                <div className="col-xs-8">&nbsp;</div>
                                <div className="col-xs-2">
                                    <div className="row">
                                    <Button type="submit" className="col-xs-11 Contact-Button" bsSize="large">
                                        Contact Us
                                    </Button>
                                        </div>
                                </div>
                                <div className="col-xs-2">&nbsp;</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

export default Contact;