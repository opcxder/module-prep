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
    explanation: "int *ptr; is the correct syntax. The asterisk (*) indicates that ptr is a pointer to an integer. The asterisk can be placed next to int or next to ptr.",
    difficulty: "Basic",
    topic: "Pointers"
  },
  {
    id: 4,
    question: "In a for loop for(int i=0; i<5; i++), how many times will the loop body execute?",
    options: [
      "4 times",
      "5 times", 
      "6 times",
      "Infinite times"
    ],
    correct: 1,
    explanation: "The loop runs while i<5, starting from i=0. It executes for i=0,1,2,3,4 (5 times total). When i becomes 5, the condition i<5 is false, so the loop stops.",
    difficulty: "Intermediate",
    topic: "Loops"
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
    explanation: "do-while loop checks the condition after executing the body, so it always runs at least once. for and while loops check the condition before execution, so they might not run at all.",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 6,
    question: "Which of the following is true about function parameters in C?",
    options: [
      "Parameters are passed by reference by default",
      "Parameters are passed by value by default", 
      "Parameters can be both passed by value and reference",
      "Parameters are passed by pointer by default"
    ],
    correct: 1,
    explanation: "C always uses pass-by-value. Even when you pass an array, you're passing the value of the pointer (address). To achieve pass-by-reference behavior, you must explicitly use pointers.",
    difficulty: "Intermediate",
    topic: "Functions"
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
    explanation: "break statement immediately exits the current loop. To skip just the current iteration, use 'continue' statement.",
    difficulty: "Intermediate",
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
    explanation: "& is the address-of operator. * is the dereference operator (opposite of &). % is modulo operator, @ is not used in C.",
    difficulty: "Intermediate",
    topic: "Pointers"
  },
  {
    id: 9,
    question: "What happens when you access an array element beyond its bounds?",
    options: [
      "Compilation error",
      "Runtime error", 
      "Undefined behavior",
      "Returns 0"
    ],
    correct: 2,
    explanation: "C doesn't perform bounds checking. Accessing out-of-bounds elements leads to undefined behavior - it might work, crash, or give unpredictable results.",
    difficulty: "Advanced",
    topic: "Arrays"
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
    explanation: "i++ (post-increment) returns the current value then increments. ++i (pre-increment) increments first then returns the new value. In standalone statements, both have the same effect.",
    difficulty: "Advanced",
    topic: "Operators"
  },
  {
    id: 11,
    question: "Who is the creator of the C programming language?",
    options: [
      "Dennis Ritchie",
      "Brian Kernighan",
      "Ken Thompson",
      "Bjarne Stroustrup"
    ],
    correct: 0,
    explanation: "Dennis Ritchie created C at Bell Labs in the early 1970s. Brian Kernighan co-authored the famous K&R C book, Ken Thompson worked on Unix, and Bjarne Stroustrup created C++.",
    difficulty: "Basic",
    topic: "History"
  },
  {
    id: 12,
    question: "What is the correct syntax for an if-else statement?",
    options: [
      "if (condition) { } else if { }",
      "if (condition) { } else { }",
      "if condition { } else { }",
      "if (condition) then { } else { }"
    ],
    correct: 1,
    explanation: "if (condition) { } else { } is correct. Parentheses around condition are required, 'then' keyword is not used in C, and 'else if' needs its own condition.",
    difficulty: "Basic",
    topic: "Conditional Statements"
  },
  {
    id: 13,
    question: "Which bitwise operator performs XOR operation?",
    options: [
      "& (AND)",
      "| (OR)",
      "^ (XOR)",
      "~ (NOT)"
    ],
    correct: 2,
    explanation: "^ performs XOR (exclusive OR). & is AND, | is OR, ~ is NOT (complement). XOR returns 1 when bits are different, 0 when they're the same.",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 14,
    question: "What does the expression (5 & 3) evaluate to?",
    options: [
      "5",
      "3",
      "1",
      "8"
    ],
    correct: 2,
    explanation: "5 in binary is 101, 3 is 011. Bitwise AND: 101 & 011 = 001 = 1 in decimal.",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 15,
    question: "In the expression a || b && c, which operation is performed first?",
    options: [
      "a || b",
      "b && c",
      "|| and && have same precedence",
      "Depends on compiler"
    ],
    correct: 1,
    explanation: "&& has higher precedence than ||. So b && c is evaluated first, then the result is used with a ||. Parentheses would be: a || (b && c).",
    difficulty: "Advanced",
    topic: "Operator Precedence"
  },
  {
    id: 16,
    question: "What is the result of !0 in C?",
    options: [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    correct: 1,
    explanation: "! is logical NOT. !0 evaluates to 1 (true) because 0 is considered false in C. Any non-zero value is true, so !non_zero gives 0.",
    difficulty: "Basic",
    topic: "Logical Operators"
  },
  {
    id: 17,
    question: "Which of the following declares a 2D array correctly?",
    options: [
      "int arr[3,4];",
      "int arr[3][4];",
      "int arr(3)(4);",
      "int [3][4] arr;"
    ],
    correct: 1,
    explanation: "int arr[3][4]; declares a 2D array with 3 rows and 4 columns. Square brackets are used, not parentheses or commas between dimensions.",
    difficulty: "Basic",
    topic: "2D Arrays"
  },
  {
    id: 18,
    question: "How do you access the element in the 2nd row, 3rd column of array arr[5][6]?",
    options: [
      "arr[2][3]",
      "arr[1][2]",
      "arr[2,3]",
      "arr(1,2)"
    ],
    correct: 1,
    explanation: "Arrays are 0-indexed. 2nd row is index 1, 3rd column is index 2. So arr[1][2] is correct.",
    difficulty: "Intermediate",
    topic: "2D Arrays"
  },
  {
    id: 19,
    question: "What does int **ptr declare?",
    options: [
      "Pointer to an integer",
      "Double pointer to an integer",
      "Two integer pointers",
      "Invalid syntax"
    ],
    correct: 1,
    explanation: "int **ptr declares a double pointer (pointer to a pointer) to an integer. It can point to the address of another pointer that points to an int.",
    difficulty: "Advanced",
    topic: "Double Pointers"
  },
  {
    id: 20,
    question: "If int *p points to an integer and int **q points to p, how do you access the integer value?",
    options: [
      "*p or *q",
      "*p or **q",
      "**p or *q",
      "p or q"
    ],
    correct: 1,
    explanation: "*p dereferences p to get the integer. **q dereferences q to get p, then dereferences p to get the integer. Both access the same value.",
    difficulty: "Advanced",
    topic: "Double Pointers"
  },
  {
    id: 21,
    question: "What does int ***ptr represent?",
    options: [
      "Triple integer values",
      "Pointer to double pointer to integer",
      "Three separate pointers",
      "Invalid declaration"
    ],
    correct: 1,
    explanation: "int ***ptr is a triple pointer - a pointer to a pointer to a pointer to an integer. It requires three dereferences (***ptr) to access the final integer value.",
    difficulty: "Advanced",
    topic: "Triple Pointers"
  },
  {
    id: 22,
    question: "In a while loop, when is the condition checked?",
    options: [
      "After each iteration",
      "Before each iteration",
      "Only at the beginning",
      "Only at the end"
    ],
    correct: 1,
    explanation: "while loop checks the condition before each iteration, including the first one. If the condition is false initially, the loop body never executes.",
    difficulty: "Basic",
    topic: "Loops"
  },
  {
    id: 23,
    question: "What happens if you omit the increment statement in a for loop?",
    options: [
      "Compilation error",
      "Loop runs once",
      "Potential infinite loop",
      "Loop doesn't execute"
    ],
    correct: 2,
    explanation: "Omitting increment in for(init; condition; increment) creates potential infinite loop if the condition never becomes false. The increment section can be empty: for(i=0; i<5; ) is valid.",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 24,
    question: "Which is true about switch statement's default case?",
    options: [
      "Must be the last case",
      "Must be the first case",
      "Can be placed anywhere",
      "Must have a break statement"
    ],
    correct: 2,
    explanation: "default case can be placed anywhere in the switch statement, though conventionally it's placed last. It executes when no other case matches.",
    difficulty: "Intermediate",
    topic: "Conditional Statements"
  },
  {
    id: 25,
    question: "What does the continue statement do in a loop?",
    options: [
      "Exits the loop",
      "Skips remaining statements in current iteration",
      "Restarts the loop from beginning",
      "Pauses the loop"
    ],
    correct: 1,
    explanation: "continue skips the remaining statements in the current iteration and moves to the next iteration. Unlike break, it doesn't exit the loop completely.",
    difficulty: "Intermediate",
    topic: "Control Flow"
  },
  {
    id: 26,
    question: "How is an array name treated when passed to a function?",
    options: [
      "As a copy of the array",
      "As a pointer to first element",
      "As a reference to the array",
      "As the size of the array"
    ],
    correct: 1,
    explanation: "Array name decays to a pointer to its first element when passed to a function. This means the function receives the address, not a copy of the entire array.",
    difficulty: "Advanced",
    topic: "Arrays with Pointers"
  },
  {
    id: 27,
    question: "What is the relationship between arr[i] and *(arr + i)?",
    options: [
      "They are different",
      "They are equivalent",
      "arr[i] is faster",
      "*(arr + i) is invalid"
    ],
    correct: 1,
    explanation: "arr[i] and *(arr + i) are completely equivalent. Array indexing is syntactic sugar for pointer arithmetic. arr[i] is converted to *(arr + i) by the compiler.",
    difficulty: "Advanced",
    topic: "Arrays with Pointers"
  },
  {
    id: 28,
    question: "In the expression a = b + c * d, which operation is performed first?",
    options: [
      "a = b",
      "b + c",
      "c * d",
      "All simultaneously"
    ],
    correct: 2,
    explanation: "* (multiplication) has higher precedence than + and =. So c * d is calculated first, then b + (result), then the final result is assigned to a.",
    difficulty: "Intermediate",
    topic: "Operator Precedence"
  },
  {
    id: 29,
    question: "What does the expression (a > b) ? a : b represent?",
    options: [
      "Logical AND of a and b",
      "Maximum of a and b",
      "Minimum of a and b",
      "Comparison result"
    ],
    correct: 1,
    explanation: "This is the ternary operator. It returns a if (a > b) is true, otherwise returns b. This effectively gives the maximum of a and b.",
    difficulty: "Intermediate",
    topic: "Conditional Operators"
  },
  {
    id: 30,
    question: "Which logical operator exhibits short-circuit evaluation?",
    options: [
      "& (bitwise AND)",
      "&& (logical AND)",
      "| (bitwise OR)",
      "^ (XOR)"
    ],
    correct: 1,
    explanation: "&& and || exhibit short-circuit evaluation. In a && b, if a is false, b is not evaluated. In a || b, if a is true, b is not evaluated. Bitwise operators always evaluate both operands.",
    difficulty: "Advanced",
    topic: "Logical Operators"
  },
  {
    id: 31,
    question: "What is the size of int data type in C?",
    options: [
      "Always 2 bytes",
      "Always 4 bytes",
      "Depends on system architecture",
      "Always 8 bytes"
    ],
    correct: 2,
    explanation: "Size of int depends on the system architecture and compiler. It's typically 4 bytes on 32-bit and 64-bit systems, but was 2 bytes on older 16-bit systems.",
    difficulty: "Basic",
    topic: "Data Types"
  },
  {
    id: 32,
    question: "What does the left shift operator << do to a number?",
    options: [
      "Divides by 2",
      "Multiplies by 2",
      "Adds 2",
      "Subtracts 2"
    ],
    correct: 1,
    explanation: "Left shift (<<) by 1 position effectively multiplies by 2. Each left shift doubles the value: 5 << 1 = 10, 5 << 2 = 20. Right shift (>>) divides by 2.",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 33,
    question: "In nested loops, what does a break statement affect?",
    options: [
      "All loops",
      "Only the innermost loop",
      "Only the outermost loop",
      "All loops at the same level"
    ],
    correct: 1,
    explanation: "break only exits the innermost loop it's placed in. To break out of nested loops, you need labeled breaks (not standard C) or use flags/goto statements.",
    difficulty: "Advanced",
    topic: "Control Flow"
  },
  {
    id: 34,
    question: "What is the correct way to initialize a 2D array?",
    options: [
      "int arr[2][3] = {1,2,3,4,5,6};",
      "int arr[2][3] = {{1,2,3},{4,5,6}};",
      "Both A and B are correct",
      "int arr[2][3] = [[1,2,3],[4,5,6]];"
    ],
    correct: 2,
    explanation: "Both methods are correct. Method A initializes elements sequentially, Method B explicitly shows the 2D structure. Method D uses invalid syntax (square brackets instead of braces).",
    difficulty: "Intermediate",
    topic: "2D Arrays"
  },
  {
    id: 35,
    question: "What happens when you pass an array to a function and modify it?",
    options: [
      "Original array remains unchanged",
      "Original array gets modified",
      "Compilation error occurs",
      "Copy of array gets modified"
    ],
    correct: 1,
    explanation: "Arrays are passed by reference (as pointers). Modifications inside the function affect the original array because you're working with the same memory location.",
    difficulty: "Advanced",
    topic: "Functions"
  },
  {
    id: 36,
    question: "Which operator cannot be overloaded in C?",
    options: [
      "All operators can be overloaded",
      "No operators can be overloaded",
      "Only arithmetic operators",
      "Only logical operators"
    ],
    correct: 1,
    explanation: "C does not support operator overloading at all. This feature is available in C++ but not in C. In C, operators have fixed meanings for built-in types.",
    difficulty: "Advanced",
    topic: "Operators"
  },
  {
    id: 37,
    question: "What does the modulo operator % return for negative numbers?",
    options: [
      "Always positive result",
      "Always negative result",
      "Result has same sign as dividend",
      "Result has same sign as divisor"
    ],
    correct: 2,
    explanation: "In C, a % b returns a result with the same sign as a (the dividend). So -7 % 3 = -1, and 7 % -3 = 1. This behavior is implementation-defined in older C standards.",
    difficulty: "Advanced",
    topic: "Operators"
  },
  {
    id: 38,
    question: "What is pointer arithmetic?",
    options: [
      "Adding two pointer values",
      "Mathematical operations on pointer addresses",
      "Converting pointers to integers",
      "Comparing pointer values"
    ],
    correct: 1,
    explanation: "Pointer arithmetic involves operations like ptr+1, ptr-1 on pointer addresses. Adding 1 to a pointer moves it to the next element of its data type, not necessarily the next byte.",
    difficulty: "Advanced",
    topic: "Pointers"
  },
  {
    id: 39,
    question: "Which is true about goto statement in C?",
    options: [
      "Not supported in C",
      "Can only jump forward",
      "Can jump anywhere within the same function",
      "Can jump to other functions"
    ],
    correct: 2,
    explanation: "goto can jump to any labeled statement within the same function, both forward and backward. However, it cannot jump to other functions or across function boundaries.",
    difficulty: "Advanced",
    topic: "Control Flow"
  },
  {
    id: 40,
    question: "What does the comma operator , do in C?",
    options: [
      "Separates function parameters only",
      "Evaluates left operand, discards result, returns right operand",
      "Performs addition of two operands",
      "Creates array elements"
    ],
    correct: 1,
    explanation: "Comma operator evaluates its left operand, discards the result, then evaluates and returns the right operand. Example: (a=1, b=2, c=3) returns 3. It has the lowest precedence.",
    difficulty: "Advanced",
    topic: "Operators"
  }
];