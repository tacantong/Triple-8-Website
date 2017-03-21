import React from 'react';
import Header from '../Header.jsx';

const FAQ_DATA = require('../../ajax/faq.json');

var imageURL = FAQ_DATA.img;
var caption = FAQ_DATA.caption;
var questions = FAQ_DATA.questions;
var footerTitle = FAQ_DATA.footerTitle;
var footerDescription = FAQ_DATA.footerDescription;

const FAQ = React.createClass ({
    render() {
        var items = questions.map(function(qa, i) {
            return (
                <div className="row itemRow" key={i}>
                    <div className="Q-Item">
                        <div>Q.&nbsp;</div>
                        <div>
                            {qa.q}
                        </div>
                    </div>
                    <div className="A-Item">
                        <div>A.&nbsp;</div>
                        <div>
                            {qa.a}
                        </div>
                    </div>
                    <div className="FAQ-Divider"/>
                </div>
            );
        });

        return (
            <div>
                <Header img={imageURL} label={caption}/>
                <div className="container">
                    {items}
                    <div className="QA-Footer">
                        {footerTitle}
                    </div>
                    <div className="QA-Footer-SubHeader">
                        {footerDescription}
                    </div>
                </div>
            </div>
        );
    }
});

export default FAQ;