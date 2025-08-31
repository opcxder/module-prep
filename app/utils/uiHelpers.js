export const getScoreColor = (score, total) => {
  const percentage = Math.round((score / total) * 100);
  if (percentage >= 80) return 'text-green-600';
  if (percentage >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const getProgressBarWidth = (currentIndex, total) => {
  return `${((currentIndex + 1) / total) * 100}%`;
};