import React, { Component } from 'react';
import NavBar from './components/layout/navbar/NavBar';
import MainContent from './components/layout/mainContent/MainContent';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <MainContent />
      </div>
    );
  }
}

export default App;
