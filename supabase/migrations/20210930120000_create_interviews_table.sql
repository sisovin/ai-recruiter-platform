CREATE TABLE interviews (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    participants TEXT[] NOT NULL,
    candidate_id INTEGER REFERENCES candidates(id),
    job_id INTEGER REFERENCES jobs(id)
);
