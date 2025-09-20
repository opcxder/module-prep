// Network Security Questions
export const networkSecurityQuestions = {
  theory: [
    {
      id: 1,
      question: "What is the primary purpose of a firewall?",
      options: [
        "To increase network speed",
        "To monitor and control network traffic",
        "To store network data",
        "To connect multiple networks"
      ],
      correct: 1,
      explanation: "A firewall monitors and controls incoming and outgoing network traffic based on predetermined security rules.",
      difficulty: "Basic",
      topic: "Firewalls"
    },
    {
      id: 2,
      question: "What does VPN stand for?",
      options: [
        "Virtual Private Network",
        "Very Private Network",
        "Virtual Public Network",
        "Verified Private Network"
      ],
      correct: 0,
      explanation: "VPN stands for Virtual Private Network, which creates a secure connection over a public network.",
      difficulty: "Basic",
      topic: "VPN"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of this encryption process?",
      code: `Plaintext: "HELLO"
Caesar Cipher (shift=3)`,
      options: [
        "KHOOR",
        "HELLO",
        "ABCDE",
        "12345"
      ],
      correct: 0,
      explanation: "Caesar cipher shifts each letter by 3 positions. H->K, E->H, L->O, L->O, O->R. Result: KHOOR",
      difficulty: "Basic",
      topic: "Encryption"
    }
  ]
};
