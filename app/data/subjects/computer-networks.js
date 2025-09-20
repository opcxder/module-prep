// Computer Networks Questions
export const computerNetworksQuestions = {
  theory: [
    {
      id: 1,
      question: "What is the primary purpose of the OSI model?",
      options: [
        "To standardize network protocols",
        "To provide a framework for understanding network communication",
        "To create faster networks",
        "To reduce network costs"
      ],
      correct: 1,
      explanation: "The OSI model provides a conceptual framework for understanding how different network protocols work together to enable communication between devices.",
      difficulty: "Basic",
      topic: "Network Models"
    },
    {
      id: 2,
      question: "Which layer of the OSI model handles routing?",
      options: [
        "Physical Layer",
        "Data Link Layer",
        "Network Layer",
        "Transport Layer"
      ],
      correct: 2,
      explanation: "The Network Layer (Layer 3) is responsible for routing packets between different networks using logical addressing.",
      difficulty: "Basic",
      topic: "OSI Model"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the subnet mask for a /24 network?",
      code: `Network: 192.168.1.0/24
Calculate subnet mask`,
      options: [
        "255.255.255.0",
        "255.255.0.0",
        "255.0.0.0",
        "255.255.255.255"
      ],
      correct: 0,
      explanation: "A /24 network means 24 bits are used for the network portion, leaving 8 bits for hosts. This gives us 255.255.255.0 as the subnet mask.",
      difficulty: "Intermediate",
      topic: "Subnetting"
    }
  ]
};
