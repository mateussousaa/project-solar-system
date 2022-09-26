import React from 'react';
import logo from '../images/logo.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="logo"><img src={ logo } alt="logo" /></div>
        </div>
      </header>
    );
  }
}

export default Header;
