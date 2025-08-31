export const getScoreColor = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage >= 80) return 'text-green-600';
  if (percentage >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

export const getDifficultyColor = (difficulty) => {
  switch (difficulty) {
    case 'Basic': return 'bg-green-100 text-green-800';
    case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
    case 'Advanced': return 'bg-orange-100 text-orange-800';
    case 'Expert': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};