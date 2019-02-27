import React, { Component } from 'react'
import logo from '../../../img/footer_logo.png';

//css
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-info">
            <div className="info">
                <span className="info-title">E se algo der errado?</span>
                <span className="info-text">Conte com a nssa garantia contra danos de até R$ 5.000,00</span>
                <span className="info-link">Saiba Mais</span> 
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">E se algo der errado?</span>
                <span className="info-text">Conte com a nssa garantia contra danos de até R$ 5.000,00</span>
                <span className="info-link">Saiba Mais</span>
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">E se algo der errado?</span>
                <span className="info-text">Conte com a nssa garantia contra danos de até R$ 5.000,00</span>
                <span className="info-link">Saiba Mais</span>
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">E se algo der errado?</span>
                <span className="info-text">Conte com a nssa garantia contra danos de até R$ 5.000,00</span>
                <span className="info-link">Saiba Mais</span>
            </div>
        </div>
        <div>
        <img src={logo} alt="logo" />
        </div>
      </div>
    )
  }
}
