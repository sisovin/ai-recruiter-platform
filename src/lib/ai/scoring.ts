/**
 * Module for candidate evaluation algorithms.
 */

/**
 * Function to score candidate responses based on predefined criteria.
 * @param {string} response - The candidate's response.
 * @param {object} criteria - The evaluation criteria.
 * @returns {number} - The score of the candidate's response.
 */
export const scoreResponse = (response: string, criteria: object): number => {
  let score = 0;

  // Example criteria: length of response, presence of keywords, etc.
  if (response.length >= criteria.minLength) {
    score += criteria.lengthWeight;
  }

  criteria.keywords.forEach((keyword: string) => {
    if (response.includes(keyword)) {
      score += criteria.keywordWeight;
    }
  });

  return score;
};

/**
 * Function to evaluate candidate responses.
 * @param {Array<string>} responses - The candidate's responses.
 * @param {object} criteria - The evaluation criteria.
 * @returns {Array<number>} - The scores of the candidate's responses.
 */
export const evaluateResponses = (responses: Array<string>, criteria: object): Array<number> => {
  return responses.map(response => scoreResponse(response, criteria));
};

/**
 * Function to calculate the overall score of a candidate.
 * @param {Array<number>} scores - The scores of the candidate's responses.
 * @returns {number} - The overall score of the candidate.
 */
export const calculateOverallScore = (scores: Array<number>): number => {
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  return totalScore / scores.length;
};
