import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Instructions from '../Instructions/Instructions';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Instructions />

      </div>
    );
  }
}

export default App;
