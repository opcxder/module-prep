"use client";

import React from 'react';
import { Trophy, Code, BookOpen, RotateCcw } from 'lucide-react';
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

export const QuizCompletionScreen = ({ score, totalQuestions, timeElapsed, quizType, onRetake, onSwitchType }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="mb-8">
            <Trophy className={`w-20 h-20 mx-auto mb-4 ${getScoreColor()}`} />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
            <div className={`text-6xl font-bold ${getScoreColor()} mb-4`}>
              {percentage}%
            </div>
            <p className="text-xl text-gray-600">
              You scored {score} out of {totalQuestions} questions
            </p>
            <p className="text-lg text-gray-500 mt-2">
              Time taken: {formatTime(timeElapsed)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-green-600 text-2xl font-bold">{score}</div>
              <div className="text-green-800">Correct Answers</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="text-red-600 text-2xl font-bold">{totalQuestions - score}</div>
              <div className="text-red-800">Incorrect Answers</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={onRetake}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Retake {quizType === 'theory' ? 'Theory' : 'Coding'} Quiz
            </button>
            <button
              onClick={onSwitchType}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              {quizType === 'theory' ? <Code className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
              Try {quizType === 'theory' ? 'Coding' : 'Theory'} Quiz
            </button>
          </div>
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
  showExplanation,
  score,
  timeElapsed,
  onOptionSelect,
  onSubmitAnswer,
  onNextQuestion,
  onPreviousQuestion,
  onSwitchType,
  onEarlySubmit
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <QuizHeader 
              title="CDAC C Module Exam Prep"
              subtitle="Master C Programming Fundamentals"
            />
            
            <div className="flex items-center gap-4">
              <QuizTypeSelector quizType={quizType} switchQuizType={onSwitchType} />
              <QuizStats 
                timeElapsed={timeElapsed}
                score={score}
                totalQuestions={totalQuestions}
              />
            </div>
          </div>
          
          <ProgressBar currentIndex={currentIndex} total={totalQuestions} quizType={quizType} showExplanation={showExplanation} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className={`p-6 ${quizType === 'theory' ? 'bg-blue-50' : 'bg-purple-50'} border-b`}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(currentQuestion.difficulty)}`}>
                {currentQuestion.difficulty}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                quizType === 'theory' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
              }`}>
                {currentQuestion.topic}
              </span>
              <span className="text-sm text-gray-500">#{currentQuestion.id}</span>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {currentQuestion.question}
            </h2>
            
            {currentQuestion.code && (
              <div className="bg-gray-900 rounded-lg p-4 mt-4">
                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
                  <code>{currentQuestion.code}</code>
                </pre>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <QuizOption
                  key={index}
                  option={option}
                  index={index}
                  selected={selectedOption === index}
                  showExplanation={showExplanation}
                  isCorrect={index === currentQuestion.correct}
                  onClick={() => onOptionSelect(index)}
                  quizType={quizType}
                />
              ))}
            </div>

            {showExplanation && (
              <QuizExplanation
                isCorrect={selectedOption === currentQuestion.correct}
                correctAnswer={currentQuestion.options[currentQuestion.correct]}
                explanation={currentQuestion.explanation}
              />
            )}

            <div className="space-y-4">
              <NavigationButtons
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                showExplanation={showExplanation}
                selectedOption={selectedOption}
                onPrevious={onPreviousQuestion}
                onSubmit={() => onSubmitAnswer(currentQuestion)}
                onNext={() => onNextQuestion(totalQuestions)}
                quizType={quizType}
              />
              <div className="flex justify-center">
                <button
                  onClick={onEarlySubmit}
                  disabled={Object.keys(score).length === 0}
                  className={`px-6 py-2 rounded-lg text-white font-medium transition-colors
                    ${quizType === 'theory' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'}
                    ${Object.keys(score).length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Submit Quiz Early
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};