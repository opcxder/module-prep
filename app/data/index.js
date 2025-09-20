/**
 * Question Data Management and Utility Functions
 * 
 * This module serves as the central hub for question data management.
 * It provides functions to:
 * - Load questions by type and subject
 * - Get random question subsets
 * - Filter questions by difficulty and topic
 * - Calculate question statistics
 * 
 * The module maintains a mapping of subject IDs to their respective
 * question data files for efficient loading and organization.
 */

// Import subject-specific questions
import { cProgrammingQuestions } from './subjects/c-programming';
import { linuxQuestions } from './subjects/linux';
import { javaQuestions } from './subjects/java';
import { pythonQuestions } from './subjects/python';
import { operatingSystemsQuestions } from './subjects/operating-systems';
import { dataStructuresQuestions } from './subjects/data-structures';
import { databaseQuestions } from './subjects/database';
import { computerNetworksQuestions } from './subjects/computer-networks';
import { networkSecurityQuestions } from './subjects/network-security';
import { cloudComputingQuestions } from './subjects/cloud-computing';
import { systemAdministrationQuestions } from './subjects/system-administration';
import { embeddedCQuestions } from './subjects/embedded-c';

// Question types enum
const QuestionTypes = {
  THEORY: 'theory',
  CODING: 'coding'
};

// Subject questions mapping
const subjectQuestionsMap = {
  'c-programming': cProgrammingQuestions,
  'linux': linuxQuestions,
  'java': javaQuestions,
  'core-java': javaQuestions, // Alias for core-java
  'python': pythonQuestions,
  'operating-systems': operatingSystemsQuestions,
  'data-structures': dataStructuresQuestions,
  'database': databaseQuestions,
  'computer-networks': computerNetworksQuestions,
  'network-security': networkSecurityQuestions,
  'cloud-computing': cloudComputingQuestions,
  'system-administration': systemAdministrationQuestions,
  'embedded-c': embeddedCQuestions
};

// Get questions by type and subject
const getQuestionsByType = (type, subjectId = 'c-programming', selectedQuestions = []) => {
  // If we already have selected questions, return them
  if (selectedQuestions.length > 0) {
    return selectedQuestions;
  }

  // Get subject-specific questions or fallback to C programming
  const subjectQuestions = subjectQuestionsMap[subjectId] || cProgrammingQuestions;
  
  // Return all available questions (no limit)
  switch (type) {
    case QuestionTypes.THEORY:
      return subjectQuestions.theory || [];
    case QuestionTypes.CODING:
      return subjectQuestions.coding || [];
    default:
      return [];
  }
};

// Check if a subject has questions available
const hasQuestionsAvailable = (subjectId) => {
  const subjectQuestions = subjectQuestionsMap[subjectId];
  if (!subjectQuestions) return false;
  
  const theoryQuestions = subjectQuestions.theory || [];
  const codingQuestions = subjectQuestions.coding || [];
  
  return theoryQuestions.length > 0 || codingQuestions.length > 0;
};

// Get total questions count for a subject (theory + coding)
const getTotalQuestionsForSubject = (subjectId) => {
  const subjectQuestions = subjectQuestionsMap[subjectId];
  if (!subjectQuestions) return 0;
  
  const theoryQuestions = subjectQuestions.theory || [];
  const codingQuestions = subjectQuestions.coding || [];
  
  return theoryQuestions.length + codingQuestions.length;
};

// Export all functions and data
export {
  QuestionTypes,
  getQuestionsByType,
  hasQuestionsAvailable,
  getTotalQuestionsForSubject
};