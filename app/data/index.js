// Question data and utility functions
import { theoryQuestions } from './theoryQuestions';
import { codingQuestions } from './codingQuestions';

// Question types enum
export const QuestionTypes = {
  THEORY: 'theory',
  CODING: 'coding'
};

// Get questions by type
export const getQuestionsByType = (type) => {
  switch (type) {
    case QuestionTypes.THEORY:
      return theoryQuestions;
    case QuestionTypes.CODING:
      return codingQuestions;
    default:
      return [];
  }
};

// Get questions by difficulty level
export const getQuestionsByDifficulty = (questions, difficulty) => {
  return questions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
};

// Get questions by topic
export const getQuestionsByTopic = (questions, topic) => {
  return questions.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
};

// Get question statistics
export const getQuestionStats = (questions) => {
  const topics = {};
  const difficulties = {};

  questions.forEach(q => {
    topics[q.topic] = (topics[q.topic] || 0) + 1;
    difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
  });

  return { topics, difficulties };
};

// Export question data
export { theoryQuestions, codingQuestions };