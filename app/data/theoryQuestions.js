// Theory questions for C programming exam prep

export const theoryQuestions = [
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
  },
  {
    id: 3,
    question: "Which of the following is the correct way to declare a pointer to an integer?",
    options: [
      "int ptr*;",
      "*int ptr;", 
      "int *ptr;",
      "pointer int ptr;"
    ],
    correct: 2,
    explanation: "int *ptr; is the correct syntax. The asterisk (*) indicates that ptr is a pointer to an integer.",
    difficulty: "Basic",
    topic: "Pointers"
  },
  {
    id: 4,
    question: "What is the size of int data type in C?",
    options: [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "Depends on the compiler and system"
    ],
    correct: 3,
    explanation: "The size of int depends on the compiler and system architecture. Common sizes are 2 bytes (16-bit), 4 bytes (32-bit), or 8 bytes (64-bit).",
    difficulty: "Basic",
    topic: "Data Types"
  },
  {
    id: 5,
    question: "Which loop is guaranteed to execute at least once?",
    options: [
      "for loop",
      "while loop", 
      "do-while loop",
      "None of the above"
    ],
    correct: 2,
    explanation: "do-while loop checks the condition after executing the body, so it always runs at least once.",
    difficulty: "Basic",
    topic: "Loops"
  },
  {
    id: 6,
    question: "What is the purpose of sizeof operator in C?",
    options: [
      "Returns the address of a variable",
      "Returns the size of a variable/type in bytes",
      "Returns the value of a variable",
      "Returns the type of a variable"
    ],
    correct: 1,
    explanation: "sizeof operator returns the size in bytes of a data type or variable.",
    difficulty: "Basic",
    topic: "Operators"
  },
  {
    id: 7,
    question: "What does the break statement do in a loop?",
    options: [
      "Skips the current iteration",
      "Exits the loop completely", 
      "Restarts the loop",
      "Pauses the loop execution"
    ],
    correct: 1,
    explanation: "break statement immediately exits the current loop.",
    difficulty: "Basic",
    topic: "Control Flow"
  },
  {
    id: 8,
    question: "Which operator is used to get the address of a variable?",
    options: [
      "*",
      "&", 
      "%",
      "@"
    ],
    correct: 1,
    explanation: "& is the address-of operator. * is the dereference operator.",
    difficulty: "Basic",
    topic: "Pointers"
  },
  {
    id: 9,
    question: "What is the purpose of malloc() function?",
    options: [
      "To free memory",
      "To allocate static memory",
      "To allocate dynamic memory",
      "To reallocate memory"
    ],
    correct: 2,
    explanation: "malloc() is used for dynamic memory allocation during runtime.",
    difficulty: "Intermediate",
    topic: "Memory Management"
  },
  {
    id: 10,
    question: "What is the difference between i++ and ++i?",
    options: [
      "No difference",
      "i++ increments after use, ++i increments before use", 
      "i++ increments before use, ++i increments after use",
      "++i is faster than i++"
    ],
    correct: 1,
    explanation: "i++ (post-increment) returns the current value then increments. ++i (pre-increment) increments first then returns the new value.",
    difficulty: "Basic",
    topic: "Operators"
  },
  {
    id: 11,
    question: "What is a pointer to pointer in C?",
    options: [
      "A pointer that points to another pointer",
      "A pointer that points to itself",
      "A pointer that points to multiple variables",
      "A pointer that cannot be modified"
    ],
    correct: 0,
    explanation: "A pointer to pointer is a pointer variable that stores the address of another pointer variable.",
    difficulty: "Intermediate",
    topic: "Pointers"
  },
  {
    id: 12,
    question: "What is the purpose of union in C?",
    options: [
      "To store multiple variables of same type",
      "To store multiple variables of different types sharing same memory",
      "To create an array of different data types",
      "To combine multiple structures"
    ],
    correct: 1,
    explanation: "Union allows storing different data types in the same memory location. Only one member can be used at a time.",
    difficulty: "Intermediate",
    topic: "Structures and Unions"
  },
  {
    id: 13,
    question: "What is the purpose of volatile keyword in C?",
    options: [
      "To declare a constant variable",
      "To prevent variable optimization by compiler",
      "To declare a global variable",
      "To declare a static variable"
    ],
    correct: 1,
    explanation: "volatile tells compiler that variable can change unexpectedly, preventing certain optimizations.",
    difficulty: "Advanced",
    topic: "Keywords"
  },
  {
    id: 14,
    question: "What is a dangling pointer?",
    options: [
      "A pointer that points to a valid memory location",
      "A pointer that points to a freed memory location",
      "A pointer that points to NULL",
      "A pointer that points to itself"
    ],
    correct: 1,
    explanation: "A dangling pointer points to a memory location that has been freed or deleted.",
    difficulty: "Intermediate",
    topic: "Pointers"
  },
  {
    id: 15,
    question: "What is the purpose of static keyword for a local variable?",
    options: [
      "Makes variable global",
      "Preserves value between function calls",
      "Makes variable constant",
      "Allocates memory dynamically"
    ],
    correct: 1,
    explanation: "static local variables retain their value between function calls and are initialized only once.",
    difficulty: "Intermediate",
    topic: "Storage Classes"
  },
  {
    id: 16,
    question: "What is the purpose of const keyword?",
    options: [
      "To declare a variable",
      "To make a variable constant",
      "To define a function",
      "To create a pointer"
    ],
    correct: 1,
    explanation: "const is used to declare constants whose values cannot be modified after initialization.",
    difficulty: "Basic",
    topic: "Keywords"
  },
  {
    id: 17,
    question: "What is a NULL pointer?",
    options: [
      "A pointer that points to 0",
      "A pointer that points to nothing",
      "A pointer that points to void",
      "A pointer that cannot be modified"
    ],
    correct: 1,
    explanation: "NULL pointer is a pointer that doesn't point to any memory location.",
    difficulty: "Basic",
    topic: "Pointers"
  },
  {
    id: 18,
    question: "What is the purpose of typedef in C?",
    options: [
      "To define a new variable",
      "To define a new data type name",
      "To define a new function",
      "To define a new constant"
    ],
    correct: 1,
    explanation: "typedef is used to create an alias name for existing data types.",
    difficulty: "Intermediate",
    topic: "Keywords"
  },
  {
    id: 19,
    question: "What is the difference between malloc() and calloc()?",
    options: [
      "No difference",
      "malloc() allocates single block, calloc() allocates multiple blocks",
      "malloc() doesn't initialize memory, calloc() initializes to zero",
      "malloc() is faster than calloc()"
    ],
    correct: 2,
    explanation: "calloc() initializes allocated memory to zero, while malloc() leaves it uninitialized.",
    difficulty: "Intermediate",
    topic: "Memory Management"
  },
  {
    id: 20,
    question: "What is the purpose of extern keyword?",
    options: [
      "To declare a local variable",
      "To declare a variable defined in another file",
      "To declare a constant",
      "To declare a function"
    ],
    correct: 1,
    explanation: "extern is used to declare variables that are defined in other source files.",
    difficulty: "Advanced",
    topic: "Storage Classes"
  },
  {
    id: 21,
    question: "What is a structure in C?",
    options: [
      "A collection of variables of same type",
      "A collection of variables of different types",
      "A collection of functions",
      "A collection of pointers"
    ],
    correct: 1,
    explanation: "Structure is a user-defined data type that groups related variables of different types.",
    difficulty: "Basic",
    topic: "Structures and Unions"
  },
  {
    id: 22,
    question: "What is the purpose of #include in C?",
    options: [
      "To include other source files",
      "To include header files",
      "To include libraries",
      "To include comments"
    ],
    correct: 1,
    explanation: "#include is a preprocessor directive used to include header files in the program.",
    difficulty: "Basic",
    topic: "Preprocessor Directives"
  },
  {
    id: 23,
    question: "What is the purpose of free() function?",
    options: [
      "To allocate memory",
      "To deallocate dynamically allocated memory",
      "To initialize memory",
      "To resize memory"
    ],
    correct: 1,
    explanation: "free() is used to deallocate memory that was previously allocated using malloc(), calloc(), or realloc().",
    difficulty: "Intermediate",
    topic: "Memory Management"
  },
  {
    id: 24,
    question: "What is a file pointer in C?",
    options: [
      "A pointer to a file name",
      "A pointer to a file structure",
      "A pointer to a file location",
      "A pointer to a file type"
    ],
    correct: 1,
    explanation: "File pointer points to a FILE structure that contains information about the file being handled.",
    difficulty: "Intermediate",
    topic: "File Handling"
  },
  {
    id: 25,
    question: "What is the purpose of fgets() function?",
    options: [
      "To write to a file",
      "To read a line from a file",
      "To position file pointer",
      "To close a file"
    ],
    correct: 1,
    explanation: "fgets() reads a line from the specified stream and stores it in the string pointed to by str.",
    difficulty: "Intermediate",
    topic: "File Handling"
  },
  {
    id: 26,
    question: "What is the purpose of realloc() function?",
    options: [
      "To allocate new memory",
      "To resize allocated memory",
      "To free memory",
      "To initialize memory"
    ],
    correct: 1,
    explanation: "realloc() is used to resize previously allocated memory block.",
    difficulty: "Intermediate",
    topic: "Memory Management"
  },
  {
    id: 27,
    question: "What is a macro in C?",
    options: [
      "A type of variable",
      "A preprocessor directive",
      "A type of function",
      "A type of pointer"
    ],
    correct: 1,
    explanation: "Macro is a preprocessor directive that provides a mechanism for text replacement.",
    difficulty: "Intermediate",
    topic: "Preprocessor Directives"
  },
  {
    id: 28,
    question: "What is the purpose of continue statement?",
    options: [
      "To exit the loop",
      "To skip rest of loop body and continue with next iteration",
      "To restart the loop",
      "To pause the loop"
    ],
    correct: 1,
    explanation: "continue skips the rest of the current loop iteration and continues with the next iteration.",
    difficulty: "Basic",
    topic: "Control Flow"
  },
  {
    id: 29,
    question: "What is recursion in C?",
    options: [
      "A loop structure",
      "A function calling itself",
      "A type of variable",
      "A type of pointer"
    ],
    correct: 1,
    explanation: "Recursion is a process where a function calls itself directly or indirectly.",
    difficulty: "Intermediate",
    topic: "Functions"
  },
  {
    id: 30,
    question: "What is the purpose of switch statement?",
    options: [
      "To create a loop",
      "To make multiple condition checks",
      "To declare variables",
      "To define functions"
    ],
    correct: 1,
    explanation: "switch statement is used to select one of many code blocks to be executed.",
    difficulty: "Basic",
    topic: "Control Flow"
  },
  {
    id: 31,
    question: "What is an array in C?",
    options: [
      "A collection of different data types",
      "A collection of same data type elements",
      "A type of pointer",
      "A type of structure"
    ],
    correct: 1,
    explanation: "Array is a collection of similar data type elements stored in contiguous memory locations.",
    difficulty: "Basic",
    topic: "Arrays"
  },
  {
    id: 32,
    question: "What is the purpose of enum in C?",
    options: [
      "To create a new variable",
      "To create a set of named integer constants",
      "To create a new function",
      "To create a new data type"
    ],
    correct: 1,
    explanation: "enum is used to define a set of named integer constants.",
    difficulty: "Intermediate",
    topic: "Data Types"
  },
  {
    id: 33,
    question: "What is the purpose of goto statement?",
    options: [
      "To create a loop",
      "To transfer control to a labeled statement",
      "To exit program",
      "To call a function"
    ],
    correct: 1,
    explanation: "goto provides an unconditional jump from the goto to a labeled statement in the same function.",
    difficulty: "Advanced",
    topic: "Control Flow"
  },
  {
    id: 34,
    question: "What is the purpose of register keyword?",
    options: [
      "To store variable in memory",
      "To store variable in CPU register",
      "To make variable constant",
      "To make variable global"
    ],
    correct: 1,
    explanation: "register suggests compiler to store variable in CPU register for faster access.",
    difficulty: "Advanced",
    topic: "Storage Classes"
  },
  {
    id: 35,
    question: "What is a string in C?",
    options: [
      "An array of integers",
      "An array of characters",
      "A pointer to integer",
      "A built-in data type"
    ],
    correct: 1,
    explanation: "String in C is an array of characters terminated by null character ('\0').",
    difficulty: "Basic",
    topic: "Strings"
  },
  {
    id: 36,
    question: "What is the purpose of strcmp() function?",
    options: [
      "To copy strings",
      "To compare strings",
      "To concatenate strings",
      "To find string length"
    ],
    correct: 1,
    explanation: "strcmp() is used to compare two strings lexicographically.",
    difficulty: "Basic",
    topic: "Strings"
  },
  {
    id: 37,
    question: "What is the purpose of struct keyword?",
    options: [
      "To create an array",
      "To create a structure",
      "To create a function",
      "To create a pointer"
    ],
    correct: 1,
    explanation: "struct keyword is used to define a structure type.",
    difficulty: "Basic",
    topic: "Structures and Unions"
  },
  {
    id: 38,
    question: "What is the purpose of auto keyword?",
    options: [
      "To declare automatic variables",
      "To declare static variables",
      "To declare external variables",
      "To declare register variables"
    ],
    correct: 0,
    explanation: "auto declares automatic variables which are local to the block they are declared in.",
    difficulty: "Advanced",
    topic: "Storage Classes"
  },
  {
    id: 39,
    question: "What is the purpose of fprintf() function?",
    options: [
      "To read from file",
      "To write formatted output to file",
      "To close file",
      "To open file"
    ],
    correct: 1,
    explanation: "fprintf() writes formatted output to a file.",
    difficulty: "Intermediate",
    topic: "File Handling"
  },
  {
    id: 40,
    question: "What is the purpose of exit() function?",
    options: [
      "To exit a loop",
      "To terminate program execution",
      "To exit a function",
      "To exit a block"
    ],
    correct: 1,
    explanation: "exit() terminates program execution and returns control to the operating system.",
    difficulty: "Basic",
    topic: "Control Flow"
  },
  {
    id: 41,
    question: "Which of the following are valid ways to declare and initialize a pointer in C? (Select all that apply)",
    options: [
      "int *ptr;",
      "int *ptr = NULL;",
      "int *ptr = 0;",
      "int ptr*;"
    ],
    correct: [0, 1, 2],
    explanation: "All options except 'int ptr*;' are valid ways to declare and initialize pointers. int *ptr; declares an uninitialized pointer, int *ptr = NULL; and int *ptr = 0; both initialize the pointer to null. 'int ptr*;' is invalid syntax.",
    difficulty: "Basic",
    topic: "Pointers"
  },
  {
    id: 42,
    question: "Which of the following are valid storage class specifiers in C? (Select all that apply)",
    options: [
      "auto",
      "register", 
      "static",
      "dynamic"
    ],
    correct: [0, 1, 2],
    explanation: "auto, register, and static are valid storage class specifiers in C. 'dynamic' is not a valid storage class specifier in C.",
    difficulty: "Intermediate",
    topic: "Storage Classes"
  }
];