import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

// import SCREEN from '../js/Screen.js';
// import Home from './Screens/Home.jsx';
// import About from './Screens/About.jsx';
// import Company from './Screens/Company.jsx';
// import Shows from './Screens/Shows.jsx';
// import Board from './Screens/Board.jsx';
// import FAQ from './Screens/Faq.jsx';
// import Contact from './Screens/Contact.jsx';
// import Gallery from './Screens/Gallery.jsx';


const App = React.createClass ({
    // getInitialState() {
    //     return ({
    //         screen: SCREEN.HOME,
    //         show: undefined
    //     });
    // },
    //
    // _onScreenChange(screen, show) {
    //     if (!screen in SCREEN)
    //       return;
    //     this.setState({
    //         screen: screen,
    //         show: show
    //     });
    // },
    //
    // _renderScreen() {
    //     switch (this.state.screen) {
    //         case SCREEN.HOME:
    //             return (<Home onScreenChange={this._onScreenChange}/>);
    //         case SCREEN.ABOUT:
    //             return(<About/>);
    //         case SCREEN.COMPANY:
    //             return (<Company/>);
    //         case SCREEN.SHOWS:
    //             return (<Shows show={this.state.show} onScreenChange={this._onScreenChange}/>);
    //         case SCREEN.BOARD:
    //             return (<Board/>);
    //         case SCREEN.FAQ:
    //             return (<FAQ/>);
    //         case SCREEN.CONTACT:
    //             return (<Contact/>);
    //         case SCREEN.GALLERY:
    //             return (<Gallery/>);
    //     }
    // },

    render() {
      return (
         <div>
            <NavBar/>
            {this.props.children}
            {/*this._renderScreen()*/}
            <Footer/>
         </div>
      );
    }
});

export default App;