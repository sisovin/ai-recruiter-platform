import React, { useState } from 'react';

const EvaluationForm = () => {
  const [rating, setRating] = useState('');
  const [comments, setComments] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit feedback to the backend
    console.log('Feedback Data:', { rating, comments });
    setFeedbackSubmitted(true);
  };

  return (
    <div>
      <h2>Evaluation Form</h2>
      {feedbackSubmitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              name="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default EvaluationForm;
