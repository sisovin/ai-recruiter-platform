import { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return createCandidate(req, res);
    case 'GET':
      return getCandidates(req, res);
    case 'PUT':
      return updateCandidate(req, res);
    case 'DELETE':
      return deleteCandidate(req, res);
    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const createCandidate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, title, bio } = req.body;

  const { data, error } = await supabase
    .from('candidates')
    .insert([{ name, title, bio }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(201).json(data);
};

const getCandidates = async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await supabase
    .from('candidates')
    .select('*');

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const updateCandidate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, title, bio } = req.body;

  const { data, error } = await supabase
    .from('candidates')
    .update({ name, title, bio })
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};

const deleteCandidate = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.body;

  const { data, error } = await supabase
    .from('candidates')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
};
