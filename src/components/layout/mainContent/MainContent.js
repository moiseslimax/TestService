import React, { Component } from 'react'
import MainBudgetBox from '../../mainBudgetBox/MainBudgetBox'

//css
import './MainContent.css';

export default class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'abertos',
            apidata: []
        }
      }
    
    componentWillMount = () => {
        //Getting data from API
        fetch('http://5c5d8680ef282f0014c3d956.mockapi.io/api/v1/orders', {
                method: 'get' // opcional 
            })
            .then((response) => {
                response.json().then(data => {
                    // console.log(data);
                    this.setState({apidata: data})
                }) 
            })
            .catch((err) => { 
                console.error(err); 
            });
    }
     
    render() {

        //structuring filters
        const filterFinish = this.state.apidata.filter((datax) => datax.status === 'finalizado');
        const filterContract = this.state.apidata.filter((datax) => datax.status === 'contratado' || datax.status === '');
        const filterCanceled = this.state.apidata.filter((datax) => datax.status === 'cancelado');
        
        return (
        <div className="content">

            <div className="row">
                <span className="col-sm-8 title">Meus Orçamentos</span>

                <div className="col-sm-4 content-menu">
                    <a href="#" className={this.state.page === 'abertos' ? "active" : '""'} onClick={(e) => {this.setState({page: 'abertos'})}}>Abertos({filterContract.length})</a>
                    <a href="#" className={this.state.page === 'finalizados' ? "active" : '""'} style={{marginLeft: "15%"}} onClick={(e) => {this.setState({page: 'finalizados'})}}>Finalizados({filterFinish.length})</a>
                    <a href="#" className={this.state.page === 'cancelados' ? "active" : '""'} style={{marginLeft: "15%"}} onClick={(e) => {this.setState({page: 'cancelados'})}}>Cancelados({filterCanceled.length})</a>
                </div>
            </div>

            <div className="content-board">
                {(() => {
                    switch(this.state.page) {
                        case 'abertos':
                        return (<div className="boxes">{filterContract.map(data => {return <MainBudgetBox data={data} />})}</div>);
                        case 'finalizados':
                        return (<div className="boxes">{filterFinish.map(data => {return <MainBudgetBox data={data} />})}</div>);
                        case 'cancelados':
                        return (<div className="boxes">{filterCanceled.map(data => {return <MainBudgetBox data={data} />})}</div>);
                        default:
                        return null;
                    }
                    })()}
            </div>
            
        </div>
        )
  }
}
