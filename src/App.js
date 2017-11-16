import React, { Component } from 'react';
import TextBox from './components/text-box.js';
import LetterFrequencyChart from './components/letter-frequency-chart.js';
import './App.css';

const textboxCustomStyle = {
  width: '80%',
  display: 'block',
  margin: '0 auto'
};

const chartCustomStyle = { marginTop: '50px' };

class App extends Component {

  constructor(props) {
    super(props);

    const sampleText = "For the First Time, Gene Editing Is Taking Place Inside the Human Body\n\nA man named Brian Madeux has just become a walking experiment. He’s the first human to officially have gene editing take place inside his body, thanks to an IV packed with snippets of DNA and the means to insert them into his own genetic material.\n\nThe Associated Press reports that the treatment, developed by Sangamo Therapeutics, uses a technique known as zinc fingers to snip Madeux’s DNA and insert a corrective gene. If all goes to plan, that will allow his body to produce enzymes that counter his liver condition, Hunter syndrome. He’ll be dearly hoping that it does, because to date he’s had 26 operations to fix problems caused by his illness.";

    this.state = { text: sampleText };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <h1>type-o-meter!</h1>
        <h4>Start typing in English and see how the blue bars progressively fit under the red curve</h4>
        <TextBox onType={ this.handleChange } value={ this.state.text } style={ textboxCustomStyle } />
        <LetterFrequencyChart id="bar-chart-1" text={ this.state.text } style={ chartCustomStyle } />
      </div>
    );
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

}

export default App;
