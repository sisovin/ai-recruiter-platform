CREATE TABLE evaluation_metrics (
    id SERIAL PRIMARY KEY,
    interview_id INTEGER REFERENCES interviews(id),
    rating INTEGER NOT NULL,
    comments TEXT NOT NULL
);
