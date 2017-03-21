import React from 'react';
import Header from '../Header.jsx';

const BOARD_DATA = require('../../ajax/board.json');
var imageURL = BOARD_DATA.img;
var caption = BOARD_DATA.caption
var title = BOARD_DATA.title;
var officers = BOARD_DATA.officers;

const Board = React.createClass ({
    render() {
        return (
            <div>
                <Header img={imageURL} label={caption}/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 Board-Title">
                            {title}
                        </div>
                    </div>
                    {
                        officers.map(function(obj) {
                            return (
                                <div className="row Board-Text">
                                    <div className="col-xs-4">
                                        {obj.position}
                                    </div>
                                    <div className="col-xs-4">
                                        {obj.name}
                                    </div>
                                    <div className="col-xs-4 Board-Email">
                                        <a href={"mailto:"+obj.email}>{obj.email}</a>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
});

export default Board;