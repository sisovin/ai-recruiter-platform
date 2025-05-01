import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CandidateProfile = () => {
  const [candidate, setCandidate] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchCandidate = async () => {
      if (id) {
        const { data, error } = await supabase
          .from('candidates')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          console.error('Error fetching candidate:', error);
        } else {
          setCandidate(data);
        }
      }
    };

    fetchCandidate();
  }, [id]);

  if (!candidate) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Candidate Profile</h1>
      <p><strong>Name:</strong> {candidate.name}</p>
      <p><strong>Title:</strong> {candidate.title}</p>
      <p><strong>Bio:</strong> {candidate.bio}</p>
    </div>
  );
};

export default CandidateProfile;
