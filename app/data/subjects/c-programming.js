// C Programming Questions
export const cProgrammingQuestions = {
  theory: [
    {
      id: 1,
      question: "Which of the following correctly declares a function that returns an integer and takes no parameters?",
      options: [
        "int function();",
        "int function(void);", 
        "function int();",
        "int function(null);"
      ],
      correct: 1,
      explanation: "int function(void); explicitly states no parameters. int function(); means the function can take any number of parameters (not recommended in modern C).",
      difficulty: "Basic",
      topic: "Functions"
    },
    {
      id: 2,
      question: "Which operator has the highest precedence in C?",
      options: [
        "+ (Addition)",
        "* (Multiplication)", 
        "() (Parentheses)",
        "= (Assignment)"
      ],
      correct: 2,
      explanation: "Parentheses () have the highest precedence in C, followed by unary operators, then multiplication/division, then addition/subtraction, and finally assignment operators.",
      difficulty: "Basic",
      topic: "Operators"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of the following code?",
      code: `int x = 5;
printf("%d", ++x);`,
      options: [
        "5",
        "6", 
        "4",
        "Undefined"
      ],
      correct: 1,
      explanation: "++x is pre-increment. It first increments x from 5 to 6, then returns the new value 6 for printing.",
      difficulty: "Basic",
      topic: "Operators"
    },
    {
      id: 12,
      question: "What is the output of this code?",
      code: `int a = 10, b = 20;
int *p = &a, *q = &b;
printf("%d", *p + *q);`,
      options: [
        "30",
        "Memory addresses", 
        "10",
        "20"
      ],
      correct: 0,
      explanation: "*p dereferences pointer p to get value 10, *q dereferences pointer q to get value 20. So *p + *q = 10 + 20 = 30.",
      difficulty: "Intermediate",
      topic: "Pointers"
    }
  ]
};
