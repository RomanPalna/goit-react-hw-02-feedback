import React, { Component } from 'react';
import Statistic from './Statistics';
// import s from './Feedback.module.css';

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
    this.countPositiveFeedbackPercentage();
  };

  countNeutralFeed = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countBadFeed = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(function (
      feedbackCurr,
      feedbackNext,
    ) {
      return feedbackCurr + feedbackNext;
    });
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = (this.state.good / this.countTotalFeedback()) * 100;
    if (isNaN(percentage)) {
      return 0;
    } else {
      return Math.round(percentage);
    }
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
        <Statistic
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
