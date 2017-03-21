import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './jsx/App.jsx';

import SCREEN from './js/Screen.js';
import Home from './jsx/Screens/Home.jsx';
import About from './jsx/Screens/About.jsx';
import Company from './jsx/Screens/Company.jsx';
import Board from './jsx/Screens/Board.jsx';
import FAQ from './jsx/Screens/Faq.jsx';
import Contact from './jsx/Screens/Contact.jsx';
import Gallery from './jsx/Screens/Gallery.jsx';

import Shows from './jsx/Screens/Shows.jsx';
const SHOW_DATA = require('./ajax/shows.json');

var showRoutes = Object.keys(SHOW_DATA).map(function(key) {
    var obj = SHOW_DATA[key];
    return  (
        <Route path={key} key={key} video={obj.video} image={obj.image} prevShow={obj.prevShow} nextShow={obj.nextShow} component={Shows}/>
    );
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={SCREEN.HOME} component={App}>
            <IndexRoute component={Home} key={SCREEN.HOME}/>
            <Route path={SCREEN.ABOUT} key={SCREEN.ABOUT} component={About}/>
            <Route path={SCREEN.COMPANY} key={SCREEN.COMPANY} component={Company}/>
            <Route path={SCREEN.BOARD} key={SCREEN.BOARD} component={Board}/>
            <Route path={SCREEN.FAQ} key={SCREEN.FAQ} component={FAQ}/>
            <Route path={SCREEN.CONTACT} key={SCREEN.CONTACT} component={Contact}/>
            <Route path={SCREEN.GALLERY} key={SCREEN.GALLERY} component={Gallery}/>
            {showRoutes}
        </Route>
    </Router>,
document.getElementById('app'));