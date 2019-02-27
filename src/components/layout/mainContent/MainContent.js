import React, { Component } from 'react'
import MainBudgetBox from '../../mainBudgetBox/MainBudgetBox'


//css
import './MainContent.css';

export default class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'open'
        }
      }
     
    render() {
        return (
        <div className="content">

            <div className="row">
                <span className="col-sm-8 title">Meus Orçamentos</span>

                <div className="col-sm-4 content-menu">
                    <a className="active margin-none">Abertos(4)</a>
                    <a style={{marginLeft: "15%"}}>Finalizados(5)</a>
                    <a style={{marginLeft: "15%"}}>Cancelados(5)</a>
                </div>
            </div>

            <div className="content-board">
                <div className="boxes">
                    <MainBudgetBox />
                    <MainBudgetBox />
                    <MainBudgetBox />
                    <MainBudgetBox />
                    <MainBudgetBox />
                    <MainBudgetBox />
                </div>
            </div>
            
        </div>
        )
  }
}
