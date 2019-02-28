import React, { Component } from 'react'

import userPic from '../../img/userPic.png';

//Router 
import { NavLink } from 'react-router-dom';

//CSS
import './MainBudgetBox.css'

export default class MainBudgetBox extends Component {
  render() {
    return (
      <div className="box">
        <div>
          <span className="box-title">Limpeza Residencial</span>
        </div>
        <div>
        <span className="box-subtitle">Validade: 5 dias</span>
        </div>
        <hr className="box-hr"/>
        <div className="budgets">
          <div className="pics">
          <img alt="teste" className="userPic" src={userPic}/>
          <img alt="teste" className="userPic" src={userPic}/>
          <img alt="teste" className="userPic" src={userPic}/>
          </div>
          <div className="budget-info box-subtitle">
            Você já tem 3 orçamentos!
          </div>
        </div>
        <NavLink to="/budget" style={{textDecoration: "none"}}>
          <div className="div-button">
            <button className="budget-button">VER ORÇAMENTOS</button>
          </div>
        </NavLink>
       
      </div>
    )
  }
}
