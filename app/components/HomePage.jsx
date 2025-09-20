"use client";

import React from 'react';
import { Search } from 'lucide-react';
import CourseStreams from './CourseStreams';
import { subjects } from '../data/subjects';

const HomePage = ({ onSubjectSelect }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredSubjects, setFilteredSubjects] = React.useState(subjects);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredSubjects(subjects);
      return;
    }

    const filtered = subjects.filter(subject => 
      subject.name.toLowerCase().includes(query.toLowerCase()) ||
      subject.courseStream.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSubjects(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-4">
            <span className="text-2xl font-bold text-white">CDAC</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Learning Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master your CDAC course with our comprehensive quiz platform.
            Choose your subject and start learning with interactive practice tests!
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search subjects or courses..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-gray-300 bg-white shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-gray-700 placeholder-gray-500 transition-all duration-200"
          />
        </div>

        {/* Course Streams */}
        <CourseStreams 
          subjects={filteredSubjects}
          onSubjectSelect={onSubjectSelect}
        />
      </div>
    </div>
  );
};

export default HomePage;