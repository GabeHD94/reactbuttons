import React, { Component } from 'react';

export default class fontsizer extends Component {
  constructor(props){
    super(props)

    this.state = {
      pxsize: 30
    }
  }

  uppx = () => {
    this.setState({
      pxsize: this.state.pxsize +1
    })
  }

  downpx = () => {
    this.setState({
      pxsize: this.state.pxsize -1
    })
  }


  render() {
    return (
      <div className='counter-wrapper'>
          <h1 style={{ fontSize: this.state.pxsize }}>{this.state.pxsize}</h1>
          <button onClick={this.downpx}>Decrement Font</button>
          <button onClick={this.uppx}>Increment Font</button>
      </div>
    );
  }
}