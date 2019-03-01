import React, { Component } from 'react'

export default class StarRating extends Component {
    constructor(props){
        super(props);
    }
    
  render() {
    var stars = [];
    for (let i = 0; i < this.props.stars; i++ ) {
      stars.push(<i class="fas fa-star" />);
    }
    return stars;
  }
}
