import React from 'react';
import SCREEN from '../js/Screen.js';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const NavBar = React.createClass({
    // propTypes: {
    //     onScreenChange: React.PropTypes.func
    // },

    getInitialState() {
        return ({
            expandedNav: false
        });
    },

    _hideNav(){
        this.setState({expandedNav: false});
    },

    _toggleNav() {
        this.setState({expandedNav: !this.state.expandedNav});
    },

    _toggleHandler(navExpanded) {
        this.setState({
            expandNav: navExpanded
        });
    },

    _renderItem(label, eventKey, screen) {
        return (
            <LinkContainer to={screen} onClick={this._hideNav}>
                <NavItem eventKey={eventKey} href="#" className="nav-item">
                    {label}
                </NavItem>
            </LinkContainer>
        );
    },

    _renderMenuItem(label, eventKey, screen) {
        return (
            <LinkContainer to={screen} onClick={this._hideNav}>
                <MenuItem eventKey={eventKey}>
                    {label}
                </MenuItem>
            </LinkContainer>
        );
    },

   render() {
      return (
      	<Navbar expanded={this.state.expandedNav} onToggle={this._toggleHandler}>
            <Navbar.Header>
                <Navbar.Brand>
                    <div>
                        <div>
                            <img src="./src/images/8882.png" className="logo-img"/>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle onClick={this._toggleNav}/>
            </Navbar.Header>
            <Navbar.Header>
                <Navbar.Brand>
                    <div className="title-text">
                        <Link to={SCREEN.HOME} onClick={this._hideNav}>
                            <img src="./src/images/Triple8.png" className="title-img"/>
                        </Link>
                    </div>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown">
                        {this._renderMenuItem("Who We Are", 1.1, SCREEN.ABOUT)}
                        {this._renderMenuItem("Board", 1.2, SCREEN.BOARD)}
                    </NavDropdown>
                    {this._renderItem('Company', 2, SCREEN.COMPANY)}
                    <NavDropdown eventKey={3} title='Shows' id="basic-nav-dropdown">
                        {this._renderMenuItem("2016 INK", 3.1, SCREEN.SHOW.INK)}
                        {this._renderMenuItem("2015 Fortune", 3.2, SCREEN.SHOW.FORTUNE)}
                        {this._renderMenuItem("2014 D8te Night", 3.3, SCREEN.SHOW.D8TE_NIGHT)}
                        {this._renderMenuItem("2013 Flashback", 3.4, SCREEN.SHOW.FLASHBACK)}
                        {this._renderMenuItem("2012 -Holic", 3.5, SCREEN.SHOW.HOLIC)}
                        {this._renderMenuItem("2011 Awakening", 3.6, SCREEN.SHOW.AWAKENING)}
                        {this._renderMenuItem("2010 Phases", 3.7, SCREEN.SHOW.PHASES)}
                        {this._renderMenuItem("2009 Unconditional", 3.8, SCREEN.SHOW.UNCONDITIONAL)}
                        {this._renderMenuItem("2008 Hidden Kisses", 3.9, SCREEN.SHOW.HIDDEN_KISSES)}
                        {this._renderMenuItem("2007 Silk n' Spice", 3.10, SCREEN.SHOW.SILK_N_SPICE)}
                    </NavDropdown>
                    {this._renderItem('Gallery', 4, SCREEN.GALLERY)}
                    {this._renderItem('FAQ', 5, SCREEN.FAQ)}
                    {this._renderItem('Contact', 6, SCREEN.CONTACT)}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
      );
   }
});

export default NavBar;