// Operating Systems Questions
export const operatingSystemsQuestions = {
  theory: [
    {
      id: 1,
      question: "What is the main purpose of an operating system?",
      options: [
        "To provide a user interface",
        "To manage computer hardware and software resources", 
        "To run applications",
        "To store data"
      ],
      correct: 1,
      explanation: "The primary purpose of an OS is to manage hardware and software resources, providing a platform for applications to run efficiently.",
      difficulty: "Basic",
      topic: "OS Fundamentals"
    },
    {
      id: 2,
      question: "Which scheduling algorithm provides the shortest average waiting time?",
      options: [
        "First Come First Served (FCFS)",
        "Shortest Job First (SJF)", 
        "Round Robin",
        "Priority Scheduling"
      ],
      correct: 1,
      explanation: "SJF (Shortest Job First) provides the shortest average waiting time because it prioritizes shorter processes, reducing overall waiting time.",
      difficulty: "Intermediate",
      topic: "Process Scheduling"
    }
  ],
  coding: [
    {
      id: 11,
      question: "In a system with 3 processes and 4 resources, what is the maximum number of resources that can be allocated to prevent deadlock?",
      code: `Processes: P1, P2, P3
Resources: R1, R2, R3, R4
Each process needs maximum 2 resources`,
      options: [
        "3",
        "4", 
        "5",
        "6"
      ],
      correct: 0,
      explanation: "To prevent deadlock, we need at least one process to be able to complete. With 3 processes needing max 2 resources each, we can allocate at most 3 resources (leaving 1 free).",
      difficulty: "Advanced",
      topic: "Deadlock Prevention"
    },
    {
      id: 12,
      question: "What is the page fault rate if a process has 100 page references and 20 page faults occur?",
      code: `Total page references: 100
Page faults: 20`,
      options: [
        "0.1",
        "0.2", 
        "0.8",
        "1.0"
      ],
      correct: 1,
      explanation: "Page fault rate = Number of page faults / Total page references = 20/100 = 0.2 or 20%.",
      difficulty: "Intermediate",
      topic: "Memory Management"
    }
  ]
};
