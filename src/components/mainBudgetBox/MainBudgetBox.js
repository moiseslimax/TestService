import React, { Component } from 'react'
import StarRating from '../starRating/StarRating';

//Router 
import { NavLink } from 'react-router-dom';

//CSS
import './MainBudgetBox.css'

export default class MainBudgetBox extends Component {
  render() {
    
    //Get difference between today and Created data
    let date1 = new Date(this.props.data.createdAt);
    let date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

    //structuring filters
    const OriginalArray = this.props.data;
    const filterDone = this.props.data.quotes.find((datax) => datax.hired === true);
    const filterHired = this.props.data.quotes.filter((datax) => datax.hired === false);

    return (
      <div className="box">
        <div>
          <span className="box-title">{this.props.data.serviceName}</span>
        </div>

        <div>
          {filterDone === undefined && this.props.data.status != 'cancelado'
          ? <span className="box-subtitle">Validade: {diffDays} dias</span>
          : <div>
                  {(() => {
                  switch(this.props.data.status) {
                    case 'finalizado':
                      return (<div className='finish-midle' style={{marginTop: 10}}><span className="status-text">FINALIZADO</span></div>);
                    case 'cancelado':
                      return (<div className='canceled-midle' style={{marginTop: 10}}><span className="status-text">CANCELADO</span></div>);
                    case 'contratado':
                      return (<div className='hired-midle' style={{marginTop: 10}}><span className="status-text">CONTRATADO</span></div>);
                    default:
                      return null;
                  }
                })()}
           </div>
          }
        </div>
       
        <hr className="box-hr"/>
        { filterDone === undefined 
          ?
          <div className="budgets">
            <div className="pics">
            { this.props.data.quotes.map(imgBudget => {
              return <img alt="teste" style={{maxHeight: 40}} className="userPic" src={imgBudget.avatar}/>
            })
            }
            </div>
            <div className="budget-info box-subtitle">
              Você já tem {this.props.data.quotes.length} orçamentos!
            </div>
          </div> 
          : 
          <div className="budgets">
            <div className="done-mini-box">
              <img alt="teste" style={{maxHeight: 40}} className="userPic" src={filterDone.avatar}/>
              <div className="">
                <span>{filterDone.name}</span>
                <div><StarRating stars={filterDone.stars}/><span className="recive-done" style={{paddingLeft: 5}}>({filterDone.servicesDone})</span></div>
              </div>
            </div>
          </div> 
        }

        <NavLink to={`/budget/${this.props.data.id}`} style={{textDecoration: "none"}}>
          <div className="div-button">
            <button className="budget-button">VER ORÇAMENTOS</button>
          </div>
        </NavLink>
       
      </div>
    )
  }
}
