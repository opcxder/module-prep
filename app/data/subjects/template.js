// Template for creating new subject questions
// Copy this file and rename it to your subject (e.g., 'new-subject.js')
// Then update the export name and add your questions

export const newSubjectQuestions = {
  theory: [
    {
      id: 1,
      question: "Your theory question here?",
      options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
      ],
      correct: 0, // Index of correct answer (0-3)
      explanation: "Explanation of why this answer is correct and what the other options mean.",
      difficulty: "Basic", // Basic, Intermediate, Advanced, Expert
      topic: "Topic Name"
    },
    {
      id: 2,
      question: "Another theory question?",
      options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
      ],
      correct: 1,
      explanation: "Detailed explanation of the correct answer.",
      difficulty: "Intermediate",
      topic: "Another Topic"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of this code?",
      code: `// Your code snippet here
int x = 5;
printf("%d", x);`,
      options: [
        "5",
        "Error", 
        "Undefined",
        "0"
      ],
      correct: 0,
      explanation: "Explanation of what the code does and why it produces this output.",
      difficulty: "Basic",
      topic: "Code Analysis"
    },
    {
      id: 12,
      question: "What will this code output?",
      code: `// Another code snippet
for(int i = 0; i < 3; i++) {
    printf("%d ", i);
}`,
      options: [
        "0 1 2",
        "1 2 3", 
        "0 1 2 3",
        "Error"
      ],
      correct: 0,
      explanation: "The loop runs from 0 to 2 (i < 3), so it prints 0, 1, 2.",
      difficulty: "Intermediate",
      topic: "Loops"
    }
  ]
};

// Instructions for adding new subjects:
// 1. Copy this template file
// 2. Rename it to match your subject ID (e.g., 'advanced-java.js')
// 3. Update the export name to match (e.g., 'advancedJavaQuestions')
// 4. Add your questions following the same structure
// 5. Import the new questions in data/index.js
// 6. Add the subject to the subjectQuestionsMap in data/index.js
// 7. Add the subject to subjects.js with proper metadata
