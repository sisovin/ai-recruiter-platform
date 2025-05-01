import React, { useState, useEffect } from 'react';

const QuestionBank = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestions, setSelectedQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelectQuestion = (question) => {
    setSelectedQuestions((prevSelected) => [...prevSelected, question]);
  };

  const handleSaveQuestions = () => {
    // Save selected questions logic here
    console.log('Selected Questions:', selectedQuestions);
  };

  return (
    <div>
      <h2>Question Bank</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.text}</p>
            <button onClick={() => handleSelectQuestion(question)}>Select</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSaveQuestions}>Save Selected Questions</button>
    </div>
  );
};

export default QuestionBank;
