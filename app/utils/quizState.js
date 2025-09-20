/**
 * Quiz State Management Hook
 * 
 * This custom hook manages all quiz-related state and provides functions
 * to interact with the quiz system. It handles both theory and coding
 * quiz types with separate state management for each.
 * 
 * Features:
 * - Separate state for theory and coding quizzes
 * - Question selection and navigation
 * - Score tracking and progress calculation
 * - Subject management
 * - Quiz completion handling
 * 
 * @param {string} initialQuizType - Initial quiz type ('theory' or 'coding')
 * @returns {Object} Quiz state and control functions
 */
"use client";

import { useState, useEffect } from 'react';
import { getQuestionsByType } from '../data/index';

export const useQuizState = (initialQuizType = 'theory') => {
  // Separate states for theory and coding quizzes
  // This allows users to switch between quiz types without losing progress
  const [theoryState, setTheoryState] = useState({
    currentIndex: 0,        // Current question index
    score: 0,              // Number of correct answers
    timeElapsed: 0,        // Time spent on quiz in seconds
    startTime: Date.now(), // When quiz started
    answers: {},           // User's answers {questionId: {selected, correct, isCorrect}}
    completed: false,      // Whether quiz is completed
    selectedQuestions: [], // Questions selected for this quiz
    totalAnswered: 0       // Total questions answered
  });
  
  const [codingState, setCodingState] = useState({
    currentIndex: 0,
    score: 0,
    timeElapsed: 0,
    startTime: Date.now(),
    answers: {},
    completed: false,
    selectedQuestions: [],
    totalAnswered: 0
  });

  // UI state for current question
  const [selectedOption, setSelectedOption] = useState(null);  // Currently selected option
  const [showExplanation, setShowExplanation] = useState(false); // Show explanation after answer
  const [quizType, setQuizType] = useState(initialQuizType);    // Current quiz type
  const [selectedSubject, setSelectedSubject] = useState(null); // Currently selected subject
  
  // Get current quiz state based on type
  const currentState = quizType === 'theory' ? theoryState : codingState;
  const setState = quizType === 'theory' ? setTheoryState : setCodingState;
  
  // Get current questions from the selected set
  const getCurrentQuestions = () => {
    // Return empty array if no questions are loaded yet
    if (!currentState.selectedQuestions || currentState.selectedQuestions.length === 0) {
      return [];
    }
    return currentState.selectedQuestions;
  };

  const handleOptionSelect = (optionIndex) => {
    if (showExplanation) return;
    setSelectedOption(optionIndex);
  };

  const handleSubmitAnswer = (currentQuestion) => {
    if (selectedOption === null) return;

    const isCorrect = selectedOption === currentQuestion.correct;
    const newAnswers = {
      ...currentState.answers,
      [currentQuestion.id]: {
        selected: selectedOption,
        correct: currentQuestion.correct,
        isCorrect
      }
    };
    
    setState(prev => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      answers: newAnswers,
      totalAnswered: prev.totalAnswered + 1
    }));
    setShowExplanation(true);
  };

  const handleNextQuestion = (questionsLength) => {
    if (currentState.currentIndex < questionsLength - 1) {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1
      }));
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setState(prev => ({ ...prev, completed: true }));
    }
  };

  const handlePreviousQuestion = () => {
    if (currentState.currentIndex > 0) {
      setState(prev => ({
        ...prev,
        currentIndex: prev.currentIndex - 1
      }));
      setSelectedOption(null);
      setShowExplanation(false);
    }
  };

  const resetQuiz = () => {
    const resetState = {
      currentIndex: 0,
      score: 0,
      timeElapsed: 0,
      startTime: Date.now(),
      answers: {},
      completed: false,
      selectedQuestions: getQuestionsByType(quizType, selectedSubject?.id), // Get new set of random questions for current subject
      totalAnswered: 0
    };
    
    if (quizType === 'theory') {
      setTheoryState(resetState);
    } else {
      setCodingState(resetState);
    }
    setSelectedOption(null);
    setShowExplanation(false);
  };

  // Calculate overall progress across both sections
  const getOverallProgress = () => {
    const theoryQuestionsLength = theoryState.selectedQuestions.length || 0;
    const codingQuestionsLength = codingState.selectedQuestions.length || 0;
    const theoryProgress = theoryQuestionsLength > 0 ? theoryState.totalAnswered / theoryQuestionsLength : 0;
    const codingProgress = codingQuestionsLength > 0 ? codingState.totalAnswered / codingQuestionsLength : 0;
    const totalQuestions = theoryQuestionsLength + codingQuestionsLength;
    const totalAnswered = theoryState.totalAnswered + codingState.totalAnswered;
    
    return {
      overall: totalQuestions > 0 ? (totalAnswered / totalQuestions) * 100 : 0,
      theory: theoryProgress * 100,
      coding: codingProgress * 100,
      totalAnswered,
      totalQuestions
    };
  };

  const switchQuizType = (type) => {
    setQuizType(type);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleEarlySubmit = () => {
    // Mark quiz as completed regardless of answers
    setState(prev => ({ ...prev, completed: true }));
  };

  // No navigation event listeners needed

  return {
    currentQuestionIndex: currentState.currentIndex,
    selectedOption,
    showExplanation,
    score: currentState.score,
    userAnswers: currentState.answers,
    quizType,
    quizCompleted: currentState.completed,
    timeElapsed: currentState.timeElapsed,
    setTimeElapsed: (time) => setState(prev => ({ ...prev, timeElapsed: time })),
    quizStartTime: currentState.startTime,
    handleOptionSelect,
    handleSubmitAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    resetQuiz,
    switchQuizType,
    handleEarlySubmit,
    selectedSubject,
    handleSubjectSelect: (subject) => {
      setSelectedSubject(subject);
      
      // Load questions for the selected subject
      if (subject) {
        const theoryQuestions = getQuestionsByType('theory', subject.id);
        const codingQuestions = getQuestionsByType('coding', subject.id);
        const newStartTime = Date.now();
        
        setTheoryState(prev => ({
          ...prev,
          selectedQuestions: theoryQuestions,
          currentIndex: 0,
          score: 0,
          timeElapsed: 0,
          startTime: newStartTime,
          answers: {},
          completed: false,
          totalAnswered: 0
        }));
        
        setCodingState(prev => ({
          ...prev,
          selectedQuestions: codingQuestions,
          currentIndex: 0,
          score: 0,
          timeElapsed: 0,
          startTime: newStartTime,
          answers: {},
          completed: false,
          totalAnswered: 0
        }));
      }
    },
    getCurrentQuestions,
    getOverallProgress
  };
};