import React, { Component } from 'react'

import userPic from '../../img/userPic.png';
import StarRating from '../starRating/StarRating';

//CSS
import './ReciveBudget.css'

const datateste = {
  id: "16",
  orderId: "1",
  name: "Tyree",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg",
  price: "869.00",
  stars: 2.2,
  ratings: 82,
  servicesDone: 51,
  hired: false
}


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
          this.state.isHired === true 
          ? (
              <div className='hired'>
                CONTRATADO
              </div>
            ) 
          : ''
        }
        <div className="recive-box">
          <img alt="reciveuserpic" className="recive-userimg" src={datateste.avatar}></img>
          <div>
            <span className="recive-usernamer">{datateste.name}</span>
            <div>
              <StarRating stars={datateste.stars}/>
              <span className="recive-done">({datateste.ratings})</span>
            </div>
            <div className="recive-done">{datateste.servicesDone} Negócios fechados</div>
            <div className="recive-value">{datateste.price}</div>
          </div>    
        </div>
        {
          this.state.isHired === false 
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
