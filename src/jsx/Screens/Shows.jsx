/**
 * DEPRECATED FILES:
 *
 * It was originally designed as a all in one for show vids all shows were controlled by the prop
 * It was switched in favour of individual components for shows because of React-Router
 */

import React from 'react';
import Header from '../Header.jsx';
import SHOWS from '../../js/Show';
import SCREEN from '../../js/Screen';

var LINKS = {
    INK: {
        vid: "https://www.youtube.com/embed/igLtZoX6CYY?list=PLL3D9fP4iNurZUdB6T5dFXBQxIMam86Kc",
        img: '../../images/Headers/ink.png',
        nextShow: undefined,
        nextShowLabel: undefined,
        prevShow: SHOWS.FORTUNE,
        prevShowLabel: 'Fortune'
    },
    FORTUNE: {
        vid: "https://www.youtube.com/embed/j3cQYjVmU5c?list=PLL3D9fP4iNur0EkYPpiQzYikXLsrurq-C",
        img: '../../images/Headers/fortune.jpg',
        nextShow: SHOWS.INK,
        nextShowLabel: 'INK',
        prevShow: SHOWS.D8TE_NIGHT,
        prevShowLabel: 'D8te Night'
    },
    D8TE_NIGHT: {
        vid: "https://www.youtube.com/embed/dgXcqKGFltw?list=PLL3D9fP4iNuqRDNw5-3uoIvvAdzBk6cOF",
        img: '../../images/Headers/d8te.jpg',
        nextShow: SHOWS.FORTUNE,
        nextShowLabel: 'Fortune',
        prevShow: SHOWS.FLASHBACK,
        prevShowLabel: 'Flashback'
    },
    FLASHBACK: {
        vid: "https://www.youtube.com/embed/9lgL-ZaJnCY?list=PLL3D9fP4iNupCBP54z28YAbun0IT7aax6",
        nextShow: SHOWS.D8TE_NIGHT,
        nextShowLabel: 'D8te Night',
        prevShow: SHOWS.HOLIC,
        prevShowLabel: '-Holic'
    },
    HOLIC: {
        vid: "https://www.youtube.com/embed/Q7mewPYYDJ0?list=PL449B8F743B778A47",
        nextShow: SHOWS.FLASHBACK,
        nextShowLabel: 'Flashback',
        prevShow: SHOWS.AWAKENING,
        prevShowLabel: 'Awakening'
    },
    AWAKENING: {
        vid: "https://www.youtube.com/embed/FZXg3VXU8PM?list=PL69165D23E5E67855",
        nextShow: SHOWS.HOLIC,
        nextShowLabel: '-Holic',
        prevShow: SHOWS.PHASES,
        prevShowLabel: 'Phases'
    },
    PHASES: {
        vid: "https://www.youtube.com/embed/riDcPmxIX84?list=PLF3F7906D4B5B6126",
        nextShow: SHOWS.AWAKENING,
        nextShowLabel: 'Awakening',
        prevShow: SHOWS.UNCONDITIONAL,
        prevShowLabel: 'Unconditional'
    },
    UNCONDITIONAL: {
        vid: "https://www.youtube.com/embed/tSZED5wR7RI?list=PLA9F9B73DE017EF37",
        nextShow: SHOWS.PHASES,
        nextShowLabel: 'Phases',
        prevShow: SHOWS.HIDDEN_KISSES,
        prevShowLabel: 'Hidden Kisses'
    },
    HIDDEN_KISSES: {
        vid: "https://www.youtube.com/embed/mCLwy3wqOAU?list=PLBC41601B7186C5B8",
        nextShow: SHOWS.UNCONDITIONAL,
        nextShowLabel: 'Unconditional',
        prevShow: SHOWS.SILK_N_SPICE,
        prevShowLabel: 'Silk n\' Spices'
    },
    SILK_N_SPICE: {
        vid: "https://www.youtube.com/embed/PxU3O10rzRk?list=PLB9F686BFEB21B282",
        nextShow: SHOWS.HIDDEN_KISSES,
        nextShowLabel: 'Hidden Kisses',
        prevShow: undefined,
        prevShowLabel: undefined
    }
};

const Shows = React.createClass ({
    propTypes: {
        show: React.PropTypes.string,
        onScreenChange: React.PropTypes.func
    },

    render() {
        var source = LINKS[this.props.show].vid;
        var image = LINKS[this.props.show].img;
        var prevShow = (
            LINKS[this.props.show].prevShow ?
            <a onClick={() => this.props.onScreenChange(SCREEN.SHOWS, LINKS[this.props.show].prevShow)} className="Show-Link">
                {'Previous Show: ' + LINKS[this.props.show].prevShowLabel}
            </a> :
            <div/>
        );
        var nextShow = (
            LINKS[this.props.show].nextShow ?
            <a onClick={() => this.props.onScreenChange(SCREEN.SHOWS, LINKS[this.props.show].nextShow)} className="Show-Link">
                {'Next Show: ' + LINKS[this.props.show].nextShowLabel}
            </a> :
            <div/>
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
                    <div className="col-xs-3 col-xs-offset-6">
                        {nextShow}
                    </div>
                </div>
            </div>
        );
    }
});

export default Shows;