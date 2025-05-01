import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const InterviewList = () => {
  const [interviews, setInterviews] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchInterviews = async () => {
      const { data, error } = await supabase
        .from('interviews')
        .select('*');

      if (error) {
        console.error('Error fetching interviews:', error);
      } else {
        setInterviews(data);
      }
    };

    fetchInterviews();
  }, []);

  const handleNewInterview = () => {
    router.push('/interviews/new');
  };

  return (
    <div>
      <h1>Interview List</h1>
      <button onClick={handleNewInterview}>New Interview</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Participants</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview) => (
            <tr key={interview.id}>
              <td>{interview.id}</td>
              <td>{interview.date}</td>
              <td>{interview.time}</td>
              <td>{interview.participants.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InterviewList;
