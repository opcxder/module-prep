// Python Programming Questions
export const pythonQuestions = {
  theory: [
    {
      id: 1,
      question: "Which of the following is the correct way to create a list in Python?",
      options: [
        "list = [1, 2, 3]",
        "list = (1, 2, 3)", 
        "list = {1, 2, 3}",
        "list = 1, 2, 3"
      ],
      correct: 0,
      explanation: "Lists in Python are created using square brackets []. Parentheses () create tuples, curly braces {} create sets or dictionaries.",
      difficulty: "Basic",
      topic: "Data Structures"
    },
    {
      id: 2,
      question: "What is the output of: print(type(3.14))?",
      options: [
        "<class 'int'>",
        "<class 'float'>", 
        "<class 'double'>",
        "<class 'number'>"
      ],
      correct: 1,
      explanation: "3.14 is a floating-point number in Python. The type() function returns <class 'float'> for decimal numbers.",
      difficulty: "Basic",
      topic: "Data Types"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of this Python code?",
      code: `x = [1, 2, 3]
y = x
y.append(4)
print(x)`,
      options: [
        "[1, 2, 3]",
        "[1, 2, 3, 4]", 
        "[4, 1, 2, 3]",
        "Error"
      ],
      correct: 1,
      explanation: "y = x creates a reference to the same list object. When y.append(4) is called, it modifies the original list that x also references.",
      difficulty: "Intermediate",
      topic: "Lists and References"
    },
    {
      id: 12,
      question: "What will this code output?",
      code: `def func(x=[]):
    x.append(1)
    return x

print(func())
print(func())`,
      options: [
        "[1]\\n[1]",
        "[1]\\n[1, 1]", 
        "[1, 1]\\n[1, 1]",
        "Error"
      ],
      correct: 1,
      explanation: "Default arguments are evaluated once when the function is defined. The list x is shared between function calls, so it accumulates values.",
      difficulty: "Advanced",
      topic: "Functions"
    }
  ]
};
