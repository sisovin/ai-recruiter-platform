-- Enable row-level security for the interviews table
ALTER TABLE interviews ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow only the owner of the interview to access it
CREATE POLICY "Allow owner access" ON interviews
    FOR ALL
    USING (auth.uid() = owner_id);

-- Create a policy to allow only the owner of the interview to insert, update, or delete it
CREATE POLICY "Allow owner modification" ON interviews
    FOR INSERT, UPDATE, DELETE
    USING (auth.uid() = owner_id);
