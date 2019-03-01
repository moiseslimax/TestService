import React from 'react'
import PropTypes from 'prop-types';

export default function StarRating(props) {
    let stars = [];
    for (let i = 0; i < props.stars; i++ ) {
      stars.push(<i class="fas fa-star" />);
    }
    return stars;
}

//Expected prop types
StarRating.PropTypes = {
  stars: PropTypes.number.isRequired
}