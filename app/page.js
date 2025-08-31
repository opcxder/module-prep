"use client";
import React, { useEffect } from 'react';
import { useQuizState } from './utils/quizState';
import { getQuestionsByType } from './data/index';
import { QuizCompletionScreen, QuizInterface } from './components/QuizUI';

const CExamPrepApp = () => {
  const {
    currentQuestionIndex,
    selectedOption,
    showExplanation,
    score,
    userAnswers,
    quizType,
    quizCompleted,
    timeElapsed,
    setTimeElapsed,
    quizStartTime,
    handleOptionSelect,
    handleSubmitAnswer,
    handleNextQuestion,
    handlePreviousQuestion,
    resetQuiz,
    switchQuizType
  } = useQuizState();

  const currentQuestions = getQuestionsByType(quizType);
  const currentQuestion = currentQuestions[currentQuestionIndex];

  // Timer effect
  useEffect(() => {
    if (!quizCompleted) {
      const timer = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - quizStartTime) / 1000));
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quizStartTime, quizCompleted, setTimeElapsed]);

  if (quizCompleted) {
    return (
      <QuizCompletionScreen
        score={score}
        totalQuestions={currentQuestions.length}
        timeElapsed={timeElapsed}
        quizType={quizType}
        onRetake={resetQuiz}
        onSwitchType={() => switchQuizType(quizType === 'theory' ? 'coding' : 'theory')}
      />
    );
  }

  return (
    <QuizInterface
      quizType={quizType}
      currentQuestion={currentQuestion}
      currentIndex={currentQuestionIndex}
      totalQuestions={currentQuestions.length}
      selectedOption={selectedOption}
      showExplanation={showExplanation}
      score={score}
      timeElapsed={timeElapsed}
      onOptionSelect={handleOptionSelect}
      onSubmitAnswer={handleSubmitAnswer}
      onNextQuestion={handleNextQuestion}
      onPreviousQuestion={handlePreviousQuestion}
      onSwitchType={switchQuizType}
    />
  );
};

export default CExamPrepApp;