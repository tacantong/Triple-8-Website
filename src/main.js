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

import INK from './jsx/Screens/Shows/2016 INK.jsx';
import FORTUNE from './jsx/Screens/Shows/2015 Fortune.jsx';
import D8TE_NIGHT from './jsx/Screens/Shows/2014 D8te Night.jsx';
import FLASHBACK from './jsx/Screens/Shows/2013 Flashback.jsx';
import HOLIC from './jsx/Screens/Shows/2012 Holic.jsx';
import AWAKENING from './jsx/Screens/Shows/2011 Awakening.jsx';
import PHASES from './jsx/Screens/Shows/2010 Phases.jsx';
import UNCONDITIONAL from './jsx/Screens/Shows/2009 Unconditional.jsx';
import HIDDEN_KISSES from './jsx/Screens/Shows/2008 Hidden Kisses.jsx';
import SILK_N_SPICE from './jsx/Screens/Shows/2007 Silk n Spice.jsx';

// ReactDOM.render(
//     <App/>,
//     document.getElementById('app'));

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={SCREEN.HOME} component={App}>
            <IndexRoute component={Home}/>
            <Route path={SCREEN.ABOUT} component={About}/>
            <Route path={SCREEN.COMPANY} component={Company}/>
            <Route path={SCREEN.BOARD} component={Board}/>
            <Route path={SCREEN.FAQ} component={FAQ}/>
            <Route path={SCREEN.CONTACT} component={Contact}/>
            <Route path={SCREEN.GALLERY} component={Gallery}/>
            <Route path={SCREEN.SHOW.INK} component={INK}/>
            <Route path={SCREEN.SHOW.FORTUNE} component={FORTUNE}/>
            <Route path={SCREEN.SHOW.D8TE_NIGHT} component={D8TE_NIGHT}/>
            <Route path={SCREEN.SHOW.FLASHBACK} component={FLASHBACK}/>
            <Route path={SCREEN.SHOW.HOLIC} component={HOLIC}/>
            <Route path={SCREEN.SHOW.AWAKENING} component={AWAKENING}/>
            <Route path={SCREEN.SHOW.PHASES} component={PHASES}/>
            <Route path={SCREEN.SHOW.UNCONDITIONAL} component={UNCONDITIONAL}/>
            <Route path={SCREEN.SHOW.HIDDEN_KISSES} component={HIDDEN_KISSES}/>
            <Route path={SCREEN.SHOW.SILK_N_SPICE} component={SILK_N_SPICE}/>
        </Route>
    </Router>,
document.getElementById('app'));