import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { event, data } = req.body;

    // Handle the Vapi.ai webhook event
    switch (event) {
      case 'candidate_applied':
        // Process candidate application
        console.log('Candidate applied:', data);
        break;
      case 'interview_scheduled':
        // Process interview scheduling
        console.log('Interview scheduled:', data);
        break;
      case 'job_offer':
        // Process job offer
        console.log('Job offer:', data);
        break;
      case 'call_initiated':
        // Process call initiation
        console.log('Call initiated:', data);
        break;
      case 'call_ended':
        // Process call end
        console.log('Call ended:', data);
        break;
      default:
        console.log('Unhandled event:', event);
    }

    res.status(200).json({ message: 'Webhook received' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
