import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playground from './components/Playground.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Splendor</h2>
        </div>
        <Playground/>
      </div>
    );
  }
}

export default App;
