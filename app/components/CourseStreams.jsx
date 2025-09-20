"use client";

import SubjectCard from './SubjectCard';
import { hasQuestionsAvailable, getTotalQuestionsForSubject } from '../data/index';

const CourseStreams = ({ subjects, onSubjectSelect }) => {
  // Group subjects by course stream
  const groupedSubjects = subjects.reduce((acc, subject) => {
    if (!acc[subject.courseStream]) {
      acc[subject.courseStream] = [];
    }
    acc[subject.courseStream].push(subject);
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {Object.entries(groupedSubjects).map(([stream, streamSubjects]) => (
        <div key={stream} className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">{stream}</h2>
            <span className="text-sm text-gray-600">
              {streamSubjects.length} subjects
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamSubjects.map((subject) => {
              const isLocked = !hasQuestionsAvailable(subject.id);
              const totalQuestions = isLocked ? 0 : getTotalQuestionsForSubject(subject.id);
              return (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  courseStream={stream}
                  isLocked={isLocked}
                  totalQuestions={totalQuestions}
                  onClick={() => !isLocked && onSubjectSelect(subject)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseStreams;