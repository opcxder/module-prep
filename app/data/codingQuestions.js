// Coding questions for C programming exam prep

export const codingQuestions = [
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
  },
  {
    id: 13,
    question: "What is the output of the following code?",
    code: `int x = 10;
if(x = 5)
    printf("True");
else
    printf("False");`,
    options: [
      "True",
      "False", 
      "Compilation error",
      "Runtime error"
    ],
    correct: 0,
    explanation: "This uses assignment (=) not comparison (==). x = 5 assigns 5 to x and returns 5, which is truthy. So 'True' is printed. This is a common mistake!",
    difficulty: "Intermediate",
    topic: "Control Flow"
  },
  {
    id: 14,
    question: "What is the output of this code?",
    code: `int arr[] = {1, 2, 3, 4, 5};
printf("%d", *(arr + 2));`,
    options: [
      "2",
      "3", 
      "Memory address",
      "1"
    ],
    correct: 1,
    explanation: "arr points to first element. arr + 2 moves pointer 2 positions forward to index 2. *(arr + 2) dereferences to get arr[2] = 3.",
    difficulty: "Intermediate",
    topic: "Pointers & Arrays"
  },
  {
    id: 15,
    question: "What is the output of the following?",
    code: `int x = 5;
printf("%d %d", x++, ++x);`,
    options: [
      "5 7",
      "6 7", 
      "5 6",
      "7 5"
    ],
    correct: 0,
    explanation: "Order of evaluation in function arguments is undefined, but typically: x++ returns 5 then increments x to 6, ++x increments x to 7 then returns 7. Result is usually 5 7.",
    difficulty: "Advanced",
    topic: "Operators"
  },
  {
    id: 16,
    question: "What is the output of this code?",
    code: `int a = 5;
int *p = &a;
*p = 10;
printf("%d", a);`,
    options: [
      "5",
      "10", 
      "Memory address",
      "Compilation error"
    ],
    correct: 1,
    explanation: "p points to a. *p = 10 changes the value at the address p points to (which is a). So a becomes 10.",
    difficulty: "Intermediate",
    topic: "Pointers"
  },
  {
    id: 17,
    question: "What is the output of the following code?",
    code: `for(int i = 1; i <= 3; i++)
    for(int j = 1; j <= 2; j++)
        printf("*");`,
    options: [
      "*****",
      "******", 
      "***",
      "**"
    ],
    correct: 1,
    explanation: "Outer loop runs 3 times (i=1,2,3). For each outer iteration, inner loop runs 2 times (j=1,2). Total: 3 × 2 = 6 stars.",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 18,
    question: "What is the output of this code?",
    code: `int arr[5] = {1, 2, 3};
printf("%d", arr[4]);`,
    options: [
      "Garbage value",
      "0", 
      "3",
      "Compilation error"
    ],
    correct: 1,
    explanation: "When you partially initialize an array in C, unspecified elements are automatically set to 0. So arr[4] = 0.",
    difficulty: "Advanced",
    topic: "Arrays"
  },
  {
    id: 19,
    question: "What is the output of the following code?",
    code: `int x = 10;
int *p = &x;
int **q = &p;
printf("%d", **q);`,
    options: [
      "10",
      "Memory address of x", 
      "Memory address of p",
      "Compilation error"
    ],
    correct: 0,
    explanation: "q is a double pointer to p. p points to x. **q dereferences twice: *q gives p, then *p gives the value of x, which is 10.",
    difficulty: "Advanced",
    topic: "Pointers"
  },
  {
    id: 20,
    question: "What is the output of this complex code?",
    code: `int main() {
    int a[] = {1, 2, 3, 4, 5};
    int *p = (int*)(&a + 1);
    printf("%d", *(p - 1));
    return 0;
}`,
    options: [
      "1",
      "4", 
      "5",
      "Undefined behavior"
    ],
    correct: 2,
    explanation: "&a gives address of entire array. &a + 1 moves past the entire array. (int*)(&a + 1) casts to int pointer. p - 1 moves back one position to point to the last element arr[4] = 5.",
    difficulty: "Expert",
    topic: "Advanced Pointers"
  },
  {
    id: 31,
    question: "What is the output of the following code?",
    code: `int x = 8;
  printf("%d", x & 5);`,
    options: [
      "8",
      "5",
      "0",
      "13"
    ],
    correct: 2,
    explanation: "Bitwise AND: 8 (1000) & 5 (0101) = 0000 = 0",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 32,
    question: "What will this code print?",
    code: `int i = 0;
  while(i++ < 3)
      printf("%d ", i);`,
    options: [
      "1 2 3",
      "0 1 2",
      "1 2 3 4",
      "0 1 2 3"
    ],
    correct: 0,
    explanation: "i++ post-increments. Loop: i=0, check 0<3 (true), print i=1; i=1, check 1<3 (true), print i=2; i=2, check 2<3 (true), print i=3; i=3, check 3<3 (false), exit.",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 33,
    question: "What is the output of this code?",
    code: `int x = 4;
  printf("%d", x << 2);`,
    options: [
      "4",
      "2",
      "16",
      "8"
    ],
    correct: 2,
    explanation: "Left shift by 2: 4 (100) << 2 = 10000 = 16. Each left shift multiplies by 2.",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 34,
    question: "What is the output of the following?",
    code: `int a = 3, b = 4;
  printf("%d", a > b ? a : b);`,
    options: [
      "3",
      "4",
      "1",
      "0"
    ],
    correct: 1,
    explanation: "Ternary operator: a > b (3 > 4) is false, so it returns b which is 4.",
    difficulty: "Basic",
    topic: "Conditional Statement"
  },
  {
    id: 35,
    question: "What is the output of this code?",
    code: `int arr[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};
  printf("%d", arr[1][2]);`,
    options: [
      "5",
      "6",
      "8",
      "2"
    ],
    correct: 1,
    explanation: "arr[1][2] accesses row 1 (second row: {4,5,6}), column 2 (third element: 6).",
    difficulty: "Intermediate",
    topic: "2D Array"
  },
  {
    id: 36,
    question: "What will this function return?",
    code: `int func(int x) {
      return x * x;
  }
  int main() {
      printf("%d", func(4));
      return 0;
  }`,
    options: [
      "4",
      "8",
      "16",
      "0"
    ],
    correct: 2,
    explanation: "func(4) returns 4 * 4 = 16.",
    difficulty: "Basic",
    topic: "Functions"
  },
  {
    id: 37,
    question: "What is the output of the following code?",
    code: `int x = 7;
  printf("%d", x >> 1);`,
    options: [
      "7",
      "14",
      "3",
      "1"
    ],
    correct: 2,
    explanation: "Right shift by 1: 7 (111) >> 1 = 011 = 3. Each right shift divides by 2 (integer division).",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 38,
    question: "What is the output of this code?",
    code: `int x = 5;
  printf("%d", x && 0);`,
    options: [
      "5",
      "0",
      "1",
      "Undefined"
    ],
    correct: 1,
    explanation: "Logical AND: any expression && 0 is always 0, regardless of the first operand.",
    difficulty: "Basic",
    topic: "Logical Operations"
  },
  {
    id: 39,
    question: "What is the output of the following?",
    code: `int a = 2, b = 3, c = 4;
  printf("%d", a + b * c);`,
    options: [
      "20",
      "14",
      "24",
      "9"
    ],
    correct: 1,
    explanation: "Operator precedence: multiplication before addition. b * c = 3 * 4 = 12, then a + 12 = 2 + 12 = 14.",
    difficulty: "Basic",
    topic: "Precedence of Operators"
  },
  {
    id: 40,
    question: "What is the output of this code?",
    code: `int x = 10;
  int *p = &x;
  int **q = &p;
  printf("%d", **q);`,
    options: [
      "10",
      "Compilation error",
      "Memory address",
      "Garbage value"
    ],
    correct: 0,
    explanation: "q points to p, p points to x. **q dereferences to the value 10.",
    difficulty: "Advanced",
    topic: "Double Pointer"
  },
  {
    id: 41,
    question: "What will this code print?",
    code: `for(int i = 0; i < 5; i++) {
      if(i == 2) continue;
      printf("%d ", i);
  }`,
    options: [
      "0 1 2 3 4",
      "0 1 3 4",
      "1 2 3 4",
      "0 1 2"
    ],
    correct: 1,
    explanation: "Loop prints i except when i==2 due to continue statement. Output: 0 1 3 4",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 42,
    question: "What is the output of the following code?",
    code: `int x = 12;
  printf("%d", x ^ 5);`,
    options: [
      "12",
      "5",
      "9",
      "17"
    ],
    correct: 2,
    explanation: "Bitwise XOR: 12 (1100) ^ 5 (0101) = 1001 = 9",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 43,
    question: "What is the output of this code?",
    code: `int arr[] = {10, 20, 30};
  int *p = arr;
  printf("%d", *(p + 1));`,
    options: [
      "10",
      "20",
      "30",
      "Memory address"
    ],
    correct: 1,
    explanation: "p points to arr[0]. p + 1 points to arr[1]. *(p + 1) dereferences to get arr[1] = 20.",
    difficulty: "Intermediate",
    topic: "Array with Pointer"
  },
  {
    id: 44,
    question: "What will this nested loop print?",
    code: `for(int i = 1; i <= 2; i++) {
      for(int j = 1; j <= i; j++) {
          printf("%d", j);
      }
  }`,
    options: [
      "1122",
      "1112",
      "112",
      "121"
    ],
    correct: 2,
    explanation: "i=1: inner loop j=1, prints 1. i=2: inner loop j=1,2, prints 12. Total output: 112",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 45,
    question: "What is the output of the following code?",
    code: `int x = 6;
  printf("%d", ~x);`,
    options: [
      "6",
      "-6",
      "-7",
      "0"
    ],
    correct: 2,
    explanation: "Bitwise NOT (~) flips all bits. For 6: ~(00000110) = 11111001 = -7 in two's complement.",
    difficulty: "Advanced",
    topic: "Bitwise Operators"
  },
  {
    id: 46,
    question: "What is the output of this code?",
    code: `int x = 0;
  printf("%d", x || 5);`,
    options: [
      "0",
      "5",
      "1",
      "Undefined"
    ],
    correct: 2,
    explanation: "Logical OR: 0 || 5. Since 5 is truthy, the result is 1 (true).",
    difficulty: "Basic",
    topic: "Logical Operations"
  },
  {
    id: 47,
    question: "What will this function output?",
    code: `void modify(int *x) {
      *x = *x + 10;
  }
  int main() {
      int a = 5;
      modify(&a);
      printf("%d", a);
      return 0;
  }`,
    options: [
      "5",
      "15",
      "10",
      "Compilation error"
    ],
    correct: 1,
    explanation: "Function receives address of a. *x modifies the value at that address. a becomes 5 + 10 = 15.",
    difficulty: "Intermediate",
    topic: "Functions"
  },
  {
    id: 48,
    question: "What is the output of the following code?",
    code: `int a = 4, b = 2;
  printf("%d", a / b * 3);`,
    options: [
      "6",
      "0",
      "2",
      "1"
    ],
    correct: 0,
    explanation: "Left-to-right evaluation with same precedence: a / b * 3 = 4 / 2 * 3 = 2 * 3 = 6.",
    difficulty: "Basic",
    topic: "Precedence of Operators"
  },
  {
    id: 49,
    question: "What is the output of this code?",
    code: `int x = 3;
  switch(x) {
      case 1: printf("One");
      case 2: printf("Two");
      case 3: printf("Three");
      case 4: printf("Four");
  }`,
    options: [
      "Three",
      "ThreeFour",
      "OneTwoThreeFour",
      "Compilation error"
    ],
    correct: 1,
    explanation: "No break statements, so execution falls through from case 3 to case 4. Prints 'ThreeFour'.",
    difficulty: "Intermediate",
    topic: "Conditional Statement"
  },
  {
    id: 50,
    question: "What is the output of the following code?",
    code: `int arr[2][3] = {{1,2,3}, {4,5,6}};
  printf("%d", *(*(arr + 1) + 2));`,
    options: [
      "3",
      "6",
      "5",
      "2"
    ],
    correct: 1,
    explanation: "arr + 1 points to second row. *(arr + 1) gives address of second row. *(arr + 1) + 2 points to third element of second row. Final dereference gives arr[1][2] = 6.",
    difficulty: "Expert",
    topic: "2D Array"
  },
  {
    id: 51,
    question: "What is the output of this code?",
    code: `int x = 15;
  printf("%d", x | 8);`,
    options: [
      "15",
      "8",
      "7",
      "15"
    ],
    correct: 0,
    explanation: "Bitwise OR: 15 (1111) | 8 (1000) = 1111 = 15",
    difficulty: "Intermediate",
    topic: "Bitwise Operators"
  },
  {
    id: 52,
    question: "What will this recursive function return?",
    code: `int factorial(int n) {
      if(n <= 1) return 1;
      return n * factorial(n - 1);
  }
  printf("%d", factorial(4));`,
    options: [
      "4",
      "24",
      "10",
      "120"
    ],
    correct: 1,
    explanation: "factorial(4) = 4 * factorial(3) = 4 * 3 * 2 * 1 = 24",
    difficulty: "Intermediate",
    topic: "Functions"
  },
  {
    id: 53,
    question: "What is the output of the following code?",
    code: `int x = 5;
  printf("%d", !x);`,
    options: [
      "5",
      "0",
      "1",
      "-5"
    ],
    correct: 1,
    explanation: "Logical NOT: !5 = !true = false = 0",
    difficulty: "Basic",
    topic: "Logical Operations"
  },
  {
    id: 54,
    question: "What is the output of this code?",
    code: `int a = 10;
  int *p = &a;
  int **q = &p;
  int ***r = &q;
  printf("%d", ***r);`,
    options: [
      "10",
      "Compilation error",
      "Memory address",
      "Garbage value"
    ],
    correct: 0,
    explanation: "Valid triple pointer chain. r points to q, q points to p, p points to a. ***r dereferences three times to get value of a = 10.",
    difficulty: "Expert",
    topic: "Triple Pointers"
  },
  {
    id: 55,
    question: "What will this code output?",
    code: `int i;
  for(i = 1; i <= 3; i++) {
      if(i == 2) break;
      printf("%d ", i);
  }
  printf("%d", i);`,
    options: [
      "1 2",
      "1 3",
      "1 2 3",
      "1 2"
    ],
    correct: 0,
    explanation: "Loop prints 1, then when i=2, break exits loop. Final printf shows i=2. Output: 1 2",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 56,
    question: "What is the output of the following code?",
    code: `int x = 3, y = 4;
  printf("%d", (x > y) && (y > 2));`,
    options: [
      "1",
      "0",
      "3",
      "4"
    ],
    correct: 1,
    explanation: "Logical AND: (3 > 4) && (4 > 2) = false && true = false = 0",
    difficulty: "Basic",
    topic: "Logical Operations"
  },
  {
    id: 57,
    question: "What is the output of this array code?",
    code: `int arr[] = {1, 2, 3, 4, 5};
  int *p = &arr[3];
  printf("%d", *(p - 2));`,
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 1,
    explanation: "p points to arr[3] (value 4). p - 2 moves pointer back 2 positions to arr[1]. *(p - 2) = arr[1] = 2.",
    difficulty: "Intermediate",
    topic: "Array with Pointer"
  },
  {
    id: 58,
    question: "What will this code print?",
    code: `int x = 10;
  if(x > 5 && x < 15)
      printf("Medium");
  else if(x >= 15)
      printf("Large");
  else
      printf("Small");`,
    options: [
      "Medium",
      "Large",
      "Small",
      "Nothing"
    ],
    correct: 0,
    explanation: "x = 10. First condition: 10 > 5 && 10 < 15 is true && true = true. Prints 'Medium'.",
    difficulty: "Basic",
    topic: "Conditional Statement"
  },
  {
    id: 59,
    question: "What is the output of the following code?",
    code: `int a = 5, b = 10;
  printf("%d", a++ + ++b);`,
    options: [
      "15",
      "16",
      "17",
      "18"
    ],
    correct: 1,
    explanation: "a++ returns 5 then increments a to 6. ++b increments b to 11 then returns 11. Result: 5 + 11 = 16.",
    difficulty: "Intermediate",
    topic: "Operators"
  },
  {
    id: 60,
    question: "What is the output of this nested function code?",
    code: `int add(int a, int b) {
      return a + b;
  }
  int multiply(int x, int y) {
      return x * y;
  }
  printf("%d", add(2, multiply(3, 4)));`,
    options: [
      "9",
      "14",
      "24",
      "20"
    ],
    correct: 1,
    explanation: "multiply(3, 4) = 12. Then add(2, 12) = 2 + 12 = 14.",
    difficulty: "Intermediate",
    topic: "Functions"
  },
  {
    id: 61,
    question: "What is the output of the following code?",
    code: `int arr[4] = {10, 20, 30, 40};
  printf("%d", arr[2] + arr[0]);`,
    options: [
      "30",
      "40",
      "50",
      "20"
    ],
    correct: 1,
    explanation: "arr[2] = 30, arr[0] = 10. arr[2] + arr[0] = 30 + 10 = 40.",
    difficulty: "Basic",
    topic: "Arrays"
  },
  {
    id: 62,
    question: "What will this while loop output?",
    code: `int i = 5;
  while(i > 0) {
      printf("%d ", i);
      i -= 2;
  }`,
    options: [
      "5 3 1",
      "5 4 3 2 1",
      "5 3",
      "5 3 1 -1"
    ],
    correct: 0,
    explanation: "i starts at 5, decrements by 2 each iteration: 5 (print), 3 (print), 1 (print), -1 (exit). Output: 5 3 1",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 63,
    question: "What is the output of the following code?",
    code: `int x = 2, y = 3;
  printf("%d", x * y + x / y);`,
    options: [
      "6",
      "7",
      "2",
      "8"
    ],
    correct: 0,
    explanation: "x * y = 6 and x / y = 0 (integer division). 6 + 0 = 6.",
    difficulty: "Basic",
    topic: "Precedence of Operators"
  },
  {
    id: 64,
    question: "What is the output of this 2D array code?",
    code: `int matrix[2][2] = {{1,2}, {3,4}};
  int *p = (int*)matrix;
  printf("%d", *(p + 3));`,
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 3,
    explanation: "2D array stored as 1D in memory: [1,2,3,4]. p points to start. p + 3 points to 4th element. *(p + 3) = 4.",
    difficulty: "Advanced",
    topic: "2D Array"
  },
  {
    id: 65,
    question: "What will this code print?",
    code: `int x = 1;
  do {
      printf("%d ", x);
      x *= 2;
  } while(x < 8);`,
    options: [
      "1 2 4",
      "1 2 4 8",
      "2 4 8",
      "1 2"
    ],
    correct: 0,
    explanation: "Do-while executes at least once. x=1 (print), x=2 (print), x=4 (print), x=8 (exit). Output: 1 2 4",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 66,
    question: "What is the output of the following code?",
    code: `int a = 8, b = 3;
  printf("%d", a % b + a / b);`,
    options: [
      "4",
      "5",
      "2",
      "3"
    ],
    correct: 0,
    explanation: "a % b = 2 and a / b = 2 (integer division). 2 + 2 = 4.",
    difficulty: "Basic",
    topic: "Precedence of Operators"
  },
  {
    id: 67,
    question: "What is the output of this pointer code?",
    code: `int arr[] = {5, 10, 15, 20};
  int *p = arr + 2;
  printf("%d", *p - *(p - 1));`,
    options: [
      "5",
      "10",
      "15",
      "0"
    ],
    correct: 0,
    explanation: "p points to arr[2] = 15. p - 1 points to arr[1] = 10. *p - *(p - 1) = 15 - 10 = 5.",
    difficulty: "Intermediate",
    topic: "Array with Pointer"
  },
  {
    id: 68,
    question: "What will this conditional output?",
    code: `int x = 7;
  printf("%d", (x % 2 == 0) ? 0 : 1);`,
    options: [
      "0",
      "1",
      "7",
      "2"
    ],
    correct: 1,
    explanation: "x % 2 = 7 % 2 = 1. (1 == 0) is false, so ternary returns 1.",
    difficulty: "Basic",
    topic: "Conditional Statement"
  },
  {
    id: 69,
    question: "What is the output of the following code?",
    code: `int x = 10;
  int *p = &x;
  int **q = &p;
  printf("%d", *q == p);`,
    options: [
      "10",
      "1",
      "0",
      "1"
    ],
    correct: 1,
    explanation: "q points to p, p points to x. *q == p is true, so prints 1.",
    difficulty: "Advanced",
    topic: "Double Pointer"
  },
  {
    id: 70,
    question: "What is the output of this fundamental operator precedence question?",
    code: `int a = 5, b = 2, c = 3;
  printf("%d", a + b * c - b);`,
    options: [
      "14",
      "12",
      "9",
      "16"
    ],
    correct: 0,
    explanation: "Operator precedence: b * c = 6, then a + 6 - b = 5 + 6 - 2 = 9.",
    difficulty: "Basic",
    topic: "Precedence of Operators"
  },
  {
    id: 71,
    question: "What will this fundamental loop with break statement output?",
    code: `int i;
  for(i = 1; i <= 10; i++) {
      if(i == 5) break;
      printf("%d ", i);
  }`,
    options: [
      "1 2 3 4 5",
      "1 2 3 4",
      "1 2 3 4 5 6 7 8 9 10",
      "5 6 7 8 9 10"
    ],
    correct: 1,
    explanation: "Loop breaks when i == 5, so only prints 1 2 3 4.",
    difficulty: "Intermediate",
    topic: "Loops"
  },
  {
    id: 72,
    question: "What is the output of this fundamental array initialization question?",
    code: `int arr[5] = {10, 20};
  printf("%d %d", arr[0], arr[2]);`,
    options: [
      "10 20",
      "10 0",
      "0 0",
      "10 garbage"
    ],
    correct: 1,
    explanation: "Partial array initialization: arr[0]=10, arr[1]=20, remaining elements are 0.",
    difficulty: "Basic",
    topic: "Arrays"
  },
  {
    id: 73,
    question: "What will this fundamental pointer arithmetic output?",
    code: `int arr[] = {2, 4, 6, 8, 10};
  int *p = arr;
  p++;
  printf("%d", *p + 1);`,
    options: [
      "3",
      "5",
      "4",
      "6"
    ],
    correct: 1,
    explanation: "p points to arr[1] = 4 after p++. *p + 1 = 4 + 1 = 5.",
    difficulty: "Intermediate",
    topic: "Array with Pointer"
  },
  {
    id: 74,
    question: "What is the output of this fundamental function call question?",
    code: `void swap(int a, int b) {
      int temp = a;
      a = b;
      b = temp;
  }
  int x = 5, y = 10;
  swap(x, y);
  printf("%d %d", x, y);`,
    options: [
      "10 5",
      "5 10",
      "10 10",
      "5 5"
    ],
    correct: 1,
    explanation: "Call by value: original variables x and y remain unchanged.",
    difficulty: "Intermediate",
    topic: "Functions"
  },
  {
    id: 75,
    question: "What will this fundamental conditional chain output?",
    code: `int score = 85;
  if(score >= 90) printf("A");
  else if(score >= 80) printf("B");
  else if(score >= 70) printf("C");
  else printf("F");`,
    options: [
      "A",
      "B",
      "C",
      "F"
    ],
    correct: 1,
    explanation: "score=85 satisfies score >= 80 but not score >= 90, so prints 'B'.",
    difficulty: "Basic",
    topic: "Conditional Statement"
  },
  {
    id: 76,
    question: "What is the output of this fundamental string question?",
    code: `char str[] = "HELLO";
  printf("%c", str[1] + 32);`,
    options: [
      "e",
      "E",
      "h",
      "H"
    ],
    correct: 0,
    explanation: "str[1] = 'E'. ASCII value of 'E' is 69, 'e' is 101. 69 + 32 = 101 = 'e'.",
    difficulty: "Intermediate",
    topic: "Strings"
  },
];