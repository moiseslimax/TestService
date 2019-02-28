import React, { Component } from 'react';

//css
import './BudgetBar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default class BudgetBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      budgetName: 'Limpeza Residencial'   
    };
  }
  componentDidMount = () => {
    if(window.location.pathname === '/budget') {
      this.setState({visible: true})
    } else {
      this.setState({visible: false})
    }
  }

  setVisible = () => {
    this.setState({visible: false})
  }

  render() {
   
    return (
      <div>
        {
          this.state.visible === true 
          ? (
          <nav class="budgetnav navbar navbar-toggleable-sm bg-faded navbar-light fixed-top fixed-top-2">
            <NavLink to="/"><i class="fas fa-arrow-left arrow" /></NavLink>
            <span className="bar-content">{this.state.budgetName}</span>
            <span className="bar-more">Ver detalhes</span>
          </nav>
          
          )
          : ''
        }
       
      </div>
        
    )
  }
}
