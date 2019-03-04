import React, { Component } from 'react'
import logo from '../../../img/footer_logo.png';

//css
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-info">
            <div className="info">
                <span className="info-title">E se algo<strong>&nbsp;der errado?</strong></span>
                <span className="info-text">Conte com a nssa garantia contra <br /> danos de até R$ 5.000,00</span>
                <span className="info-link">Saiba Mais</span> 
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">PROFISSIONAIS <strong>&nbsp;VERIFICADOS</strong></span>
                <span className="info-text">Verificamos antecedentes criminais,<br /> referências profissionais e muito mais.</span>
                <span className="info-link">Saiba Mais</span>
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">PAGAMENTO <strong>&nbsp;NA PLATAFORMA</strong></span>
                <span className="info-text">Pague em até 6x no seu cartão de crédito <br /> direto no app ou no site!</span>
                <span className="info-link">Saiba Mais</span>
            </div>
            <hr className="hr-footer" />
            <div className="info">
                <span className="info-title">CENTRAL DE <strong>&nbsp;AJUDA</strong></span>
                <span className="info-text">Te ajudamos antes, durante ou depois <br /> do seu pedido, 24 horas por dia.</span>
                <span className="info-link">Saiba Mais</span>
            </div>
        </div>
        <div className="footer-end">
          <div className="">
            <img src={logo} alt="logo" />
          </div>
         
          <div className="footer-links">
            <a href="/" className="">Central de Ajuda</a>
            <a href="/" className="">Termos de uso</a>
            <a href="/" className="">Código de conduta</a>
          </div>
        </div>
      </div>
    )
  }
}
