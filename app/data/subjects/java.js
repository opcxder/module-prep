// Core Java Questions
export const javaQuestions = {
  theory: [
    {
"id": 1,
"question": "Find the output of the following program:\npublic class Solution{\n    public static void main(String[] args){\n        short x = 10;\n        x = x * 5;\n        System.out.print(x);\n    }\n}",
"options": [
"50",
"10",
"compilation error",
"Runtime error"
],
"correct": 2,
"explanation": "When performing arithmetic operations on short or byte types, Java automatically promotes them to int. The expression 'x * 5' returns an int, but you're trying to assign it back to a short without explicit casting. This causes a compilation error because Java doesn't allow implicit narrowing conversions from int to short. To fix this, you would need: x = (short)(x * 5);",
"difficulty": "Intermediate",
"topic": "Data Types & Type Conversion"
},
{
"id": 2,
"question": "Find the output of the following program:\npublic class Solution{\n    public static void main(String[] args){\n        byte x = 127;\n        x++;\n        x++;\n        System.out.print(x);\n    }\n}",
"options": [
"129",
"2",
"127",
"-127"
],
"correct": 3,
"explanation": "byte range is -128 to 127 (8 bits, signed). Starting with 127, first x++ makes it 128, which overflows to -128 due to two's complement representation. Second x++ makes it -127. This demonstrates integer overflow in Java - when you exceed the maximum value, it wraps around to the minimum value.",
"difficulty": "Intermediate",
"topic": "Data Types & Overflow"
},
{
"id": 3,
"question": "Find the output of the following program:\npublic class Solution{\n    public static void main(String[] args){\n        int[] x = {120, 200, 016};\n        for(int i = 0; i < x.length; i++){\n            System.out.print(x[i] + " ");\n        }\n    }\n}",
"options": [
"120 200 16",
"120 200 14",
"none compilation error",
"Runtime error"
],
"correct": 1,
"explanation": "The number 016 is an octal (base-8) literal because it starts with 0. In octal: 016 = 1×8¹ + 6×8⁰ = 8 + 6 = 14 in decimal. So the array contains {120, 200, 14} and the output is '120 200 14 '.",
"difficulty": "Intermediate",
"topic": "Number Systems & Arrays"
},
{
"id": 4,
"question": "Find the value of A[1] after execution of the following program:\nint[] A = {0,2,4,1,3};\nfor(int i = 0; i < A.length; i++){\n    A[i] = A[(A[i] + 3) % A.length];\n}",
"options": [
"0",
"1",
"2",
"4"
],
"correct": 2,
"explanation": "Initially A = {0,2,4,1,3}. The loop transforms each element: i=0: A[0] = A[(0+3)%5] = A[3] = 1; i=1: A[1] = A[(2+3)%5] = A[0] = 1 (now 1); i=2: A[2] = A[(4+3)%5] = A[2] = 4 (unchanged); i=3: A[3] = A[(1+3)%5] = A[4] = 3; i=4: A[4] = A[(3+3)%5] = A[1] = 1 (now 1). Final A[1] = 1.",
"difficulty": "Advanced",
"topic": "Arrays & Modular Arithmetic"
}
],
"conceptual": [
{
"id": 5,
"question": "When an array is passed to a method, what does the method receive?",
"options": [
"A copy of the array",
"A reference to the array",
"The array itself",
"The size of the array"
],
"correct": 1,
"explanation": "In Java, arrays are objects. When you pass an array to a method, you're passing a reference (memory address) to the array object, not a copy of the array. This means modifications made to array elements inside the method will affect the original array. However, if you reassign the parameter to a new array, it won't affect the original reference.",
"difficulty": "Basic",
"topic": "Arrays & Method Parameters"
},
{
"id": 6,
"question": "Identify the correct restriction on static methods.",
"options": [
"They must access only static data",
"They can only call other static methods",
"They cannot refer to this or super",
"All of the above"
],
"correct": 2,
"explanation": "Static methods cannot refer to 'this' or 'super' because they belong to the class, not to any instance. However, they CAN access non-static data and call non-static methods if they have an object reference. They don't have to access only static data or call only static methods - they just need an instance to do so.",
"difficulty": "Intermediate",
"topic": "Static Methods"
},
{
"id": 7,
"question": "Identify the output of the following program:\nString str = "Hellow";\nSystem.out.println(str.indexOf('t'));",
"options": [
"0",
"1",
"error",
"-1"
],
"correct": 3,
"explanation": "The indexOf() method returns the index of the first occurrence of the specified character. Since the character 't' is not present in the string "Hellow", indexOf() returns -1 to indicate that the character was not found.",
"difficulty": "Basic",
"topic": "String Methods"
},
{
"id": 8,
"question": "To which of the following does the class String belong to?",
"options": [
"java.lang",
"java.util",
"java.io",
"java.awt"
],
"correct": 0,
"explanation": "The String class belongs to the java.lang package. Classes in java.lang are automatically imported in every Java program, which is why you don't need to explicitly import String, Object, System, etc. This package contains fundamental classes that are essential to the Java language.",
"difficulty": "Basic",
"topic": "Packages"
}
],
"syntaxErrors": [
{
"id": 9,
"question": "Find the output of the following code:\nint ++a = 100;\nSystem.out.println(++a);",
"options": [
"100",
"101",
"Compilation error",
"Runtime error"
],
"correct": 2,
"explanation": "The syntax 'int ++a = 100;' is invalid. You cannot use the pre-increment operator (++) in a variable declaration. The correct syntax would be either 'int a = 100;' for declaration or '++a' for incrementing an already declared variable. This results in a compilation error.",
"difficulty": "Basic",
"topic": "Operators & Syntax"
},
{
"id": 10,
"question": "What is the implicit return type of constructor?",
"options": [
"void",
"Object",
"The class type",
"No return type"
],
"correct": 3,
"explanation": "Constructors do not have a return type, not even void. They implicitly return an instance of the class, but you cannot specify a return type in the constructor declaration. If you add a return type to a constructor, it becomes a regular method instead of a constructor.",
"difficulty": "Basic",
"topic": "Constructors"
}
],
"controlFlow": [
{
"id": 11,
"question": "Find the output of the following code:\nPublic class Solution{\n    Public static void main(String args[]){\n        Int i;\n        for(i = 1; i < 6; i++){\n            if(i > 3) continue;\n        }\n        System.out.println(i);\n    }\n}",
"options": [
"4",
"5",
"6",
"Compilation error"
],
"correct": 2,
"explanation": "The loop runs from i=1 to i=5. When i>3 (i.e., i=4,5), continue is executed, which skips the rest of the loop body but continues with the next iteration. The loop terminates when i becomes 6 (fails the condition i<6). Therefore, i=6 when printed. Note: The code also has compilation errors due to 'Public' and 'Int' (should be lowercase).",
"difficulty": "Intermediate",
"topic": "Loops & Control Statements"
}
],
"exceptions": [
{
"id": 12,
"question": "Which of the following exception is thrown when divided by zero statement is executed?",
"options": [
"NumberFormatException",
"ArithmeticException",
"ArrayIndexOutOfBoundsException",
"NullPointerException"
],
"correct": 1,
"explanation": "ArithmeticException is thrown when an exceptional arithmetic condition occurs, such as dividing by zero. This is a runtime exception that occurs during integer division by zero (note: floating-point division by zero results in infinity, not an exception).",
"difficulty": "Basic",
"topic": "Exception Handling"
}
],
"dataTypes": [
{
"id": 13,
"question": "What is the numerical range of char?",
"options": [
"0 to 32767",
"0 to 65535",
"-256 to 255",
"-32768 to 32767"
],
"correct": 1,
"explanation": "char in Java is a 16-bit unsigned integer type that ranges from 0 to 65535 (2^16 - 1). It represents Unicode characters and is always positive. Unlike other primitive types in Java, char is unsigned.",
"difficulty": "Basic",
"topic": "Data Types"
}
],
"keywords": [
{
"id": 14,
"question": "Which of the following are Java reserved words?",
"options": [
"1 and 2 (run, import)",
"2 and 3 (import, default)",
"3 and 4 (default, implement)",
"2 and 4 (import, implement)"
],
"correct": 1,
"explanation": "'import' and 'default' are Java reserved words. 'import' is used to include classes/packages, and 'default' is used in switch statements and interface methods (Java 8+). 'run' is a method name (not reserved), and 'implement' is not a Java keyword (the correct keyword is 'implements').",
"difficulty": "Basic",
"topic": "Keywords & Reserved Words"
}
],
"threading": [
{
"id": 15,
"question": "Which two of the following methods are defined in class Thread?",
"options": [
"1 and 4 (start(), run())",
"2 and 3 (wait(), notify())",
"3 and 4 (notify(), run())",
"2 and 4 (wait(), run())"
],
"correct": 0,
"explanation": "start() and run() are methods defined in the Thread class. start() begins thread execution and calls run(). wait() and notify() are methods of the Object class, not Thread class. terminate() is not a standard Java Thread method.",
"difficulty": "Intermediate",
"topic": "Threading"
},
{
"id": 16,
"question": "Which will contain the body of the thread?",
"options": [
"run()",
"start()",
"stop()",
"main()"
],
"correct": 0,
"explanation": "The run() method contains the code that constitutes the new thread's task. When you call start(), it creates a new thread and calls the run() method in that new thread. You override run() to define what the thread should do.",
"difficulty": "Basic",
"topic": "Threading"
},
{
"id": 17,
"question": "public class MyRunnable implements Runnable { public void run() { // some code here } }\nWhich of these will create and start this thread?",
"options": [
"new Runnable(MyRunnable).start()",
"new Thread(MyRunnable).run()",
"new Thread(new MyRunnable()).start()",
"new MyRunnable().start()"
],
"correct": 2,
"explanation": "To create and start a thread with a Runnable: 1) Create an instance of MyRunnable, 2) Pass it to Thread constructor, 3) Call start(). 'new Thread(new MyRunnable()).start()' is correct. Option 2 calls run() directly (doesn't create new thread), option 4 is wrong because Runnable doesn't have start() method.",
"difficulty": "Intermediate",
"topic": "Threading & Runnable"
}
],
"stringManipulation": [
{
"id": 18,
"question": "What will be the output of the program?\npublic class StringRef {\n    public static void main(String [] args) {\n        String s1 = "abc";\n        String s2 = "def";\n        String s3 = s2;\n        s2 = "ghi";\n        System.out.println(s1 + s2 + s3);\n    }\n}",
"options": [
"abcdefghi",
"abcdefdef",
"abcghidef",
"abcghighi"
],
"correct": 2,
"explanation": "Initially: s1="abc", s2="def", s3=s2 (s3 points to "def"). When s2="ghi", only s2 changes to point to "ghi", but s3 still points to "def". String concatenation: s1 + s2 + s3 = "abc" + "ghi" + "def" = "abcghidef".",
"difficulty": "Intermediate",
"topic": "String References"
},
{
"id": 19,
"question": "How many String objects have been created?\nString x = new String("xyz");\nString y = "abc";\nx = x + y;",
"options": [
"2",
"3",
"4",
"5"
],
"correct": 2,
"explanation": "String objects created: 1) "xyz" in string pool, 2) new String("xyz") object on heap, 3) "abc" in string pool, 4) "xyzabc" created by concatenation. Total: 4 objects. Note that x = x + y creates a new String object for the concatenated result.",
"difficulty": "Advanced",
"topic": "String Objects & Memory"
}
],
"advancedConcepts": [
{
"id": 20,
"question": "What will be the output of the program?\npublic class F0091 {\n    public void main( String[] args ) {\n        System.out.println( "Hello" + args[0] );\n    }\n}\nExecuted with: java F0091 world",
"options": [
"Hello",
"Hello Foo91",
"Hello world",
"The code does not run"
],
"correct": 3,
"explanation": "The main method is declared as 'public void main' instead of 'public static void main'. The main method must be static to be the entry point of a Java application. Without static, the JVM cannot call the method and the program won't run properly.",
"difficulty": "Intermediate",
"topic": "Main Method & Static"
},
{
"id": 21,
"question": "What will be the output of the program?\ntry {\n    System.out.print("hello ");\n    throwit();\n} catch (Exception re) {\n    System.out.print("caught ");\n} finally {\n    System.out.print("finally ");\n}\nSystem.out.println("after ");\n\nwhere throwit() prints "throwit " and throws RuntimeException",
"options": [
"hello throwit caught",
"Compilation fails",
"hello throwit RuntimeException caught after",
"hello throwit caught finally after"
],
"correct": 3,
"explanation": "Execution flow: 1) prints "hello ", 2) throwit() prints "throwit " and throws RuntimeException, 3) catch block executes printing "caught ", 4) finally block always executes printing "finally ", 5) continues with "after ". Total output: "hello throwit caught finally after".",
"difficulty": "Advanced",
"topic": "Exception Handling & Finally Block"
},
{
"id": 22,
"question": "What will be the output of the program?\npublic int aMethod() {\n    static int i = 0;\n    i++;\n    return i;\n}",
"options": [
"0",
"1",
"2",
"Compilation fails"
],
"correct": 3,
"explanation": "You cannot declare static variables inside non-static methods. Static variables can only be declared at class level. This code will result in a compilation error. If this were allowed, the static variable would be shared across all method calls.",
"difficulty": "Intermediate",
"topic": "Static Variables & Method Scope"
},
{
"id": 23,
"question": "What will be the output of the program?\nint x = 3;\nint y = 1;\nif (x = y) {\n    System.out.println("x =" + x);\n}",
"options": [
"x = 1",
"x = 3",
"Compilation fails",
"The code runs with no output"
],
"correct": 2,
"explanation": "The if condition uses assignment operator (=) instead of comparison operator (==). In Java, assignment expression returns the assigned value, but boolean is expected in if condition. Since x = y assigns 1 to x and returns int 1, but if expects boolean, this causes compilation error.",
"difficulty": "Intermediate",
"topic": "Operators & Control Statements"
},
{
"id": 24,
"question": "What will be the output of the program?\nint x = 1, y = 6;\nwhile (y--) {\n    x++;\n}\nSystem.out.println("x = " + x +" y = " + y);",
"options": [
"x = 6 y = 0",
"x = 7 y = 0",
"x = 6 y = -1",
"Compilation fails"
],
"correct": 1,
"explanation": "The loop condition y-- uses post-decrement: it evaluates y's current value (true if non-zero), then decrements y. Loop runs 6 times: y goes 6→5→4→3→2→1→0, x increments 6 times: 1→7. After 6th iteration, y becomes 0 (loop stops). Final: x = 7, y = 0.",
"difficulty": "Intermediate",
"topic": "Loops & Post-decrement Operator"
},
    {
      id: 25,
      question: "Which keyword is used to create an object in Java?",
      options: [
        "new",
        "create", 
        "object",
        "instance"
      ],
      correct: 0,
      explanation: "The 'new' keyword is used to create new objects in Java. It allocates memory and calls the constructor.",
      difficulty: "Basic",
      topic: "Object Creation"
    },
    {
      id: 26,
      question: "What is the default value of a boolean variable in Java?",
      options: [
        "true",
        "false", 
        "null",
        "undefined"
      ],
      correct: 1,
      explanation: "In Java, boolean variables have a default value of false. This is different from some other languages where booleans might be undefined.",
      difficulty: "Basic",
      topic: "Data Types"
    }
  ],
  coding: [
    {
      id: 11,
      question: "What is the output of this Java code?",
      code: `String str1 = "Hello";
String str2 = "Hello";
System.out.println(str1 == str2);`,
      options: [
        "true",
        "false", 
        "Error",
        "null"
      ],
      correct: 0,
      explanation: "String literals are interned in Java. Both str1 and str2 point to the same object in the string pool, so == returns true.",
      difficulty: "Intermediate",
      topic: "String Handling"
    },
    {
      id: 12,
      question: "What will this code print?",
      code: `int[] arr = {1, 2, 3, 4, 5};
System.out.println(arr.length);`,
      options: [
        "4",
        "5", 
        "6",
        "Error"
      ],
      correct: 1,
      explanation: "The array has 5 elements: {1, 2, 3, 4, 5}. The length property returns the number of elements, which is 5.",
      difficulty: "Basic",
      topic: "Arrays"
    }
  ]
};
