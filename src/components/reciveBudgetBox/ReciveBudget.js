import React, { Component } from 'react'

import userPic from '../../img/userPic.png';

//Router 
import { NavLink } from 'react-router-dom';

//CSS
import './ReciveBudget.css'

export default class ReciveBudget extends Component {
    constructor(props){
      super(props)
      this.state = {
        isHired: false
      }
    }


  render() {
    return (
      <div className="recived">
        {
          this.state.isHired == true 
          ? (
              <div className='hired'>
                CONTRATADO
              </div>
            ) 
          : ''
        }
        <div className="recive-box">
          <img className="recive-userimg" src={userPic}></img>
          <div>
            <span className="recive-usernamer">Frank</span>
            <div>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <span className="recive-done">(65)</span>
            </div>
            <div className="recive-done">28 Negócios fechados</div>
            <div className="recive-value">R$ 200,00</div>
          </div>    
        </div>
        {
          this.state.isHired == false 
          ? (
          <div>
            <hr className="box-hr"/>
            <span className="recive-hire">Contratar</span>
          </div>
          )
          : ('')
        }
        
      </div>
    )
  }
}
