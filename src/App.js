import React, { Component } from 'react';

//Page Components
import NavBar from './components/layout/navbar/NavBar';
import MainContent from './components/layout/mainContent/MainContent';
import Budget from './components/layout/budget/Budget';
import Footer from './components/layout/footer/Footer';
import BudgetBar from './components/budgetBar/BudgetBar';
//CSS
import './App.css';

//Router
import { BrowserRouter as Router, withRouter, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact component={MainContent}/>
            <Route path="/budget/" component={Budget} />
          </Switch>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
