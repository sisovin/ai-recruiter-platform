CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    interview_id INTEGER REFERENCES interviews(id)
);
