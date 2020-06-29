import React, { Component } from 'react'

export default class alignment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      alignment: "left"
    }
  }

  changeAlignment(newAlignment) {
    this.setState({ alignment: newAlignment })

  }
  
  
  render() {
    return (
      <div className='align-wrapper'>
        <h1 style={{ textAlign: this.state.alignment }} >Align Me!</h1>
        <button onClick={() => this.changeAlignment("left")}>Left</button>
        <button onClick={() => this.changeAlignment("center")}>Center</button>
        <button onClick={() => this.changeAlignment("right")}>Right</button>
      </div>
    )
  };
}
