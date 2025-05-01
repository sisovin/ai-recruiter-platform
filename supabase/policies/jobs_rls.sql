-- Enable row-level security for the jobs table
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow only the owner of the job posting to access it
CREATE POLICY "Allow owner access" ON jobs
    FOR ALL
    USING (auth.uid() = owner_id);

-- Create a policy to allow only the owner of the job posting to insert, update, or delete it
CREATE POLICY "Allow owner modification" ON jobs
    FOR INSERT, UPDATE, DELETE
    USING (auth.uid() = owner_id);
