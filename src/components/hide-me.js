import React, { Component } from 'react'

export default class hiding extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: "hide me"
    }
  }

  hidetext() {

    if(this.state.text == "hide me"){
      this.setState({ text: "" })
    }else {
      this.setState({ text: "hide me" })
  }
  }
  

  render() {
    return (
      <div className='hide-wrapper'>
          <h1>{this.state.text}</h1>
          <button onClick={() => this.hidetext()}>Hide</button>
      </div>
    );
  }
}