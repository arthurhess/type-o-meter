import React, { Component } from 'react';

class TextBox extends Component {

  render() {
    return <textarea
              cols="100" rows="20"
              onChange={ this.props.onType }
              value={ this.props.value } />
  }

}

export default TextBox;
