import React from 'react';
import Header from '../Header.jsx';
const questions = [
    {
        q: "How do I audition?",
        a: "We hold one open audition every year early in the Fall. Just show up and dance!"
    },
    {
        q: "Do I need any dance experience?",
        a: "No! Many of our members have never danced prior to joining Triple 8."
    },
    {
        q: "What is the audition process like?",
        a: "We will teach you some of our choreography and you get to perform it in front of the company (don’t worry we’ll make sure you’re prepared)! You will learn a traditional piece and a hip hop piece along with your fellow auditionees. It is a fun, no-pressure environment, so come to auditions whether it is to join Triple 8 or learn our unique choreography!"
    },
    {
        q: "What kind of styles do you perform?",
        a: "We perform a huge variety of styles ranging from traditional East Asian to contemporary. In the past we’ve performed hip hop, lyrical, martial arts, contemporary, and a lot more."
    },
    {
        q: "How many shows do you have every year?",
        a: "We hold one show every year in February as well as Spring dance workshops and a variety of guest performances throughout the year."
    },
    {
        q: "How big of a commitment do I have to make for Triple 8?",
        a: "The minimum is a few hours every week, but beyond that it’s up to you! We have weekly company rehearsals in addition to separate rehearsal for pieces. This doesn’t include the fun social events we hold or the time you spend hanging out and getting to know your new dance fam!"
    },
    {
        q: "What is the company like?",
        a: "Triple 8 is made up a diverse group of people from all over. We are friendly, smart, sexy (and fierce). We have a very welcoming environment full of people with a passion for dancing."
    }
];

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
                <Header img="./src/images/Headers/leap.png" label="FAQ"/>
                <div className="container">
                    {items}
                    <div className="QA-Footer">
                        Can't Find Your Question?
                    </div>
                    <div className="QA-Footer-SubHeader">
                        Try contacting us at triple8@princeton.edu
                    </div>
                </div>
            </div>
        );
    }
});

export default FAQ;