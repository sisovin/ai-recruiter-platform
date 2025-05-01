-- Enable row-level security for the candidates table
ALTER TABLE candidates ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow only the owner of the candidate profile to access it
CREATE POLICY "Allow owner access" ON candidates
    FOR ALL
    USING (auth.uid() = owner_id);

-- Create a policy to allow only the owner of the candidate profile to insert, update, or delete it
CREATE POLICY "Allow owner modification" ON candidates
    FOR INSERT, UPDATE, DELETE
    USING (auth.uid() = owner_id);
