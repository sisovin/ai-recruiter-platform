import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createJob(req, res);
    case 'GET':
      return getJobs(req, res);
    case 'PUT':
      return updateJob(req, res);
    case 'DELETE':
      return deleteJob(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const createJob = async (req: NextApiRequest, res: NextApiResponse) => {
  const { title, description, requirements } = req.body;

  const { data, error } = await supabase
    .from('jobs')
    .insert([{ title, description, requirements }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
};

const getJobs = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const updateJob = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, description, requirements } = req.body;

  const { data, error } = await supabase
    .from('jobs')
    .update({ title, description, requirements })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const deleteJob = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  const { data, error } = await supabase
    .from('jobs')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};
