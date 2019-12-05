import React, { Component } from 'react';
import './App.scss';

import ListView from './views/ListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListView />
      </div>
    );
  }
}

export default App;
