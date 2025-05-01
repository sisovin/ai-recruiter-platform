import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Bar } from 'react-chartjs-2';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const InterviewAnalytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      const { data, error } = await supabase
        .from('interview_analytics')
        .select('*');

      if (error) {
        console.error('Error fetching analytics data:', error);
      } else {
        setAnalyticsData(data);
      }
    };

    fetchAnalyticsData();
  }, []);

  if (!analyticsData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: analyticsData.map(item => item.date),
    datasets: [
      {
        label: 'Number of Interviews',
        data: analyticsData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h1>Interview Analytics</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default InterviewAnalytics;
