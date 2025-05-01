import * as nlp from 'compromise';

// Function to analyze AI response
export const analyzeResponse = (response: string) => {
  const doc = nlp(response);
  const sentiment = doc.sentiment().out('text');
  const entities = doc.topics().out('array');
  return { sentiment, entities };
};

// Function to process AI response
export const processResponse = (response: string) => {
  const analysis = analyzeResponse(response);
  const summary = `Sentiment: ${analysis.sentiment}, Entities: ${analysis.entities.join(', ')}`;
  return summary;
};

// Function to extract key phrases from AI response
export const extractKeyPhrases = (response: string) => {
  const doc = nlp(response);
  const keyPhrases = doc.nouns().out('array');
  return keyPhrases;
};

// Function to categorize AI response
export const categorizeResponse = (response: string) => {
  const doc = nlp(response);
  const categories = doc.topics().out('array');
  return categories;
};
