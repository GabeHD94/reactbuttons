import React, { Component } from 'react';

export default class colorer extends Component {
  constructor(props){
    super(props)

    this.state = {
      deftextcolor: "green",
      text: "Color Me",
      inputtext: "Color Me",
      inputcolor: "green"
    }
    this.handleTextInputChange = this.handleTextInputChange.bind(this)
    this.handleColorInputChange = this.handleColorInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


handleTextInputChange() {
  this.setState({inputtext: event.target.value})
}


handleColorInputChange() {
  this.setState({inputcolor: event.target.value})
}

handleSubmit() {
  this.setState({
    text: this.state.inputtext,
    deftextcolor: this.state.inputcolor
  })
}


  render() {
    return (
        <div className='colorer-wrapper'>
            <h1 style={{color: this.state.deftextcolor}}>{this.state.text}</h1>
            <input type="text" onChange={this.handleTextInputChange} value={this.state.inputtext}/>
            <input type="text" onChange={this.handleColorInputChange} value={this.state.inputcolor}/>
            <button onClick={this.handleSubmit}>Submit</button>
        </div>
    );
  }
}



