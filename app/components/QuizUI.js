"use client";

import React from 'react';
import { Trophy, Code, BookOpen, RotateCcw, Home } from 'lucide-react';
import { getScoreColor, formatTime } from '../utils/uiHelpers';
import { getDifficultyColor } from '../utils/colors';
import {
  QuizHeader,
  QuizTypeSelector,
  QuizStats,
  ProgressBar,
  QuizOption,
  QuizExplanation,
  NavigationButtons
} from './QuizComponents';

export const QuizCompletionScreen = ({ score, totalQuestions, timeElapsed, quizType, onRetake, onSwitchType, onBackToHome }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const incorrectAnswers = totalQuestions - score;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-3 md:p-4 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto space-y-4">
        {/* Header */}
        <div className="text-center space-y-3 py-4">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-2">
            <Trophy className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Quiz Completed!
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-lg mx-auto leading-tight">
            Great job completing the {quizType === 'theory' ? 'Theory' : 'Coding'} quiz!
          </p>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Score Header */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 text-center border-b border-gray-200">
            <div className={`text-4xl md:text-5xl font-bold ${getScoreColor(score, totalQuestions)} mb-2`}>
              {percentage}%
            </div>
            <p className="text-sm md:text-base text-gray-700 mb-1">
              You scored <span className="font-semibold text-gray-800">{score}</span> out of <span className="font-semibold text-gray-800">{totalQuestions}</span> questions
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              Time: <span className="font-semibold">{formatTime(timeElapsed)}</span>
            </p>
          </div>

          {/* Detailed Results */}
          <div className="p-4">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-2.5 rounded-lg border border-green-200 text-center">
                <div className="text-green-600 text-xl md:text-2xl font-bold mb-0.5">{score}</div>
                <div className="text-green-800 font-medium text-xs">Correct</div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-2.5 rounded-lg border border-red-200 text-center">
                <div className="text-red-600 text-xl md:text-2xl font-bold mb-0.5">{incorrectAnswers}</div>
                <div className="text-red-800 font-medium text-xs">Incorrect</div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-2.5 rounded-lg border border-blue-200 text-center">
                <div className="text-blue-600 text-xl md:text-2xl font-bold mb-0.5">{formatTime(timeElapsed)}</div>
                <div className="text-blue-800 font-medium text-xs">Time</div>
              </div>
            </div>

            {/* Performance Message */}
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <h3 className="text-sm md:text-base font-semibold text-gray-800 mb-1">Performance Summary</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-snug">
                {percentage >= 80 ? (
                  "Excellent work! You have a strong understanding of the material. Keep up the great work!"
                ) : percentage >= 60 ? (
                  "Good job! You're making solid progress. Review the topics you missed and try again."
                ) : (
                  "Keep practicing! Review the material and try the quiz again to improve your score."
                )}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={onRetake}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg font-medium flex-1 text-sm"
              >
                <RotateCcw className="w-4 h-4" />
                Retake {quizType === 'theory' ? 'Theory' : 'Coding'} Quiz
              </button>
              <button
                onClick={onSwitchType}
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg font-medium flex-1 text-sm"
              >
                {quizType === 'theory' ? <Code className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                Try {quizType === 'theory' ? 'Coding' : 'Theory'} Quiz
              </button>
            </div>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center">
          <button
            onClick={onBackToHome}
            className="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md hover:shadow-lg font-medium mx-auto text-sm"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export const QuizInterface = ({
  quizType,
  currentQuestion,
  currentIndex,
  totalQuestions,
  selectedOption,
  selectedOptions,
  showExplanation,
  score,
  timeElapsed,
  userAnswers,
  onOptionSelect,
  onSubmitAnswer,
  onNextQuestion,
  onPreviousQuestion,
  onSwitchType,
  onEarlySubmit,
  onBackToHome,
  getOverallProgress,
  selectedSubject
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          {/* Header Controls */}
          <div className="flex items-center justify-between mb-3">
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200 font-medium text-sm"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
            
            <div className="flex items-center gap-3">
              <QuizTypeSelector quizType={quizType} switchQuizType={onSwitchType} />
              <QuizStats 
                timeElapsed={timeElapsed}
                score={score}
                totalQuestions={totalQuestions}
              />
            </div>
          </div>

          {/* Header Content with Progress */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3">
            <QuizHeader 
              title={`CDAC ${selectedSubject?.name || 'Subject'} Exam Prep`}
              subtitle={`Master ${selectedSubject?.name || 'Subject'} Fundamentals`}
            />
            
            {/* Progress Section - Inline */}
            <div className="lg:ml-auto">
              <ProgressBar 
                currentIndex={currentIndex} 
                total={totalQuestions} 
                quizType={quizType} 
                showExplanation={showExplanation}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Question Header */}
          <div className={`p-4 ${quizType === 'theory' ? 'bg-blue-50' : 'bg-purple-50'} border-b border-gray-200`}>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                quizType === 'theory' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {currentQuestion.topic}
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                #{currentQuestion.id}
              </span>
            </div>
            
            <h2 className="text-lg font-bold text-gray-800 mb-3 leading-relaxed">
              {currentQuestion.question}
            </h2>
            
            {/* Multi-select instruction */}
            {Array.isArray(currentQuestion.correct) && (
              <p className="text-sm text-gray-600 mb-3 font-medium">
                📋 Select {currentQuestion.correct.length} options
              </p>
            )}
            
            {currentQuestion.code && (
              <div className="bg-gray-900 rounded-lg p-4 mt-3 shadow-inner">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-xs ml-2 font-mono">Code</span>
                </div>
                <div className="overflow-x-auto">
                  <pre className="text-green-400 text-xs font-mono leading-relaxed min-w-max">
                    <code>{currentQuestion.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>

          {/* Options Section */}
          <div className="p-4">
            <div className="space-y-2 mb-4">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  option={option}
                  index={index}
                  selected={selectedOption === index}
                  showExplanation={showExplanation}
                  isCorrect={Array.isArray(currentQuestion.correct) 
                    ? currentQuestion.correct.includes(index)
                    : index === currentQuestion.correct
                  }
                  onClick={() => onOptionSelect(index)}
                  quizType={quizType}
                />
              ))}
            </div>

            {showExplanation && (
              <QuizExplanation
                isCorrect={Array.isArray(currentQuestion.correct) 
                  ? currentQuestion.correct.includes(selectedOption)
                  : selectedOption === currentQuestion.correct
                }
                correctAnswer={Array.isArray(currentQuestion.correct) 
                  ? currentQuestion.correct.map(index => currentQuestion.options[index])
                  : currentQuestion.options[currentQuestion.correct]
                }
                explanation={currentQuestion.explanation}
              />
            )}

            <div className="space-y-3">
              <NavigationButtons
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                showExplanation={showExplanation}
                selectedOption={selectedOption}
                selectedOptions={selectedOptions}
                currentQuestion={currentQuestion}
                onPrevious={onPreviousQuestion}
                onSubmit={() => onSubmitAnswer(currentQuestion)}
                onNext={() => onNextQuestion(totalQuestions)}
                quizType={quizType}
              />
              
              {/* Early Submit Section */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={onEarlySubmit}
                  disabled={Object.keys(userAnswers).length === 0}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 relative group border text-sm ${
                    Object.keys(userAnswers).length === 0 
                      ? 'opacity-50 cursor-not-allowed bg-gray-100 text-gray-400 border-gray-200' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500 shadow-sm hover:shadow-md'
                  }`}
                  title="Submit quiz after answering at least one question"
                >
                  🚀 Submit Quiz Early
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Available after answering at least one question
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};