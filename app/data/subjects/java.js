// Core Java Questions
export const javaQuestions = {
  theory: [
    {
      id: 1,
      question: `Find the output of the following program:
public class Solution{
    public static void main(String[] args){
        short x = 10;
        x = x * 5;
        System.out.print(x);
    }
}`,
      options: ["50", "10", "compilation error", "Runtime error"],
      correct: 2,
      explanation: `When performing arithmetic operations on short or byte types, Java automatically promotes them to int. 
The expression 'x * 5' returns an int, but you're trying to assign it back to a short without explicit casting. 
This causes a compilation error because Java doesn't allow implicit narrowing conversions from int to short. 
To fix this, you would need: x = (short)(x * 5);`,
      difficulty: "Intermediate",
      topic: "Data Types & Type Conversion"
    },
    {
      id: 2,
      question: `Find the output of the following program:
public class Solution{
    public static void main(String[] args){
        byte x = 127;
        x++;
        x++;
        System.out.print(x);
    }
}`,
      options: ["129", "2", "127", "-127"],
      correct: 3,
      explanation: `byte range is -128 to 127 (8 bits, signed). 
Starting with 127, first x++ makes it 128, which overflows to -128 due to two's complement representation. 
Second x++ makes it -127. This demonstrates integer overflow in Java.`,
      difficulty: "Intermediate",
      topic: "Data Types & Overflow"
    },
    {
      id: 3,
      question: `Find the output of the following program:
public class Solution{
    public static void main(String[] args){
        int[] x = {120, 200, 016};
        for(int i = 0; i < x.length; i++){
            System.out.print(x[i] + " ");
        }
    }
}`,
      options: ["120 200 16", "120 200 14", "none compilation error", "Runtime error"],
      correct: 1,
      explanation: `The number 016 is an octal (base-8) literal because it starts with 0. 
In octal: 016 = 1×8 + 6 = 14 in decimal. 
So the array contains {120, 200, 14} and the output is '120 200 14 '.`,
      difficulty: "Intermediate",
      topic: "Number Systems & Arrays"
    },
    {
      id: 4,
      question: `Find the value of A[1] after execution of the following program:
int[] A = {0,2,4,1,3};
for(int i = 0; i < A.length; i++){
    A[i] = A[(A[i] + 3) % A.length];
}`,
      options: ["0", "1", "2", "4"],
      correct: 2,
      explanation: `Initially A = {0,2,4,1,3}. The loop transforms each element: 
i=0: A[0] = A[(0+3)%5] = A[3] = 1; 
i=1: A[1] = A[(2+3)%5] = A[0] = 1; 
i=2: A[2] = A[(4+3)%5] = A[2] = 4; 
i=3: A[3] = A[(1+3)%5] = A[4] = 3; 
i=4: A[4] = A[(3+3)%5] = A[1] = 1. 
Final A[1] = 1.`,
      difficulty: "Advanced",
      topic: "Arrays & Modular Arithmetic"
    }
  ],
  conceptual: [
    {
      id: 5,
      question: "When an array is passed to a method, what does the method receive?",
      options: ["A copy of the array", "A reference to the array", "The array itself", "The size of the array"],
      correct: 1,
      explanation: `In Java, arrays are objects. When you pass an array to a method, you're passing a reference (memory address) to the array object, not a copy of the array. Modifications inside the method affect the original array.`,
      difficulty: "Basic",
      topic: "Arrays & Method Parameters"
    },
    {
      id: 6,
      question: "Identify the correct restriction on static methods.",
      options: [
        "They must access only static data",
        "They can only call other static methods",
        "They cannot refer to this or super",
        "All of the above"
      ],
      correct: 2,
      explanation: `Static methods cannot refer to 'this' or 'super' because they belong to the class, not an instance. 
They can access non-static data/methods if an object reference is used.`,
      difficulty: "Intermediate",
      topic: "Static Methods"
    },
    {
      id: 7,
      question: `Identify the output of the following program:
String str = "Hellow";
System.out.println(str.indexOf('t'));`,
      options: ["0", "1", "error", "-1"],
      correct: 3,
      explanation: `indexOf() returns the index of the first occurrence of a character. 
Since 't' is not present, indexOf() returns -1.`,
      difficulty: "Basic",
      topic: "String Methods"
    },
    {
      id: 8,
      question: "To which of the following does the class String belong to?",
      options: ["java.lang", "java.util", "java.io", "java.awt"],
      correct: 0,
      explanation: "The String class belongs to the java.lang package, which is automatically imported in every Java program.",
      difficulty: "Basic",
      topic: "Packages"
    }
  ],
  syntaxErrors: [
    {
      id: 9,
      question: `Find the output of the following code:
int ++a = 100;
System.out.println(++a);`,
      options: ["100", "101", "Compilation error", "Runtime error"],
      correct: 2,
      explanation: `The syntax 'int ++a = 100;' is invalid. 
You cannot use pre-increment (++) in a declaration. Compilation error occurs.`,
      difficulty: "Basic",
      topic: "Operators & Syntax"
    },
    {
      id: 10,
      question: "What is the implicit return type of constructor?",
      options: ["void", "Object", "The class type", "No return type"],
      correct: 3,
      explanation: "Constructors do not have a return type. If you specify a return type, it becomes a regular method.",
      difficulty: "Basic",
      topic: "Constructors"
    }
  ],
  controlFlow: [
    {
      id: 11,
      question: `Find the output of the following code:
Public class Solution{
    Public static void main(String args[]){
        Int i;
        for(i = 1; i < 6; i++){
            if(i > 3) continue;
        }
        System.out.println(i);
    }
}`,
      options: ["4", "5", "6", "Compilation error"],
      correct: 2,
      explanation: `The loop runs from i=1 to i=5. When i>3, continue skips rest of body but continues next iteration. 
Loop terminates at i=6. Also, code has compilation errors due to 'Public' and 'Int'.`,
      difficulty: "Intermediate",
      topic: "Loops & Control Statements"
    }
  ],
  exceptions: [
    {
      id: 12,
      question: "Which of the following exception is thrown when divided by zero statement is executed?",
      options: ["NumberFormatException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "NullPointerException"],
      correct: 1,
      explanation: "ArithmeticException is thrown when dividing by zero in integer division.",
      difficulty: "Basic",
      topic: "Exception Handling"
    }
  ],
  dataTypes: [
    {
      id: 13,
      question: "What is the numerical range of char?",
      options: ["0 to 32767", "0 to 65535", "-256 to 255", "-32768 to 32767"],
      correct: 1,
      explanation: "char in Java is 16-bit unsigned integer ranging 0–65535.",
      difficulty: "Basic",
      topic: "Data Types"
    }
  ],
  keywords: [
    {
      id: 14,
      question: "Which of the following are Java reserved words?",
      options: [
        "1 and 2 (run, import)",
        "2 and 3 (import, default)",
        "3 and 4 (default, implement)",
        "2 and 4 (import, implement)"
      ],
      correct: 1,
      explanation: "'import' and 'default' are reserved. 'run' is a method, 'implement' is not a keyword.",
      difficulty: "Basic",
      topic: "Keywords & Reserved Words"
    }
  ],
  threading: [
    {
      id: 15,
      question: "Which two of the following methods are defined in class Thread?",
      options: ["1 and 4 (start(), run())", "2 and 3 (wait(), notify())", "3 and 4 (notify(), run())", "2 and 4 (wait(), run())"],
      correct: 0,
      explanation: "start() and run() are Thread methods. wait() and notify() belong to Object.",
      difficulty: "Intermediate",
      topic: "Threading"
    },
    {
      id: 16,
      question: "Which will contain the body of the thread?",
      options: ["run()", "start()", "stop()", "main()"],
      correct: 0,
      explanation: "run() contains the code executed by the thread. start() creates new thread and calls run().",
      difficulty: "Basic",
      topic: "Threading"
    },
    {
      id: 17,
      question: `public class MyRunnable implements Runnable { public void run() { // some code here } }
Which of these will create and start this thread?`,
      options: [
        "new Runnable(MyRunnable).start()",
        "new Thread(MyRunnable).run()",
        "new Thread(new MyRunnable()).start()",
        "new MyRunnable().start()"
      ],
      correct: 2,
      explanation: "To start a thread with Runnable: create instance, pass to Thread, call start(). Only option 3 is correct.",
      difficulty: "Intermediate",
      topic: "Threading & Runnable"
    }
  ],
  stringManipulation: [
    {
      id: 18,
      question: `What will be the output of the program?
public class StringRef {
    public static void main(String [] args) {
        String s1 = "abc";
        String s2 = "def";
        String s3 = s2;
        s2 = "ghi";
        System.out.println(s1 + s2 + s3);
    }
}`,
      options: ["abcdefghi", "abcdefdef", "abcghidef", "abcghighi"],
      correct: 2,
      explanation: "s3 still points to 'def'. Concatenation: s1 + s2 + s3 = 'abc' + 'ghi' + 'def' = 'abcghidef'.",
      difficulty: "Intermediate",
      topic: "String References"
    },
    {
      id: 19,
      question: `How many String objects have been created?
String x = new String("xyz");
String y = "abc";
x = x + y;`,
      options: ["2", "3", "4", "5"],
      correct: 2,
      explanation: "Objects created: 1) 'xyz' in pool, 2) new String('xyz'), 3) 'abc' in pool, 4) concatenation 'xyzabc'. Total 4.",
      difficulty: "Advanced",
      topic: "String Objects & Memory"
    }
  ],
  advancedConcepts: [
    {
      id: 20,
      question: `What will be the output of the program?
public class F0091 {
    public void main( String[] args ) {
        System.out.println( "Hello" + args[0] );
    }
}
Executed with: java F0091 world`,
      options: ["Hello", "Hello Foo91", "Hello world", "The code does not run"],
      correct: 3,
      explanation: "main method must be static. 'public void main' prevents JVM from calling it. Program won't run.",
      difficulty: "Intermediate",
      topic: "Main Method & Static"
    },
    {
      id: 21,
      question: `What will be the output of the program?
try {
    System.out.print("hello ");
    throwit();
} catch (Exception re) {
    System.out.print("caught ");
} finally {
    System.out.print("finally ");
}
System.out.println("after ");

where throwit() prints "throwit " and throws RuntimeException`,
      options: [
        "hello throwit caught",
        "Compilation fails",
        "hello throwit RuntimeException caught after",
        "hello throwit caught finally after"
      ],
      correct: 3,
      explanation: "Execution: prints 'hello ', throwit() prints 'throwit ', exception caught prints 'caught ', finally prints 'finally ', then prints 'after '.",
      difficulty: "Advanced",
      topic: "Exception Handling & Finally Block"
    },
    {
      id: 22,
      question: `What will be the output of the program?
public int aMethod() {
    static int i = 0;
    i++;
    return i;
}`,
      options: ["0", "1", "2", "Compilation fails"],
      correct: 3,
      explanation: "Static variables cannot be declared inside methods. Compilation fails.",
      difficulty: "Intermediate",
      topic: "Static Variables & Method Scope"
    },
    {
      id: 23,
      question: `What will be the output of the program?
int x = 3;
int y = 1;
if (x = y) {
    System.out.println("x =" + x);
}`,
      options: ["x = 1", "x = 3", "Compilation fails", "The code runs with no output"],
      correct: 2,
      explanation: "Assignment used instead of comparison in if. if expects boolean. Compilation fails.",
      difficulty: "Intermediate",
      topic: "Operators & Control Statements"
    },
    {
      id: 24,
      question: `What will be the output of the program?
int x = 1, y = 6;
while (y--) {
    x++;
}
System.out.println("x = " + x +" y = " + y);`,
      options: ["x = 6 y = 0", "x = 7 y = 0", "x = 6 y = -1", "Compilation fails"],
      correct: 1,
      explanation: "Loop runs 6 times, y decrements post-condition. Final: x = 7, y = 0.",
      difficulty: "Intermediate",
      topic: "Loops & Post-decrement Operator"
    },
    {
      id: 25,
      question: "Which keyword is used to create an object in Java?",
      options: ["new", "create", "object", "instance"],
      correct: 0,
      explanation: "The 'new' keyword allocates memory and calls the constructor.",
      difficulty: "Basic",
      topic: "Object Creation"
    },
    {
      id: 26,
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "undefined"],
      correct: 1,
      explanation: "Default value of boolean in Java is false.",
      difficulty: "Basic",
      topic: "Data Types"
    }
  ],
  coding: [
    {
      id: 27,
      question: "What is the output of this Java code?",
      code: `String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2);`,
      options: ["true", "false", "Error", "null"],
      correct: 0,
      explanation: "String literals are interned in Java. Both str1 and str2 point to the same object in the pool, so == returns true.",
      difficulty: "Intermediate",
      topic: "String Handling"
    },
    {
      id: 28,
      question: "What will this code print?",
      code: `int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr.length);`,
      options: ["4", "5", "6", "Error"],
      correct: 1,
      explanation: "The array has 5 elements. The length property returns 5.",
      difficulty: "Basic",
      topic: "Arrays"
    }
  ]
};
