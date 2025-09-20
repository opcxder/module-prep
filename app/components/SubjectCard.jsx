"use client";

import { BookOpen, Code, Database, Network, Cpu, Terminal, Layers, Server, Globe, Zap, BarChart3, Brain, Cloud, Shield, HardDrive, Coffee, Code2, Lock } from 'lucide-react';

const subjectIcons = {
  'c-programming': Code,
  'linux': Terminal,
  'operating-systems': Cpu,
  'data-structures': Layers,
  'database': Database,
  'core-java': Coffee,
  'advanced-java': Code2,
  'dotnet': Globe,
  'web-tech': Globe,
  'spring': Zap,
  'python': Code,
  'r-programming': BarChart3,
  'statistics': BarChart3,
  'machine-learning': Brain,
  'data-visualization': BarChart3,
  'computer-networks': Network,
  'network-security': Shield,
  'cloud-computing': Cloud,
  'system-administration': Server,
  'embedded-c': Cpu,
  'rtos': HardDrive,
  'hardware-design': Cpu,
  'microcontrollers': Cpu
};

const SubjectCard = ({ subject, courseStream, onClick, isLocked = false, totalQuestions = 0 }) => {
  const Icon = subjectIcons[subject.id] || BookOpen;
  
  return (
    <div 
      onClick={isLocked ? undefined : onClick}
      className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 ${
        isLocked 
          ? 'cursor-not-allowed opacity-60' 
          : 'cursor-pointer hover:scale-105 hover:shadow-xl'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg ${subject.color || 'bg-blue-100'}`}>
            <Icon className={`w-6 h-6 ${subject.iconColor || 'text-blue-600'}`} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{subject.name}</h3>
            <p className="text-sm text-gray-600">{courseStream}</p>
            {isLocked && (
              <div className="flex items-center gap-1 mt-1">
                <Lock className="w-3 h-3 text-orange-500" />
                <span className="text-xs text-orange-600 font-medium">Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <span className="text-gray-600">Total Questions</span>
          <p className="font-semibold text-gray-800">{totalQuestions}</p>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 text-center">
          <span className="text-gray-600">Status</span>
          <p className={`font-semibold ${isLocked ? 'text-orange-600' : 'text-green-600'}`}>
            {isLocked ? 'Coming Soon' : 'Available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;