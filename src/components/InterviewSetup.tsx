import React, { useState } from 'react';

const InterviewSetup = () => {
  const [step, setStep] = useState(1);
  const [setupData, setSetupData] = useState({
    interviewTitle: '',
    interviewDate: '',
    interviewTime: '',
    interviewParticipants: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSetupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate and submit setup data to the backend
    console.log('Setup Data:', setupData);

    try {
      const response = await fetch('/api/interviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(setupData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit interview setup data');
      }

      const result = await response.json();
      console.log('Interview setup data submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting interview setup data:', error);
    }
  };

  return (
    <div>
      <h2>Interview Setup</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label htmlFor="interviewTitle">Interview Title:</label>
            <input
              type="text"
              id="interviewTitle"
              name="interviewTitle"
              value={setupData.interviewTitle}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label htmlFor="interviewDate">Interview Date:</label>
            <input
              type="date"
              id="interviewDate"
              name="interviewDate"
              value={setupData.interviewDate}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <label htmlFor="interviewTime">Interview Time:</label>
            <input
              type="time"
              id="interviewTime"
              name="interviewTime"
              value={setupData.interviewTime}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
            <button type="button" onClick={handleNextStep}>
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div>
            <label htmlFor="interviewParticipants">Interview Participants:</label>
            <input
              type="text"
              id="interviewParticipants"
              name="interviewParticipants"
              value={setupData.interviewParticipants}
              onChange={handleChange}
              required
            />
            <button type="button" onClick={handlePreviousStep}>
              Previous
            </button>
            <button type="submit">Submit</button>
          </div>
        )}
      </form>
      {step === 5 && (
        <div>
          <h3>Summary</h3>
          <p><strong>Title:</strong> {setupData.interviewTitle}</p>
          <p><strong>Date:</strong> {setupData.interviewDate}</p>
          <p><strong>Time:</strong> {setupData.interviewTime}</p>
          <p><strong>Participants:</strong> {setupData.interviewParticipants}</p>
        </div>
      )}
    </div>
  );
};

export default InterviewSetup;
