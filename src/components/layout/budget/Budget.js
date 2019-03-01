import React, { Component } from 'react'
import ReciveBudget from '../../reciveBudgetBox/ReciveBudget'
import BudgetBar from '../../budgetBar/BudgetBar';
import PropTypes from 'prop-types';

//css
import './Budget.css';

//PROPS TEST
const datateste = [
        {
          "id": "1",
          "orderId": "1",
          "name": "Catherine",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dreizle/128.jpg",
          "price": "760.00",
          "stars": 5,
          "ratings": 58,
          "servicesDone": 85,
          "hired": false
        },
        {
          "id": "16",
          "orderId": "1",
          "name": "Tyree",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg",
          "price": "869.00",
          "stars": 2.2,
          "ratings": 82,
          "servicesDone": 51,
          "hired": false
        },
        {
          "id": "17",
          "orderId": "4",
          "name": "Tyree",
          "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg",
          "price": "869.00",
          "stars": 2.2,
          "ratings": 82,
          "servicesDone": 51,
          "hired": false
        },
      ]

const pageName = 'Marido de aluguel';
//PROPS TEST

export default class Budget extends Component {
     
    render() {
        
        //structuring filters
        const OriginalArray = datateste;
        const filterDone = datateste.find((datax) => datax.hired === true);
        const filterHired = datateste.filter((datax) => datax.hired === false);

        return (
            <div className="content">
            <BudgetBar pageName={pageName}/>
                {
                    filterDone === undefined 
                    ? ( 
                    <div style={{paddingTop: 30}}>
                        <span className="budget-title">Orçamentos Recebidos</span>           
                        <div className="content-board">
                            <div className="boxes">
                            {
                                OriginalArray.map(data => {
                                    return <ReciveBudget data={data}/>
                                })
                            }
                            </div>
                        </div>  
                    </div>
                    )

                    : (
                        <div style={{paddingTop: 30}}>
                            <span className="budget-title">Contratado</span>           
                                <div className="content-board">
                                    <div className="boxes">
                                        <ReciveBudget data={filterDone}/>
                                    </div>
                                </div>
                            <span className="budget-title" style={{marginTop: "2.5%"}}>Recebidos</span>      
                            <div className="notHired">       
                                <div className="content-board">
                                    <div className="boxes">
                                    {
                                        filterHired.map(data => {
                                            return <ReciveBudget data={data}/>
                                        })
                                    }
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
