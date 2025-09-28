"use client";

import React from 'react';
import { CheckCircle, XCircle, Clock, BookOpen, Code, Trophy, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
import { getScoreColor, formatTime } from '../utils/uiHelpers';

export const QuizHeader = ({ title, subtitle }) => (
  <div className="flex-1">
    <div className="flex items-center gap-3 mb-1">
      <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
      <h1 className="text-xl font-bold text-gray-800">{title}</h1>
    </div>
    <p className="text-gray-600 text-sm ml-5">{subtitle}</p>
  </div>
);

export const QuizTypeSelector = ({ quizType, switchQuizType }) => (
  <div className="flex bg-gray-100 rounded-lg p-0.5">
    <button
      onClick={() => switchQuizType('theory')}
      className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all duration-200 text-sm font-medium ${
        quizType === 'theory' 
          ? 'bg-blue-600 text-white shadow-sm' 
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      <BookOpen className="w-3.5 h-3.5" />
      Theory
    </button>
    <button
      onClick={() => switchQuizType('coding')}
      className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all duration-200 text-sm font-medium ${
        quizType === 'coding' 
          ? 'bg-purple-600 text-white shadow-sm' 
          : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
      }`}
    >
      <Code className="w-3.5 h-3.5" />
      Coding
    </button>
  </div>
);

export const QuizStats = ({ timeElapsed, score, totalQuestions }) => (
  <div className="flex items-center gap-3">
    {/* Timer */}
    <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200">
      <Clock className="w-3.5 h-3.5 text-blue-600" />
      <span className="font-semibold text-blue-800 text-sm">{formatTime(timeElapsed)}</span>
    </div>
    
    {/* Score */}
    <div className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
      <Trophy className="w-3.5 h-3.5 text-gray-600" />
      <span className="text-gray-600 font-medium text-sm">Score:</span>
      <span className={`font-bold text-base ${getScoreColor(score, totalQuestions)}`}>
        {score}/{totalQuestions}
      </span>
    </div>
  </div>
);

export const ProgressBar = ({ currentIndex, total, quizType, showExplanation }) => {
  // Current section progress
  const currentProgress = showExplanation ? ((currentIndex + 1) / total) * 100 : (currentIndex / total) * 100;
  
  return (
    <div className="mt-3">
      {/* Simple Progress Bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${quizType === 'theory' ? 'bg-blue-500' : 'bg-purple-500'}`}></div>
          <span className="font-medium text-gray-800 text-sm">
            {quizType === 'theory' ? 'Theory' : 'Coding'} Quiz
          </span>
        </div>
        <span className="text-xs font-medium text-gray-600">
          {currentIndex + 1} of {total}
        </span>
      </div>
      
      <div className="bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-300 ease-out ${
            quizType === 'theory' 
              ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
              : 'bg-gradient-to-r from-purple-500 to-purple-600'
          }`}
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
    </div>
  );
}

export const QuizOption = ({ option, index, selected, showExplanation, isCorrect, onClick, quizType, isMultiSelect }) => {
  let buttonClass = "w-full p-3 text-left rounded-lg border-2 transition-all duration-200 cursor-pointer group ";
  
  if (showExplanation) {
    if (isCorrect) {
      buttonClass += "border-green-500 bg-green-50 text-green-800 shadow-sm";
    } else if (selected && !isCorrect) {
      buttonClass += "border-red-500 bg-red-50 text-red-800 shadow-sm";
    } else {
      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
    }
  } else if (selected) {
    if (quizType === 'theory') {
      buttonClass += "border-blue-500 bg-blue-50 text-gray-800 shadow-sm";
    } else {
      buttonClass += "border-purple-500 bg-purple-50 text-gray-800 shadow-sm";
    }
  } else {
    buttonClass += "border-gray-200 bg-white text-gray-800 hover:border-gray-300 hover:bg-gray-50 hover:shadow-sm";
  }

  return (
    <button
      onClick={onClick}
      className={buttonClass}
      disabled={showExplanation}
      style={{ pointerEvents: showExplanation ? 'none' : 'auto' }}
    >
      <div className="flex items-center gap-3">
        {isMultiSelect ? (
          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
            selected
              ? quizType === 'theory' 
                ? 'border-blue-500 bg-blue-500'
                : 'border-purple-500 bg-purple-500'
              : 'border-gray-300 group-hover:border-gray-400'
          }`}>
            {selected && (
              <CheckCircle className="w-4 h-4 text-white" />
            )}
          </div>
        ) : (
          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center text-xs font-bold transition-all duration-200 ${
            showExplanation && isCorrect
              ? 'border-green-500 bg-green-500 text-white'
              : showExplanation && selected && !isCorrect
              ? 'border-red-500 bg-red-500 text-white'
              : selected && !showExplanation
              ? quizType === 'theory' 
                ? 'border-blue-500 bg-blue-500 text-white'
                : 'border-purple-500 bg-purple-500 text-white'
              : 'border-gray-300 group-hover:border-gray-400'
          }`}>
            {String.fromCharCode(65 + index)}
          </div>
        )}
        <span className="flex-1 text-sm font-medium leading-relaxed">{option}</span>
        {showExplanation && isCorrect && (
          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
        )}
        {showExplanation && selected && !isCorrect && (
          <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
        )}
      </div>
    </button>
  );
};

export const QuizExplanation = ({ isCorrect, correctAnswer, explanation }) => {
  // Handle multiple correct answers (array) or single correct answer
  const formatCorrectAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return answer.map((ans, index) => (
        <div key={index} className="mb-1">
          <span className="text-red-700 font-semibold text-sm">
            {String.fromCharCode(65 + ans)}: {ans}
          </span>
        </div>
      ));
    }
    return <span className="text-red-700 font-semibold text-sm">{answer}</span>;
  };

  return (
    <div className={`p-4 rounded-lg mb-4 shadow-sm ${
      isCorrect 
        ? 'bg-green-50 border border-green-200' 
        : 'bg-red-50 border border-red-200'
    }`}>
      <div className="flex items-start gap-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
          isCorrect ? 'bg-green-500' : 'bg-red-500'
        }`}>
          {isCorrect ? (
            <CheckCircle className="w-4 h-4 text-white" />
          ) : (
            <XCircle className="w-4 h-4 text-white" />
          )}
        </div>
        <div className="flex-1">
          <h4 className={`text-lg font-bold mb-2 ${
            isCorrect ? 'text-green-800' : 'text-red-800'
          }`}>
            {isCorrect ? '🎉 Correct!' : '❌ Incorrect'}
          </h4>
          {!isCorrect && (
            <div className="bg-white rounded-lg p-3 mb-3 border border-red-200">
              <p className="text-red-800 font-medium mb-1 text-sm">Correct Answer:</p>
              {formatCorrectAnswer(correctAnswer)}
            </div>
          )}
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <p className="text-gray-700 font-medium mb-1 text-sm">Explanation:</p>
            <p className={`text-sm leading-relaxed ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const NavigationButtons = ({
  currentIndex,
  totalQuestions,
  showExplanation,
  selectedOption,
  selectedOptions,
  currentQuestion,
  onPrevious,
  onSubmit,
  onNext,
  quizType
}) => (
  <div className="flex justify-between items-center pt-4 border-t border-gray-200">
    <button
      onClick={onPrevious}
      disabled={currentIndex === 0}
      className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium text-sm"
    >
      <ArrowLeft className="w-4 h-4" />
      Previous
    </button>

    <div className="flex gap-3">
      {!showExplanation ? (
        <button
          onClick={onSubmit}
          disabled={
            Array.isArray(currentQuestion?.correct) 
              ? selectedOptions?.length === 0
              : selectedOption === null
          }
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md text-sm ${
            Array.isArray(currentQuestion?.correct)
              ? selectedOptions?.length > 0
                ? quizType === 'theory' 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-gray-500'
              : selectedOption !== null
                ? quizType === 'theory' 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white'
                : 'bg-gray-300 text-gray-500'
          }`}
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={onNext}
          className={`px-6 py-2 rounded-lg text-white font-semibold flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md text-sm ${
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