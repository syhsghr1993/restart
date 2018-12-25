import React, { Component } from 'react';
import './App.css';

import Count from './count'
import Reducer from './reducer'
import Reducer2 from './reducer2'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Count />

        
        <Reducer initialCount={1} />
        
        <Reducer2 />
        
      </div>
    );
  }
}

export default App;
