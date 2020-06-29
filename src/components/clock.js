import React, { Component } from 'react';
import moment from 'moment';

export default class alignment extends Component {
    render() {
        const currenttime = function() {
            document.getElementById("datetime")
            .innerHTML = moment().format('h:mm:ss a');
        }
        setInterval(currenttime, 1000);
        return (
        <div className='align-wrapper'>
          <div id="datetime"></div>
        </div>
    );
}
}