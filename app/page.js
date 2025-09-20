"use client";
import React, { useEffect } from 'react';
import { useQuizState } from './utils/quizState';
import { getQuestionsByType } from './data/index';
import HomePage from './components/HomePage';
import { QuizCompletionScreen, QuizInterface } from './components/QuizUI';
import { subjects } from './data/subjects';

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
    switchQuizType,
    handleEarlySubmit,
    selectedSubject,
    handleSubjectSelect,
    getCurrentQuestions,
    getOverallProgress
  } = useQuizState();

  const currentQuestions = getCurrentQuestions();
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleBackToHome = () => {
    // Reset all quiz state to return to home
    resetQuiz();
    handleSubjectSelect(null);
  };

  // Timer effect
  useEffect(() => {
    let interval;
    
    if (selectedSubject && !quizCompleted && quizStartTime) {
      interval = setInterval(() => {
        const newTime = Math.floor((Date.now() - quizStartTime) / 1000);
        if (!isNaN(newTime) && newTime >= 0) {
          setTimeElapsed(newTime);
        }
      }, 1000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [quizStartTime, quizCompleted, setTimeElapsed, selectedSubject]);


  const handleSelectSubject = (subject) => {
    handleSubjectSelect(subject);
  };

  // Component state monitoring
  useEffect(() => {
    console.log('[Component State]', {
      selectedSubject: selectedSubject?.id,
      quizType,
      quizCompleted,
      currentQuestionIndex,
      timeElapsed,
      score
    });
  }, [selectedSubject, quizType, quizCompleted, currentQuestionIndex, timeElapsed, score]);
  if (!selectedSubject) {
    return <HomePage onSubjectSelect={handleSelectSubject} />;
  }

  if (quizCompleted) {
    return (
      <QuizCompletionScreen
        score={score}
        totalQuestions={currentQuestions.length}
        timeElapsed={timeElapsed}
        quizType={quizType}
        onRetake={resetQuiz}
        onSwitchType={() => switchQuizType(quizType === 'theory' ? 'coding' : 'theory')}
        onBackToHome={handleBackToHome}
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
      userAnswers={userAnswers}
      onOptionSelect={handleOptionSelect}
      onSubmitAnswer={handleSubmitAnswer}
      onNextQuestion={handleNextQuestion}
      onPreviousQuestion={handlePreviousQuestion}
      onSwitchType={switchQuizType}
      onEarlySubmit={handleEarlySubmit}
      onBackToHome={handleBackToHome}
      getOverallProgress={getOverallProgress}
      selectedSubject={selectedSubject}
    />
  );
};

export default CExamPrepApp;