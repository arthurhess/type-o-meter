import React, { Component } from 'react';

const defaultStyle = {
  display: 'flex'
};

class Gauge extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wpm: 0,
      cps: 0
    };

    this.textLength = this.props.text.length;
    this.updateTime = Date.now();
    this.timer = setInterval(this.calculateTypingSpeed.bind(this), 1000);
  }

  render() {
    return (
      <div style={ { ...defaultStyle, ...this.props.style } }>
        <p>Words per minute: { this.state.wpm }</p>
      </div>
    );
  }

  calculateTypingSpeed() {
    const updateTime = Date.now();
    const elapsedTime = updateTime - this.updateTime;
    const textLength = this.props.text.length;

    let charCount = textLength - this.textLength;
    charCount = charCount < 0 ? 0 : charCount;

    this.textLength = textLength;
    this.updateTime = updateTime;

    const cps = Math.round(charCount / (elapsedTime / 1000));
    const wpm = Math.round(cps * 12);

    this.setState({ wpm, cps, textLength, updateTime });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

export default Gauge;
