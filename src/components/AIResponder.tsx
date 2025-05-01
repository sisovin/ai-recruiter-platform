import React, { useState, useEffect } from 'react';

const AIResponder = () => {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchResponse = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/ai-response');
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error fetching AI response:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResponse();
  }, []);

  return (
    <div className="ai-responder">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="response-container">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default AIResponder;
