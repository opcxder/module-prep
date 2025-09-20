// Linux Administration Questions
export const linuxQuestions = {
  theory: [
    {
      id: 1,
      question: "Which command is used to change file permissions in Linux?",
      options: [
        "chmod",
        "chown", 
        "chgrp",
        "permission"
      ],
      correct: 0,
      explanation: "chmod (change mode) is used to change file permissions. chown changes ownership, chgrp changes group ownership.",
      difficulty: "Basic",
      topic: "File Permissions",
    },
    {
      id: 2,
      question: "What does the 'ls -la' command display?",
      options: [
        "Only hidden files",
        "Files with long format including hidden files", 
        "Only directories",
        "Files sorted by size"
      ],
      correct: 1,
      explanation: "ls -la displays files in long format (-l) including hidden files (-a). The long format shows permissions, ownership, size, and modification date.",
      difficulty: "Basic",
      topic: "File Commands"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What will this shell script output?",
      code: `#!/bin/bash
x=5
y=10
echo $((x + y))`,
      options: [
        "15",
        "5+10", 
        "x+y",
        "Error"
      ],
      correct: 0,
      explanation: "The $(( )) syntax performs arithmetic expansion. x=5 and y=10, so $((x + y)) evaluates to 15.",
      difficulty: "Basic",
      topic: "Shell Scripting"
    },
    {
      id: 12,
      question: "What does this command do: 'find /home -name \"*.txt\" -type f'?",
      code: `find /home -name "*.txt" -type f`,
      options: [
        "Finds all directories named *.txt",
        "Finds all files with .txt extension in /home", 
        "Creates .txt files in /home",
        "Lists all files in /home"
      ],
      correct: 1,
      explanation: "find searches for files. /home is the directory, -name \"*.txt\" matches files ending in .txt, -type f specifies regular files only.",
      difficulty: "Intermediate",
      topic: "File Search"
    }
  ]
};
