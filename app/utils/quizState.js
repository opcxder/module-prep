"use client";

import { useState } from 'react';

export const useQuizState = (initialQuizType = 'theory') => {
  // Separate states for theory and coding quizzes
  const [theoryState, setTheoryState] = useState({
    currentIndex: 0,
    score: 0,
    timeElapsed: 0,
    startTime: Date.now(),
    answers: {},
    completed: false
  });
  
  const [codingState, setCodingState] = useState({
    currentIndex: 0,
    score: 0,
    timeElapsed: 0,
    startTime: Date.now(),
    answers: {},
    completed: false
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizType, setQuizType] = useState(initialQuizType);
  
  // Get current quiz state based on type
  const currentState = quizType === 'theory' ? theoryState : codingState;
  const setState = quizType === 'theory' ? setTheoryState : setCodingState;

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
      answers: newAnswers
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
      completed: false
    };
    
    if (quizType === 'theory') {
      setTheoryState(resetState);
    } else {
      setCodingState(resetState);
    }
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const switchQuizType = (type) => {
    setQuizType(type);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleEarlySubmit = () => {
    // Enable early submit after answering at least one question
    const answeredQuestions = Object.keys(currentState.answers).length;
    if (answeredQuestions > 0) {
      setState(prev => ({ ...prev, completed: true }));
    }
  };

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
    handleEarlySubmit
  };
};