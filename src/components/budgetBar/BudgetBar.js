import React from 'react'
import PropTypes from 'prop-types';

//css
import './BudgetBar.css'

//Router
import { NavLink } from 'react-router-dom'; 

export default function BudgetBar(props) {
  return (
    <div>
        <nav class="budgetnav navbar navbar-toggleable-sm bg-faded navbar-light fixed-top fixed-top-2">
            <NavLink to="/"><i class="fas fa-arrow-left arrow" /></NavLink>
            <span className="bar-content">{props.pageName}</span>
            <span className="bar-more">Ver detalhes</span>
        </nav>
    </div>
  )
}

//Expected prop types
BudgetBar.propTypes = {
  pageName: PropTypes.string.isRequired
}