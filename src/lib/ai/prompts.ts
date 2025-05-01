type QuestionTemplate = {
  id: string;
  role: string;
  question: string;
};

const questionTemplates: QuestionTemplate[] = [
  { id: '1', role: 'Software Engineer', question: 'What is your experience with JavaScript?' },
  { id: '2', role: 'Software Engineer', question: 'Can you explain the concept of closures in JavaScript?' },
  { id: '3', role: 'Data Scientist', question: 'How do you handle missing data in a dataset?' },
  { id: '4', role: 'Data Scientist', question: 'What is the difference between supervised and unsupervised learning?' },
  { id: '5', role: 'Product Manager', question: 'How do you prioritize features for a new product?' },
  { id: '6', role: 'Product Manager', question: 'Can you describe a time when you had to manage a difficult stakeholder?' },
];

// Function to retrieve questions for a specific role
export const getQuestionsForRole = (role: string): QuestionTemplate[] => {
  return questionTemplates.filter(template => template.role === role);
};

// Function to format a question template
export const formatQuestion = (template: QuestionTemplate): string => {
  return `Role: ${template.role}\nQuestion: ${template.question}`;
};
