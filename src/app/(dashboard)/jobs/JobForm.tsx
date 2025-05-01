import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const JobForm = ({ job }) => {
  const [title, setTitle] = useState(job ? job.title : '');
  const [description, setDescription] = useState(job ? job.description : '');
  const [requirements, setRequirements] = useState(job ? job.requirements : '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (job) {
      // Update existing job
      const { data, error } = await supabase
        .from('jobs')
        .update({ title, description, requirements })
        .eq('id', job.id);

      if (error) {
        console.error('Error updating job:', error);
      } else {
        console.log('Job updated successfully:', data);
      }
    } else {
      // Create new job
      const { data, error } = await supabase
        .from('jobs')
        .insert([{ title, description, requirements }]);

      if (error) {
        console.error('Error creating job:', error);
      } else {
        console.log('Job created successfully:', data);
      }
    }
  };

  return (
    <div>
      <h1>{job ? 'Edit Job' : 'Create Job'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="requirements">Requirements:</label>
          <textarea
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            required
          />
        </div>
        <button type="submit">{job ? 'Update Job' : 'Create Job'}</button>
      </form>
    </div>
  );
};

export default JobForm;
