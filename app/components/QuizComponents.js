"use client";

import React from 'react';
import { CheckCircle, XCircle, Clock, BookOpen, Code, Trophy, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { getScoreColor, formatTime } from '../utils/uiHelpers';

export const QuizHeader = ({ title, subtitle }) => (
  <div>
    <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
    <p className="text-gray-600">{subtitle}</p>
  </div>
);

export const QuizTypeSelector = ({ quizType, switchQuizType }) => (
  <div className="flex bg-gray-100 rounded-lg p-1">
    <button
      onClick={() => switchQuizType('theory')}
      className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
        quizType === 'theory' 
          ? 'bg-blue-600 text-white' 
          : 'text-gray-600 hover:text-blue-600'
      }`}
    >
      <BookOpen className="w-4 h-4" />
      Theory
    </button>
    <button
      onClick={() => switchQuizType('coding')}
      className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
        quizType === 'coding' 
          ? 'bg-purple-600 text-white' 
          : 'text-gray-600 hover:text-purple-600'
      }`}
    >
      <Code className="w-4 h-4" />
      Coding
    </button>
  </div>
);

export const QuizStats = ({ timeElapsed, score, totalQuestions }) => (
  <div className="flex items-center gap-4 text-sm text-gray-600">
    <div className="flex items-center gap-1">
      <Clock className="w-4 h-4" />
      {formatTime(timeElapsed)}
    </div>
    <div>
      Score: <span className={`font-semibold ${getScoreColor()}`}>{score}/{totalQuestions}</span>
    </div>
  </div>
);

export const ProgressBar = ({ currentIndex, total, quizType, showExplanation }) => {
  const progress = showExplanation ? ((currentIndex + 1) / total) * 100 : (currentIndex / total) * 100;
  
  return (
    <div className="mt-4">
      <div className="bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${
            quizType === 'theory' ? 'bg-blue-600' : 'bg-purple-600'
          }`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-sm text-gray-600 mt-1">
        <span>Question {currentIndex + 1} of {total}</span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
    </div>
  );
}

export const QuizOption = ({ option, index, selected, showExplanation, isCorrect, onClick, quizType }) => {
  let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ";
  
  if (showExplanation) {
    if (isCorrect) {
      buttonClass += "border-green-500 bg-green-50 text-green-800";
    } else if (selected && !isCorrect) {
      buttonClass += "border-red-500 bg-red-50 text-red-800";
    } else {
      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
    }
  } else if (selected) {
    buttonClass += `border-${quizType === 'theory' ? 'blue' : 'purple'}-500 bg-${quizType === 'theory' ? 'blue' : 'purple'}-100 text-gray-800`;
  } else {
    buttonClass += "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50";
  }

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={showExplanation}
    >
      <div className="flex items-center gap-3">
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
          showExplanation && isCorrect
            ? 'border-green-500 bg-green-500 text-white'
            : showExplanation && selected && !isCorrect
            ? 'border-red-500 bg-red-500 text-white'
            : selected && !showExplanation
            ? `border-${quizType === 'theory' ? 'blue' : 'purple'}-500 bg-${quizType === 'theory' ? 'blue' : 'purple'}-500 text-white`
            : 'border-gray-300'
        }`}>
          {String.fromCharCode(65 + index)}
        </div>
        <span className="flex-1">{option}</span>
        {showExplanation && isCorrect && (
          <CheckCircle className="w-5 h-5 text-green-500" />
        )}
        {showExplanation && selected && !isCorrect && (
          <XCircle className="w-5 h-5 text-red-500" />
        )}
      </div>
    </button>
  );
};

export const QuizExplanation = ({ isCorrect, correctAnswer, explanation }) => (
  <div className={`p-4 rounded-lg mb-6 ${
    isCorrect 
      ? 'bg-green-50 border border-green-200' 
      : 'bg-red-50 border border-red-200'
  }`}>
    <div className="flex items-start gap-3">
      {isCorrect ? (
        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
      )}
      <div>
        <h4 className={`font-semibold mb-2 ${
          isCorrect ? 'text-green-800' : 'text-red-800'
        }`}>
          {isCorrect ? 'Correct!' : 'Incorrect'}
        </h4>
        {!isCorrect && (
          <p className="text-red-700 mb-2">
            The correct answer is: <strong>{correctAnswer}</strong>
          </p>
        )}
        <p className={`text-sm ${
          isCorrect ? 'text-green-700' : 'text-red-700'
        }`}>
          {explanation}
        </p>
      </div>
    </div>
  </div>
);

export const NavigationButtons = ({
  currentIndex,
  totalQuestions,
  showExplanation,
  selectedOption,
  onPrevious,
  onSubmit,
  onNext,
  quizType
}) => (
  <div className="flex justify-between items-center">
    <button
      onClick={onPrevious}
      disabled={currentIndex === 0}
      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Previous
    </button>

    <div className="flex gap-3">
      {!showExplanation ? (
        <button
          onClick={onSubmit}
          disabled={selectedOption === null}
          className={`px-6 py-2 rounded-lg text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
            quizType === 'theory' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={onNext}
          className={`px-6 py-2 rounded-lg text-white font-medium flex items-center gap-2 transition-colors ${
            quizType === 'theory' 
              ? 'bg-blue-600 hover:bg-blue-700' 
              : 'bg-purple-600 hover:bg-purple-700'
          }`}
        >
          {currentIndex < totalQuestions - 1 ? (
            <>
              Next Question
              <ArrowRight className="w-4 h-4" />
            </>
          ) : (
            <>
              Finish Quiz
              <Trophy className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  </div>
);