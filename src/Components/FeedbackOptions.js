import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad }) => (
  <div>
    <button onClick={good}>Good</button>
    <button onClick={neutral}>Neutral</button>
    <button onClick={bad}>Bad</button>
  </div>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
