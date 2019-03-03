import React, { Component } from 'react';

//Images
import logo from '../../../img/logo.png';
import userPic from '../../../img/userPic.png';

//css
import './navbar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default class NavBar extends Component {
  render() {
    return (
        <nav class="navbar navfix fixed-top">
         <i class="fas fa-bars"></i>
         <NavLink to="/" ><img src={logo} align="left" className="mainLogo" alt="logo"/></NavLink>

          <div class="topnav">
            <NavLink to="/" ><a href="#home" class="active">Início</a></NavLink>
              <a href="#">Catálogo de serviços</a>
              <a href="#">Meus orçamentos</a>
              <a href="#">Mensagens (4)</a>
              <a href="#">Ajuda</a>            
          </div>
            
          <div>
            <img alt="userpic" className="userPic" src={userPic}/>
            <span>Juliana</span>  
          </div>
        </nav>
    )
  }
}
