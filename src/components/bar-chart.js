import React, { Component } from 'react';
import { core as ZingChart } from 'zingchart-react';

class BarChart extends Component {

  constructor(props) {
    super(props);
    this.state = this.initDataset();
  }

  render() {
    return <ZingChart id="bar-chart" data={ this.getChartConfig(this.state) }/>;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.calculateAbsoluteFrequencies(nextProps.data));
  }

  /*
   * Incrementing it char by char doesn't work with copy & pastes
   * TODO: calculate frequencies only for the diff oldString-newString
   */
  calculateAbsoluteFrequencies(data) {
    const frequencies = this.initDataset();

    for (let character of data)
      if (character.match(/[a-z]/i)) frequencies[character.toLowerCase()]++

    return frequencies;
  }

  initDataset() {
    return {
      a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0,
      j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0,
      s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0
    };
  }

  getChartConfig(dataset) {
    const relativeFrequenciesText = Object.values(dataset).map(value => value / this.props.data.length);

    const relativeFrequenciesEnglish = [
      0.08167, 0.01492, 0.02782, 0.04253, 0.12702, 0.02228, 0.02015,
      0.06094, 0.06966, 0.00153, 0.00772, 0.04025, 0.02406, 0.06749,
      0.07507, 0.01929, 0.00095, 0.05987, 0.06327, 0.09056, 0.02758,
      0.00978, 0.02360, 0.00150, 0.01974, 0.00074
    ];

    return {
      'type': 'mixed',
      'title': {
        'text': 'Relative frequencies of letters',
        'font-size': 14
      },
      'plotarea': {
        'margin-top': 10
      },
      'legend': {
        'alpha': 0,
        'layout': '1x2',
        'align': 'center',
        'margin-top': '30px'
      },
      'scale-x': {
        'labels': Object.keys(dataset)
      },
      'scale-y': {
        'step': 0.025
      },
      'plot': {
        'aspect': 'spline'
      },
      'series': [
        {
          'type': 'bar',
          'values': relativeFrequenciesText,
          'text': 'In your text'
        },
        {
          'type': 'line',
          'line-style': 'dotted',
          'marker': {
            'alpha': 0
          },
          'values': relativeFrequenciesEnglish,
          'text': 'In the English language'
        }
      ]
    };
  }

}

export default BarChart;
