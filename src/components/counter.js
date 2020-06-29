import React, { Component } from 'react';

export default class counterer extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  upcounter = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }

  downcounter = () => {
    this.setState({
      counter: this.state.counter -1
    })
  }


  render() {
    return (
      <div className='counter-wrapper'>
          <button onClick={this.upcounter}>Up</button>
          <h1>{this.state.counter}</h1>
          <button onClick={this.downcounter}>Down</button>
      </div>
    );
  }
}






//   hidetext() {

//     if(this.state.text == "hide me"){
//       this.setState({ text: "" })
//     }else {
//       this.setState({ text: "hide me" })
//   }
//   }
  

//   render() {
//     return (
//       <div className='hide-wrapper'>
//           <h1>{this.state.text}</h1>
//           <button onClick={() => this.hidetext()}>Hide</button>
//       </div>
//     );
//   }
// }