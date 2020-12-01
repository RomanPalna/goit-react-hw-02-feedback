import React, { Component } from 'react';
import Statistics from './Statistics';
import Notification from './Notification';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
// import s from './Feedback.module.css';

export default class Feedback extends Component {
  static propTypes = {
    //
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: true,
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
    if (
      Object.values(this.state).reduce(function (feedbackCurr, feedbackNext) {
        const feed = feedbackCurr + feedbackNext;
        if (feed > 0) {
          return feed;
        }
        return;
      }) > 0
    ) {
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              good={this.countGoodFeed}
              neutral={this.countNeutralFeed}
              bad={this.countBadFeed}
            />
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        </div>
      );
    } else {
      return (
        <div>
          <Section title="Please leave feedback">
            <FeedbackOptions
              good={this.countGoodFeed}
              neutral={this.countNeutralFeed}
              bad={this.countBadFeed}
            />
            <Notification message="No feedback given" />
          </Section>
        </div>
      );
    }
  }
}

//  return (
//    <div className="feedback">
//      <h2>Please leave feedback!</h2>
//      <div>
//        <button onClick={this.countGoodFeed}>Good</button>
//        <button onClick={this.countNeutralFeed}>Neutral</button>
//        <button onClick={this.countBadFeed}>Bad</button>
//      </div>
//      <Statistics
//        good={this.state.good}
//        neutral={this.state.neutral}
//        bad={this.state.bad}
//        total={this.countTotalFeedback()}
//        positivePercentage={this.countPositiveFeedbackPercentage()}
//      />
//      <Notification message="No feedback given" />
//    </div>
//  );
