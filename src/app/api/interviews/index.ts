import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createInterview(req, res);
    case 'GET':
      return getInterviews(req, res);
    case 'PUT':
      return updateInterview(req, res);
    case 'DELETE':
      return deleteInterview(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const createInterview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { date, time, participants } = req.body;

  const { data, error } = await supabase
    .from('interviews')
    .insert([{ date, time, participants }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
};

const getInterviews = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase
    .from('interviews')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const updateInterview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, date, time, participants } = req.body;

  const { data, error } = await supabase
    .from('interviews')
    .update({ date, time, participants })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const deleteInterview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  const { data, error } = await supabase
    .from('interviews')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};
