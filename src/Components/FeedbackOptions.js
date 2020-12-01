const FeedbackOptions = ({ good, neutral, bad }) => (
  <div>
    <button onClick={good}>Good</button>
    <button onClick={neutral}>Neutral</button>
    <button onClick={bad}>Bad</button>
  </div>
);
export default FeedbackOptions;
