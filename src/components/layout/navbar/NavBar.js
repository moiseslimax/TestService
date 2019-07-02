import React, { Component } from 'react';

//Images
import logo from '../../../img/logo.jpg';
import userPic from '../../../img/userPic.png';

//css
import './navbar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default class NavBar extends Component {
    constructor(props){
      super(props)
      this.state = {
        style: {display: "none"},
        page: 'home',
      }
    }

  handleResponsiveMenu = () => {
    if (this.state.style.display === "none") {
      console.log('entrou')
      this.setState({style : {display: "block"}})
    } else {
      this.setState({style : {display: "none"}})
    }
  }

  render() {
    return (
        <nav className="navbar navfix fixed-top">
          <i className="fas fa-bars" onClick={() => this.handleResponsiveMenu()}></i>
          <NavLink to="/" ><img src={logo} align="left" className="mainLogo" alt="logo"/></NavLink>

          <div class="topnav">
            <NavLink to="/" ><a href="#home" class={this.state.page === 'home' ? "active" : ''} onClick={() => {this.setState({page: 'home'})}}>Início</a></NavLink>
              <a href="#" className={this.state.page === 'service' ? "active" : ''} onClick={() => {this.setState({page: 'service'})}}>Catálogo de serviços</a>
              <a href="#" className={this.state.page === 'budget' ? "active" : ''} onClick={() => {this.setState({page: 'budget'})}}>Meus orçamentos</a>
              <a href="#" className={this.state.page === 'message' ? "active" : ''} onClick={() => {this.setState({page: 'message'})}}>Mensagens (4)</a>
              <a href="#" className={this.state.page === 'help' ? "active" : ''} onClick={() => {this.setState({page: 'help'})}}>Ajuda</a>            
          </div>
          <div className="user-area">
            <img alt="userpic" className="userPic" src={userPic}/>
            <span>Juliana</span> 
          </div>

          <div className="narrowLinks" style={this.state.style}>
            <NavLink to="/" ><a href="" className={this.state.page === 'home' ? "active" : ''} onClick={() => {this.setState({page: 'home'})}}>Início</a></NavLink>
            <a href="#" className={this.state.page === 'service' ? "active" : ''} onClick={() => {this.setState({page: 'service'})}}>Catálogo de serviços</a>
            <a href="#" className={this.state.page === 'budget' ? "active" : ''} onClick={() => {this.setState({page: 'budget'})}}>Meus orçamentos</a>
            <a href="#" className={this.state.page === 'message' ? "active" : ''} onClick={() => {this.setState({page: 'message'})}}>Mensagens (4)</a>
            <a href="#" className={this.state.page === 'help' ? "active" : ''} onClick={() => {this.setState({page: 'help'})}}>Ajuda</a> 
          </div>
        </nav>
    )
  }
}
