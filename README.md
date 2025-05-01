# AI Recruiter Platform

## Description
This project is an AI-powered recruiter platform that helps recruiters manage candidates and job applications efficiently. It leverages Next.js, Supabase, and Vapi.ai to provide a seamless experience for both recruiters and candidates.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
     VAPI_API_KEY=your-vapi-api-key
     ```

4. Initialize the Supabase database:
   - Sign up for a Supabase account at https://supabase.io/
   - Create a new project and obtain the Supabase URL and anon key.
   - Run the database migrations (if any).

## Running the Project
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Vercel Deployment Instructions
1. Create a Vercel account at https://vercel.com/
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Log in to Vercel:
   ```bash
   vercel login
   ```
4. Deploy the project:
   ```bash
   vercel
   ```

## Monitoring Setup Instructions
1. Enable Vercel's built-in monitoring for your project.
2. Configure alerts and notifications as needed.

## API Documentation
- [API Documentation](docs/api.md)

## Component Library Documentation
- [Component Library Documentation](docs/components.md)
