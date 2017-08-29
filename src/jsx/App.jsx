import React from 'react';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

const App = React.createClass ({
    render() {
      return (
         <div>
            <NavBar/>
            {this.props.children}
            <Footer/>
         </div>
      );
    }
});

export default App;