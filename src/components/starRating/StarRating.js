import React, { Component } from 'react'

export default class StarRating extends Component {
    constructor(props){
        super(props);
        this.state = {
            howMany: 1
        }
    }

    componentWillReceiveProps = () => {
        for (i = 0; i < this.props.stars; i++) { 
           this.setState({howMany: howMany++})
        }
    }

  render() {
      console.log('estrelas: ', this.state.howMany)
    return (
      <div>
        {}
      </div>
    )
  }
}
