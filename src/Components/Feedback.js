import React, { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeed = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    this.countTotalFeedback();
  };

  countNeutralFeed = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
  };

  countBadFeed = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(function (
      feedbackCurr,
      feedbackNext,
    ) {
      return feedbackCurr + feedbackNext;
    });
  };

  countPositiveFeedbackPercentage = () => {};

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
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
