import React from 'react';

const Header = React.createClass({
    propTypes: {
        img: React.PropTypes.string,
        label: React.PropTypes.string,
        sublabel: React.PropTypes.string
    },

    getDefaultProps() {
      return ({
          label: undefined
      });
    },

    render() {
        var url = 'url("'+ this.props.img + '") center center no-repeat';
        return (
            <div className="Header-Wrapper">
                {this.props.img ? <img className="Header-Image" src={this.props.img}/> : <div/>}
                {this.props.label ? (<div className="Header-Label">{this.props.label}</div>) : (<div/>)}
            </div>
        );
    }
});

export default Header;