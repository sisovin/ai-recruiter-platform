import React from 'react';

const JobDescriptionTemplate = ({ job }) => {
  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <h2>Requirements</h2>
      <ul>
        {job.requirements.map((requirement, index) => (
          <li key={index}>{requirement}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescriptionTemplate;
