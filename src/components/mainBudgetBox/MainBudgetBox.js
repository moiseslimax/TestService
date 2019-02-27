import React, { Component } from 'react'
import './MainBudgetBox.css'
import userPic from '../../img/userPic.png';

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
          <img className="userPic" src={userPic}/>
          <img className="userPic" src={userPic}/>
          <img className="userPic" src={userPic}/>
          </div>
          <div className="budget-info box-subtitle">
            Você já tem 3 orçamentos!
          </div>
        </div>
        <div className="div-button">
          <button className="budget-button">VER ORÇAMENTOS</button>
        </div>
       
      </div>
    )
  }
}
