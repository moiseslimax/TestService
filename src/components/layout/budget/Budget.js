import React, { Component } from 'react'
import ReciveBudget from '../../reciveBudgetBox/ReciveBudget'
import BudgetBar from '../../budgetBar/BudgetBar';

//css
import './Budget.css';


export default class Budget extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'open',
            isOneHired: false
        }
      }
     
    render() {
        return (
        <div className="content">
        <BudgetBar />
            {
                this.state.isOneHired === false 
                ? ( 
                <div style={{paddingTop: 30}}>
                    <span className="budget-title">Orçamentos Recebidos</span>           
                    <div className="content-board">
                        <div className="boxes">
                            <ReciveBudget />
                            <ReciveBudget />
                            <ReciveBudget />
                        </div>
                    </div>
                </div>
                )

                : (
                    <div>
                          <span className="budget-title">Orçamentos Recebidos</span>           
                            <div className="content-board">
                                <div className="boxes">
                                    <ReciveBudget />
                                </div>
                            </div>
                        <span className="budget-title" style={{marginTop: "2.5%"}}>Recebidos</span>      
                        <div className="notHired">       
                            <div className="content-board">
                                <div className="boxes">
                                    <ReciveBudget />
                                    <ReciveBudget />
                                    <ReciveBudget />
                                </div>
                            </div>
                        </div>  
                    </div>
                )
            }
        </div> 
    )
  }
}
