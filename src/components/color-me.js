import React, { Component } from 'react';

export default class colorer extends Component {
  constructor(props){
    super(props)

    this.state = {
      deftextcolor: "green",
      text: "Color Me"
    }
  }


colorchanger() {
  this.setState({deftextcolor: this.state.text})
  console.log(this.state.deftextcolor)
}


textchanger(newtext) {
  this.setState({text: newtext})
}


  render() {
    return (
        <div className='colorer-wrapper'>
            <h1 style={{color: this.state.deftextcolor}}>{this.state.text}</h1>
            <input type="text"/>
            <input type="text"/>
            <button type='submit'>Submit</button>
        </div>
    );
  }
}



