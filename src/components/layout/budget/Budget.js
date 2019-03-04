import React, { Component } from 'react'
import ReciveBudget from '../../reciveBudgetBox/ReciveBudget'
import BudgetBar from '../../budgetBar/BudgetBar';

//css
import './Budget.css';

export default class Budget extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'abertos',
            budgetInfo: [],
            loading: false,
            pageName: ''
        }
      }
    
    componentWillMount = () => {
        this.setState({loading: true})
        let url = window.location.pathname;
        let budgetId = url.replace("/budget/", "")
        console.log(budgetId);
        //Getting data from API
        fetch('http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders', {
                method: 'get' // opcional 
            })
            .then((response) => {
                response.json().then(data => {
                    let filterBudget = data.find((datax) => datax.id === budgetId)
                    this.setState({budgetInfo: filterBudget.quotes, pageName: filterBudget.serviceName})
                    this.setState({loading: false})
                }) 
            })
            .catch((err) => { 
                console.error(err); 
            });
    }
    
    render() {
        //structuring filters
        const filterDone = this.state.budgetInfo.find((datax) => datax.hired === true);
        const filterHired = this.state.budgetInfo.filter((datax) => datax.hired === false);

        while (this.setState.loading === true) {
            return (
            <div class="content">
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
                <div class="loader"></div>
            </div>
            )
        }
        return (
            <div className="content">
            <BudgetBar pageName={this.state.pageName}/>
                {
                    filterDone === undefined 
                    ? ( 
                    <div style={{paddingTop: 30}}>
                        <span className="budget-title">Orçamentos Recebidos</span>           
                        <div className="content-board">
                            <div className="boxes">
                            {
                                this.state.budgetInfo.map(data => {
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
