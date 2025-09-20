// Data Structures & Algorithms Questions
export const dataStructuresQuestions = {
  theory: [
    {
      id: 1,
      question: "What is the time complexity of searching in a binary search tree?",
      options: [
        "O(n)",
        "O(log n)", 
        "O(n²)",
        "O(1)"
      ],
      correct: 1,
      explanation: "In a balanced BST, searching takes O(log n) time as we eliminate half the tree at each step. In worst case (skewed tree), it's O(n).",
      difficulty: "Intermediate",
      topic: "Binary Search Trees"
    },
    {
      id: 2,
      question: "Which data structure follows LIFO (Last In, First Out) principle?",
      options: [
        "Queue",
        "Stack", 
        "Array",
        "Linked List"
      ],
      correct: 1,
      explanation: "Stack follows LIFO principle - the last element added is the first one to be removed. Queue follows FIFO (First In, First Out).",
      difficulty: "Basic",
      topic: "Stack and Queue"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the time complexity of this algorithm?",
      code: `for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        // constant time operation
    }
}`,
      options: [
        "O(n)",
        "O(n log n)", 
        "O(n²)",
        "O(2ⁿ)"
      ],
      correct: 2,
      explanation: "This is a nested loop where both loops run n times. The inner operation runs n×n = n² times, giving O(n²) time complexity.",
      difficulty: "Basic",
      topic: "Time Complexity"
    },
    {
      id: 12,
      question: "In a hash table with chaining, what happens when two keys hash to the same index?",
      code: `Hash function: h(key) = key % 10
Keys: 15, 25, 35`,
      options: [
        "The second key overwrites the first",
        "Both keys are stored in a linked list at that index", 
        "The second key is rejected",
        "A new hash table is created"
      ],
      correct: 1,
      explanation: "In chaining, collisions are handled by storing multiple elements in a linked list at the same hash index. All keys with the same hash value are chained together.",
      difficulty: "Intermediate",
      topic: "Hash Tables"
    }
  ]
};
