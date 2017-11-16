import React, { Component } from 'react';
import Gauge from './gauge.js'

const textboxDefaultStyle = {
  padding: 20,
  borderColor: '#ccc',
  resize: 'none'
};

const gaugeCustomStyle = {
  fontSize: 12,
  fontFamily: 'sans-serif',
  display: 'flex',
  justifyContent: 'center'
};

class TextBox extends Component {

  render() {
    return (
      <div>
        <textarea value={ this.props.value }
              cols="100" rows="20"
              onChange={ this.props.onType }
              style={ { ...textboxDefaultStyle, ...this.props.style } } />

        <Gauge id="gauge-1" text={ this.props.value } style={ gaugeCustomStyle } />
      </div>
    );
  }

}

export default TextBox;
