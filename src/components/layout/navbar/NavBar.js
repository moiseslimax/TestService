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
        <nav class="navbar fixed-top navbar-light navfix bg-light">
          <NavLink to="/" ><img src={logo} alt="logo" className="navbar-brand"/></NavLink>

            
          <div class="topnav">
            <NavLink to="/" ><a href="#home" class="active">Início</a></NavLink>
              <a href="#news">Catálogo de serviços</a>
              <a href="#contact">Meus orçamentos</a>
              <a href="#about">Mensagens (4)</a>
              <a href="#about">Ajuda</a>
          </div>
            
          <div class="my-lg-0">
            <img className="userPic" src={userPic}/>
            <span>Juliana</span>  
          </div>
        </nav>
    )
  }
}
