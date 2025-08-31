import { theoryQuestions } from '../data/questions';

export const QuizTypes = {
  THEORY: 'theory',
  CODING: 'coding'
};

export const getQuestionsByType = (type) => {
  switch (type) {
    case QuizTypes.THEORY:
      return theoryQuestions;
    case QuizTypes.CODING:
      return codingQuestions;
    default:
      return [];
  }
};

export const getQuestionsByDifficulty = (questions, difficulty) => {
  return questions.filter(q => q.difficulty.toLowerCase() === difficulty.toLowerCase());
};

export const getQuestionsByTopic = (questions, topic) => {
  return questions.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
};

export const getQuestionStats = (questions) => {
  const topics = {};
  const difficulties = {};

  questions.forEach(q => {
    topics[q.topic] = (topics[q.topic] || 0) + 1;
    difficulties[q.difficulty] = (difficulties[q.difficulty] || 0) + 1;
  });

  return { topics, difficulties };
};