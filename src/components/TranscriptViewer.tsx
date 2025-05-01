import React, { useState } from 'react';

const TranscriptViewer = () => {
  const [transcript, setTranscript] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleHighlight = (text) => {
    setHighlightedText(text);
  };

  const handleEdit = (event) => {
    setTranscript(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderTranscript = () => {
    const segments = transcript.split('\n').map((segment, index) => {
      const timestamp = new Date().toLocaleTimeString();
      return (
        <div key={index}>
          <span>{timestamp}</span>
          <p
            onClick={() => handleHighlight(segment)}
            style={{ backgroundColor: segment === highlightedText ? 'yellow' : 'transparent' }}
          >
            {segment}
          </p>
        </div>
      );
    });

    return segments;
  };

  const filteredTranscript = transcript
    .split('\n')
    .filter((segment) => segment.toLowerCase().includes(searchTerm.toLowerCase()))
    .join('\n');

  return (
    <div>
      <h2>Transcript Viewer</h2>
      <input
        type="text"
        placeholder="Search transcript"
        value={searchTerm}
        onChange={handleSearch}
      />
      <textarea
        value={transcript}
        onChange={handleEdit}
        placeholder="Edit transcript here"
      />
      <div>{renderTranscript()}</div>
      <div>
        <h3>Filtered Transcript</h3>
        <pre>{filteredTranscript}</pre>
      </div>
    </div>
  );
};

export default TranscriptViewer;
