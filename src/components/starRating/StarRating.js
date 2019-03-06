import React from 'react'
import PropTypes from 'prop-types';

export default function StarRating(props) {
    let stars = [];
    let starsNumber = props.stars;
    if (props.stars > 5) {
      starsNumber = 5;
    }
    
    for (let i = 0; i < starsNumber; i++ ) {
      stars.push(<i class="fas fa-star" />);
    }
    return stars;
}

//Expected prop types
StarRating.PropTypes = {
  stars: PropTypes.number.isRequired
}