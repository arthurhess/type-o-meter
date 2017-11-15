import React, { Component } from 'react';
import TextBox from './components/text-box.js';
import Gauge from './components/gauge.js';
import BarChart from './components/bar-chart.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { data: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <TextBox onType={ this.handleChange } value={ this.state.data } />
        <Gauge data={ this.state.data } />
        <BarChart data={ this.state.data }/>
      </div>
    );
  }

  handleChange(event) {
    this.setState({ data: event.target.value });
  }

}

export default App;
