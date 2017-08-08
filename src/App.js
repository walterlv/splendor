import React, { Component } from 'react';
import './App.css';
import Playground from './components/Playground';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Splendor</h2>
               </div>
                <Playground />
            </div>
        );
    }
}

export default App;
