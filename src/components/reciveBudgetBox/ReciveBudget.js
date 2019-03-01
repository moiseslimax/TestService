import React, { Component } from 'react'
import StarRating from '../starRating/StarRating';
import PropTypes from 'prop-types';

//CSS
import './ReciveBudget.css'

export default class ReciveBudget extends Component {
  render() {
    return (
      <div className="recived">
        {
         this.props.data.hired === true 
          ? (
              <div className='hired'>
                CONTRATADO
              </div>
            ) 
          : ''
        }
        <div className="recive-box">
          <img alt="reciveuserpic" className="recive-userimg" src={this.props.data.avatar}></img>
          <div>
            <span className="recive-usernamer">{this.props.data.name}</span>
            <div>
              {/* Return the amount of stars by props*/}
              <StarRating stars={this.props.data.stars}/>
              <span className="recive-done">({this.props.data.ratings})</span>
            </div>
            <div className="recive-done">{this.props.data.servicesDone} Negócios fechados</div>
            <div className="recive-value">{this.props.data.price}</div>
          </div>    
        </div>
        {
         this.props.data.hired === false 
          ? 
          (
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

//Expected prop types
ReciveBudget.propTypes = {
    id: PropTypes.number.isRequired,
    orderId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number.isRequired,
    ratings: PropTypes.number.isRequired,
    servicesDone: PropTypes.number.isRequired,
    hired: PropTypes.bool.isRequired,
}
