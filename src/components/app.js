import React, { Component } from 'react';
import Appstyle from '../style/app.scss'
import Alignme from './align-me'
import Hide from './hide-me'
import Font from './font-sizer'
import Color from './color-me'
import Counter from './counter'
import Clock from './clock'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Alignme />
        <hr/>
        <Hide />
        <hr/>
        <Counter />
        <hr/>
        <Font />
        <hr/>
        <Color />
        <hr/>
        <Clock />
      </div>
    );
    
  }
}
