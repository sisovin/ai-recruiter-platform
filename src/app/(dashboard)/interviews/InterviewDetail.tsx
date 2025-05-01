import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const InterviewDetail = () => {
  const [interview, setInterview] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchInterview = async () => {
      if (id) {
        const { data, error } = await supabase
          .from('interviews')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching interview:', error);
        } else {
          setInterview(data);
        }
      }
    };

    fetchInterview();
  }, [id]);

  if (!interview) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Interview Detail</h1>
      <p><strong>Date:</strong> {interview.date}</p>
      <p><strong>Time:</strong> {interview.time}</p>
      <p><strong>Participants:</strong> {interview.participants.join(', ')}</p>
    </div>
  );
};

export default InterviewDetail;
