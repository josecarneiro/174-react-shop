import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

import Navbar from './components/Navbar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
