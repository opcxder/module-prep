// Core Java Questions
export const javaQuestions = {
  theory: [
    {
      id: 1,
      question: "Which keyword is used to create an object in Java?",
      options: [
        "new",
        "create", 
        "object",
        "instance"
      ],
      correct: 0,
      explanation: "The 'new' keyword is used to create new objects in Java. It allocates memory and calls the constructor.",
      difficulty: "Basic",
      topic: "Object Creation"
    },
    {
      id: 2,
      question: "What is the default value of a boolean variable in Java?",
      options: [
        "true",
        "false", 
        "null",
        "undefined"
      ],
      correct: 1,
      explanation: "In Java, boolean variables have a default value of false. This is different from some other languages where booleans might be undefined.",
      difficulty: "Basic",
      topic: "Data Types"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of this Java code?",
      code: `String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2);`,
      options: [
        "true",
        "false", 
        "Error",
        "null"
      ],
      correct: 0,
      explanation: "String literals are interned in Java. Both str1 and str2 point to the same object in the string pool, so == returns true.",
      difficulty: "Intermediate",
      topic: "String Handling"
    },
    {
      id: 12,
      question: "What will this code print?",
      code: `int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr.length);`,
      options: [
        "4",
        "5", 
        "6",
        "Error"
      ],
      correct: 1,
      explanation: "The array has 5 elements: {1, 2, 3, 4, 5}. The length property returns the number of elements, which is 5.",
      difficulty: "Basic",
      topic: "Arrays"
    }
  ]
};
