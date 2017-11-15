import React, { Component } from 'react';
import TextBox from './components/text-box.js';
import Gauge from './components/gauge.js';
import LetterFrequencyChart from './components/letter-frequency-chart.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <TextBox onType={ this.handleChange } value={ this.state.text } />
        <Gauge id="gauge-1" data={ this.state.text } />
        <LetterFrequencyChart id="bar-chart-1" text={ this.state.text }/>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

}

export default App;
