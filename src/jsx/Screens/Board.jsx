import React from 'react';
import Header from '../Header.jsx';

const Board = React.createClass ({
    render() {
        return (
            <div>
                <Header img="./src/images/Headers/girls.png" label="Board Members"/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 Board-Title">
                            Officers
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            President
                        </div>
                        <div className="col-xs-4">
                            Susanna Yu '17
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:scyu@princeton.edu">scyu@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4 ">
                            Vice President
                        </div>
                        <div className="col-xs-4">
                            Edward Wang '18
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:edwardyw@princeton.edu">edwardyw@princeton.edu</a>                        </div>
                        </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Artistic Director
                        </div>
                        <div className="col-xs-4">
                            Dorothy Chen '17
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:dochen@princeton.edu ">dochen@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Assistant Artistic Director
                        </div>
                        <div className="col-xs-4">
                            Sally Hahn '19
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:yhahn@princeton.edu">yhahn@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Treasurer
                        </div>
                        <div className="col-xs-4">
                            Marsha Zhang '17
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:mrzhang@princeton.edu">mrzhang@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Publicity Chair
                        </div>
                        <div className="col-xs-4">
                            Mayee Chen '19
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:mfchen@princeton.edu">mfchen@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Publicity Chair
                        </div>
                        <div className="col-xs-4">
                            Siyu Wu '18
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:siyuwu@princeton.edu">siyuwu@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Social Chair
                        </div>
                        <div className="col-xs-4">
                            Benjamin Tso '18
                        </div>
                        <div className="col-xs-4 Board-Email">
                            <a href="mailto:btso@princeton.edu">btso@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Tech Chair
                        </div>
                        <div className="col-xs-4">
                            Brandon Zhou '17
                        </div>
                        <div className="col-xs-4">
                            <a href="mailto:brandonz@princeton.edu">brandonz@princeton.edu</a>
                        </div>
                    </div>
                    <div className="row Board-Text">
                        <div className="col-xs-4">
                            Costumes Chair
                        </div>
                        <div className="col-xs-4">
                            Maddie Clayton '17
                        </div>
                        <div className="col-xs-4">
                            <a href="mailto:mec2@princeton.edu">mec2@princeton.edu</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default Board;