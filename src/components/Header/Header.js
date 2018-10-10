import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            REACT SEARCH
          </p>
        </header>
    );
  }
}

export default Header;
