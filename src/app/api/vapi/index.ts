import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { callId, userId } = req.body;

    // Initialize the call
    console.log('Initializing call:', { callId, userId });

    res.status(200).json({ message: 'Call initialized' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export const initializeCall = async (callId: string, userId: string) => {
  // Logic to initialize the call
  console.log('Initializing call:', { callId, userId });
  return { message: 'Call initialized' };
};
