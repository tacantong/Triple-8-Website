import React from 'react';
import SCREEN from '../js/Screen.js';
import {Link} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const SHOW_DATA = require('../ajax/shows.json');
var showKeys = Object.keys(SHOW_DATA);

const NavBar = React.createClass({

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
            <LinkContainer to={screen} onClick={this._hideNav} key={eventKey}>
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
                        {showKeys.map(function(show, i) {
                            var obj = SHOW_DATA[show]
                            return this._renderMenuItem(obj.year + " " + obj.name, 3.0 + (i/10), show);
                        }.bind(this))}
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