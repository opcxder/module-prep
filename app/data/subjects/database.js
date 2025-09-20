// Database Management Systems Questions
export const databaseQuestions = {
  theory: [
    {
      id: 1,
      question: "What does ACID stand for in database transactions?",
      options: [
        "Atomicity, Consistency, Isolation, Durability",
        "Accuracy, Consistency, Integrity, Durability", 
        "Atomicity, Concurrency, Isolation, Durability",
        "Accuracy, Concurrency, Integrity, Durability"
      ],
      correct: 0,
      explanation: "ACID properties are: Atomicity (all or nothing), Consistency (valid state transitions), Isolation (concurrent transactions don't interfere), Durability (committed changes persist).",
      difficulty: "Intermediate",
      topic: "Transaction Properties"
    },
    {
      id: 2,
      question: "Which normal form eliminates partial dependencies?",
      options: [
        "1NF",
        "2NF", 
        "3NF",
        "BCNF"
      ],
      correct: 1,
      explanation: "2NF (Second Normal Form) eliminates partial dependencies by ensuring that non-key attributes are fully dependent on the primary key, not just part of it.",
      difficulty: "Intermediate",
      topic: "Database Normalization"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What will this SQL query return?",
      code: `SELECT COUNT(*) 
FROM employees 
WHERE salary > 50000 
GROUP BY department_id;`,
      options: [
        "Total number of employees",
        "Number of employees per department with salary > 50000", 
        "Average salary by department",
        "All employees with salary > 50000"
      ],
      correct: 1,
      explanation: "The query counts employees with salary > 50000, grouped by department_id. It returns the count of such employees for each department.",
      difficulty: "Intermediate",
      topic: "SQL Queries"
    },
    {
      id: 12,
      question: "In a B+ tree index, where are the actual data records stored?",
      code: `B+ Tree Structure:
- Internal nodes: contain keys and pointers
- Leaf nodes: contain keys and data pointers`,
      options: [
        "In the internal nodes",
        "In the leaf nodes", 
        "In a separate data file",
        "In the root node"
      ],
      correct: 2,
      explanation: "In B+ trees, actual data records are stored in a separate data file. Leaf nodes contain keys and pointers to the actual data records, not the data itself.",
      difficulty: "Advanced",
      topic: "Indexing"
    }
  ]
};
