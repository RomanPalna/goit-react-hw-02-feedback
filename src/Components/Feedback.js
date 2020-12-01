import React, { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  countGoodFeed = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  countNeutralFeed = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  countBadFeed = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="feedback">
        <h2>Please leave feedback!</h2>
        <div>
          <button onClick={this.countGoodFeed}>Good</button>
          <button onClick={this.countNeutralFeed}>Neutral</button>
          <button onClick={this.countBadFeed}>Bad</button>
        </div>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: 0</li>
          <li>Positive feedback: 0%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
