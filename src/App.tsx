import * as React from 'react';
import './App.css';
import Playground from './components/Desktop';

class App extends React.Component<{}, {}> {
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
