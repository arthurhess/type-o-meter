import React, { Component } from 'react';
import { core as ZingChart } from 'zingchart-react';

class Gauge extends Component {

  constructor(props) {
    super(props);

    this.state = {
      wpm: 0,
      cps: 0
    };

    this.dataLength = 0;
    this.updateTime = Date.now();
    this.timer = setInterval(this.calculateTypingSpeed.bind(this), 1000);
  }

  render() {
    return (
      <div>
        {/* <ZingChart id="gauge" */}
        <p>WPM: { this.state.wpm }</p>
        <p>CPS: { this.state.cps }</p>
      </div>
    );
  }

  calculateTypingSpeed() {
    const updateTime = Date.now();
    const elapsedTime = updateTime - this.updateTime;
    const dataLength = this.props.data.length;

    let charCount = dataLength - this.dataLength;
    charCount = charCount < 0 ? 0 : charCount;

    this.dataLength = dataLength;
    this.updateTime = updateTime;

    const cps = Math.round(charCount / (elapsedTime / 1000));
    const wpm = Math.round(cps * 12);

    this.setState({ wpm, cps, dataLength, updateTime });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

}

export default Gauge;
