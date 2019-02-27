import React, { Component } from 'react';
import NavBar from './components/layout/navbar/NavBar';
import MainContent from './components/layout/mainContent/MainContent';
import Footer from './components/layout/footer/Footer';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <MainContent />
      <footer>
        <Footer />
      </footer>
      </div>
    );
  }
}

export default App;
