import React, { Component } from 'react';

//css
import './BudgetBar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default class BudgetBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,   
    };
  }
  componentDidMount = () => {
    if(window.location.pathname == '/budget') {
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
          this.state.visible == true 
          ? (
          <nav class="budgetnav">
            <NavLink to ='/' style={{color: "black"}} onClick={() => {this.setVisible()}}>Return</NavLink>
          </nav>
          
          )
          : ''
        }
       
      </div>
        
    )
  }
}
