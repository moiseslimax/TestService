import React from 'react'
import PropTypes from 'prop-types';

//css
import './BudgetBar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default function BudgetBar(props) {
  return (
    <div>
        <nav class="budgetnav navbar">
            <NavLink to="/"><i class="fas fa-arrow-left arrow" /></NavLink>
            <div className="bar-content"><span >{props.pageName}</span><br /><span className="bar-more-m">Ver Detalhes</span></div>
            <div><span className="bar-more">Ver detalhes</span><span className="bar-help-m">Central de Ajuda</span></div>
        </nav>
    </div>
  )
}

//Expected prop types
BudgetBar.propTypes = {
  pageName: PropTypes.string.isRequired
}