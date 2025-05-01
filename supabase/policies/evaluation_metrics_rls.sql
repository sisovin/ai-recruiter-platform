-- Enable row-level security for the evaluation_metrics table
ALTER TABLE evaluation_metrics ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow only the owner of the evaluation metrics to access it
CREATE POLICY "Allow owner access" ON evaluation_metrics
    FOR ALL
    USING (auth.uid() = owner_id);

-- Create a policy to allow only the owner of the evaluation metrics to insert, update, or delete it
CREATE POLICY "Allow owner modification" ON evaluation_metrics
    FOR INSERT, UPDATE, DELETE
    USING (auth.uid() = owner_id);
