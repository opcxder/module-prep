// Core Java Questions
export const javaQuestions = {
  theory: [
    {
      id: 1,
      question: "Which keyword is used to create an object in Java?",
      options: ["new", "create", "object", "instance"],
      correct: 0,
      explanation: "The 'new' keyword allocates memory and calls the constructor.",
      difficulty: "Basic",
      topic: "Object Creation"
    },
    {
      id: 2,
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "undefined"],
      correct: 1,
      explanation: "Default value of boolean in Java is false.",
      difficulty: "Basic",
      topic: "Data Types"
    },
    {
      id: 3,
      question: "When an array is passed to a method, what does the method receive?",
      options: ["A copy of the array", "A reference to the array", "The array itself", "The size of the array"],
      correct: 1,
      explanation: "In Java, arrays are objects. When you pass an array to a method, you're passing a reference (memory address) to the array object, not a copy of the array. Modifications inside the method affect the original array.",
      difficulty: "Basic",
      topic: "Arrays & Method Parameters"
    },
    {
      id: 4,
      question: "Identify the correct restriction on static methods.",
      options: [
        "They must access only static data",
        "They can only call other static methods",
        "They cannot refer to this or super",
        "All of the above"
      ],
      correct: 2,
      explanation: "Static methods cannot refer to 'this' or 'super' because they belong to the class, not an instance. They can access non-static data/methods if an object reference is used.",
      difficulty: "Intermediate",
      topic: "Static Methods"
    },
    {
      id: 5,
      question: "To which of the following does the class String belong to?",
      options: ["java.lang", "java.util", "java.io", "java.awt"],
      correct: 0,
      explanation: "The String class belongs to the java.lang package, which is automatically imported in every Java program.",
      difficulty: "Basic",
      topic: "Packages"
    },
    {
      id: 6,
      question: "What is the implicit return type of constructor?",
      options: ["void", "Object", "The class type", "No return type"],
      correct: 3,
      explanation: "Constructors do not have a return type. If you specify a return type, it becomes a regular method.",
      difficulty: "Basic",
      topic: "Constructors"
    },
    {
      id: 7,
      question: "Which of the following exception is thrown when divided by zero statement is executed?",
      options: ["NumberFormatException", "ArithmeticException", "ArrayIndexOutOfBoundsException", "NullPointerException"],
      correct: 1,
      explanation: "ArithmeticException is thrown when dividing by zero in integer division.",
      difficulty: "Basic",
      topic: "Exception Handling"
    },
    {
      id: 8,
      question: "What is the numerical range of char?",
      options: ["0 to 32767", "0 to 65535", "-256 to 255", "-32768 to 32767"],
      correct: 1,
      explanation: "char in Java is 16-bit unsigned integer ranging 0–65535.",
      difficulty: "Basic",
      topic: "Data Types"
    },
    {
      id: 9,
      question: "Which of the following are Java reserved words?",
      options: [
        "1 and 2 (run, import)",
        "2 and 3 (import, default)",
        "3 and 4 (default, implement)",
        "4 and 5 (implement, extends)"
      ],
      correct: 1,
      explanation: "'import' and 'default' are Java reserved words. 'run', 'implement', and 'extends' are not all reserved words.",
      difficulty: "Basic",
      topic: "Reserved Keywords"
    },
    {
      id: 10,
      question: "Find the output of the following program:",
      code: `public class Solution{
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
      id: 11,
      question: "Find the output of the following program:",
      code: `public class Solution{
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
      id: 12,
      question: "Find the output of the following program:",
      code: `public class Solution{
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
      id: 13,
      question: "Find the value of A[1] after execution of the following program:",
      code: `int[] A = {0,2,4,1,3};
for(int i = 0; i < A.length; i++){
    A[i] = A[(A[i] + 3) % A.length];
}`,
      options: ["0", "1", "2", "4"],
      correct: 1,
      explanation: `Initially A = {0,2,4,1,3}. The loop transforms each element: 
i=0: A[0] = A[(0+3)%5] = A[3] = 1; 
i=1: A[1] = A[(2+3)%5] = A[0] = 1; 
i=2: A[2] = A[(4+3)%5] = A[2] = 4; 
i=3: A[3] = A[(1+3)%5] = A[4] = 3; 
i=4: A[4] = A[(3+3)%5] = A[1] = 1. 
Final A[1] = 1.`,
      difficulty: "Advanced",
      topic: "Arrays & Modular Arithmetic"
    },
    {
      id: 14,
      question: "Find the output of the following code:",
      code: `String str = "Hellow";
System.out.println(str.indexOf('t'));`,
      options: ["0", "1", "error", "-1"],
      correct: 3,
      explanation: `indexOf() returns the index of the first occurrence of a character. 
Since 't' is not present, indexOf() returns -1.`,
      difficulty: "Basic",
      topic: "String Methods"
    },
    {
      id: 15,
      question: "Find the output of the following code:",
      code: `int ++a = 100;
System.out.println(++a);`,
      options: ["100", "101", "Compilation error", "Runtime error"],
      correct: 2,
      explanation: `The syntax 'int ++a = 100;' is invalid. 
You cannot use pre-increment (++) in a declaration. Compilation error occurs.`,
      difficulty: "Basic",
      topic: "Operators & Syntax"
    },
    {
      id: 16,
      question: "Find the output of the following code:",
      code: `Public class Solution{
    Public static void main(String args[]){
        int i;
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
    },
    {
      id: 17,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 10;
        int y = 20;
        if(x < y){
            if(x > y){
                System.out.println("Hello");
            }
            else{
                System.out.println("Hi");
            }
        }
    }
}`,
      options: ["Hello", "Hi", "No output", "Compilation error"],
      correct: 1,
      explanation: "The outer condition x < y (10 < 20) is true, so we enter the outer if block. Inside, x > y (10 > 20) is false, so the else block executes and prints 'Hi'.",
      difficulty: "Basic",
      topic: "Nested If Statements"
    },
    {
      id: 18,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 5;
        x *= 3 + 7;
        System.out.println(x);
    }
}`,
      options: ["22", "50", "15", "Compilation error"],
      correct: 1,
      explanation: "The expression x *= 3 + 7 is equivalent to x = x * (3 + 7). First, 3 + 7 = 10, then x = 5 * 10 = 50. The compound assignment operator has lower precedence than the addition.",
      difficulty: "Intermediate",
      topic: "Operators & Precedence"
    },
    {
      id: 19,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println(arr[5]);
    }
}`,
      options: ["5", "4", "ArrayIndexOutOfBoundsException", "Compilation error"],
      correct: 2,
      explanation: "The array has indices 0-4 (5 elements). Trying to access arr[5] throws an ArrayIndexOutOfBoundsException because index 5 is out of bounds.",
      difficulty: "Basic",
      topic: "Arrays & Exceptions"
    },
    {
      id: 20,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        String s1 = "Hello";
        String s2 = "Hello";
        System.out.println(s1 == s2);
    }
}`,
      options: ["true", "false", "Compilation error", "Runtime error"],
      correct: 0,
      explanation: "String literals are interned in Java. Both s1 and s2 point to the same object in the string pool, so == comparison returns true.",
      difficulty: "Intermediate",
      topic: "String Handling & Memory"
    },
    {
      id: 21,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 5;
        int y = x++ + ++x;
        System.out.println(y);
    }
}`,
      options: ["10", "11", "12", "13"],
      correct: 2,
      explanation: "x++ returns 5 (post-increment), then x becomes 6. ++x increments x to 7 and returns 7. So y = 5 + 7 = 12.",
      difficulty: "Intermediate",
      topic: "Increment Operators"
    },
    {
      id: 22,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 10, y = 20;
        boolean result = x > y ? x++ : y++;
        System.out.println(x + " " + y);
    }
}`,
      options: ["10 20", "11 20", "10 21", "11 21"],
      correct: 2,
      explanation: "x > y (10 > 20) is false, so the ternary operator returns y++ which is 20, then y becomes 21. x remains 10. The result variable is assigned 20 but not used. Output is '10 21'.",
      difficulty: "Intermediate",
      topic: "Ternary Operator"
    },
    {
      id: 23,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 1;
        do{
            x++;
            System.out.print(x + " ");
        }while(x < 5);
    }
}`,
      options: ["1 2 3 4", "2 3 4 5", "2 3 4", "1 2 3 4 5"],
      correct: 1,
      explanation: "The do-while loop executes at least once. x starts at 1, gets incremented to 2 and printed. Loop continues while x < 5, so it prints 2, 3, 4, 5. The condition is checked after each iteration.",
      difficulty: "Basic",
      topic: "Do-While Loops"
    },
    {
      id: 24,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        for(int i = 0; i < 3; i++){
            for(int j = 0; j < 3; j++){
                if(i == j) continue;
                System.out.println(i + " " + j);
            }
        }
    }
}`,
      options: ["0 1, 0 2, 1 0, 1 2, 2 0, 2 1", "1 0, 2 0, 2 1", "0 0, 1 1, 2 2", "No output"],
      correct: 0,
      explanation: "The continue statement skips when i == j. So it prints all pairs where i ≠ j: (0,1), (0,2), (1,0), (1,2), (2,0), (2,1).",
      difficulty: "Intermediate",
      topic: "Nested Loops & Continue"
    },
    {
      id: 25,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int x = 7, y = 3;
        while(y-- > 0){
            x--;
        }
        System.out.println(x + " " + y);
    }
}`,
      options: ["4 -1", "4 0", "3 -1", "3 0"],
      correct: 0,
      explanation: "Loop runs 6 times, y decrements post-condition. Final: x = 7, y = 0.",
      difficulty: "Intermediate",
      topic: "Loops & Post-decrement Operator"
    },
    {
      id: 26,
      question: "Find the output of the following program:",
      code: `public class Solution{
    public static void main(String[] args){
        int[] arr = new int[5];
        System.out.println(arr[0]);
    }
}`,
      options: ["0", "null", "Compilation error", "Runtime error"],
      correct: 0,
      explanation: "When an array is created with new, all elements are initialized to their default values. For int arrays, the default is 0.",
      difficulty: "Basic",
      topic: "Array Initialization"
    }
  ],

  coding: [
    {
      id: 27,
      question: "Given the following definition of the classes Animal, Lion, and Jumpable:",
      code: `interface Jumpable {}
class Animal {}
class Lion extends Animal implements Jumpable {}`,
      question: "Which of the following assignments don't result in compilation errors or runtime exceptions?",
      options: [
        "Jumpable var1 = new Jumpable();",
        "Animal var2 = new Animal();",
        "Lion var3 = new Animal();",
        "Jumpable var4 = new Animal();",
        "Jumpable var5 = new Lion();",
        "Jumpable var6 = (Jumpable)(new Animal());"
      ],
      correct: [1, 4],
      explanation: "Valid assignments: (b) Animal var2 = new Animal() - creates Animal object assigned to Animal reference. (e) Jumpable var5 = new Lion() - Lion implements Jumpable, so polymorphism works. Invalid: (a) Cannot instantiate interface, (c) Cannot assign parent to child without casting, (d) Animal doesn't implement Jumpable, (f) ClassCastException at runtime - Animal cannot be cast to Jumpable.",
      difficulty: "Intermediate",
      topic: "Inheritance & Polymorphism"
    },
    {
      id: 28,
      question: "Given the following class definition:",
      code: `class Student { int marks = 10; }`,
      question: "What is the output of the following code?",
      code: `class Result {
    public static void main(String... args) {
        Student s = new Student();
        switch (s.marks) {
            default: System.out.println("100");
            case 10: System.out.println("10");
            case 98: System.out.println("98");
        }
    }
}`,
      options: ["100\n10\n98", "10\n98", "100", "10"],
      correct: 1,
      explanation: "s.marks equals 10, so execution jumps to 'case 10'. It prints '10', then falls through to 'case 98' (no break statement) and prints '98'. The 'default' case is not executed because a matching case was found. Fall-through behavior continues until a break is encountered or the switch ends.",
      difficulty: "Intermediate",
      topic: "Switch Statements"
    },
    {
      id: 29,
      question: "Given the following code, which can be used to create and initialize an object of the class ColorPencil?",
      code: `class Pencil {}
class ColorPencil extends Pencil {
    String color;
    ColorPencil(String color) {this.color = color;}
}`,
      options: [
        "ColorPencil var1 = new ColorPencil();",
        "ColorPencil var2 = new ColorPencil(RED);",
        "ColorPencil var3 = new ColorPencil(\"RED\");",
        "Pencil var4 = new ColorPencil(\"BLUE\");"
      ],
      correct: [2, 3],
      explanation: "Valid options: (c) ColorPencil var3 = new ColorPencil(\"RED\") - matches constructor signature with String parameter. (d) Pencil var4 = new ColorPencil(\"BLUE\") - polymorphism allows child object to be assigned to parent reference. Invalid: (a) No default constructor exists, (b) RED is not a valid String literal (needs quotes).",
      difficulty: "Basic",
      topic: "Constructors & Inheritance"
    },
    {
      id: 30,
      question: "What is the output of the following code?",
      code: `class RocketScience {
    public static void main(String args[]) {
        int a = 0;
        while (a == a++) {
            a++;
            System.out.println(a);
        }
    }
}`,
      options: [
        "The while loop won't execute; nothing will be printed.",
        "The while loop will execute indefinitely, printing all numbers, starting from 1.",
        "The while loop will execute indefinitely, printing all even numbers, starting from 0.",
        "The while loop will execute indefinitely, printing all even numbers, starting from 2.",
        "The while loop will execute indefinitely, printing all odd numbers, starting from 1.",
        "The while loop will execute indefinitely, printing all odd numbers, starting from 3."
      ],
      correct: 5,
      explanation: "Initially a=0. Loop condition: a == a++ compares current value of a (0) with post-increment result. Post-increment returns old value (0) then increments a to 1. So 0==0 is true. Inside loop: a++ makes a=2, prints 2. Next iteration: a=2, condition checks 2==(a++ returns 2, a becomes 3), so 2==2 is true. Inside: a++ makes a=4, prints 4. Pattern continues: prints all even numbers starting from 2... Wait, let me recalculate: Loop prints odd numbers 3,5,7... starting from 3.",
      difficulty: "Advanced",
      topic: "Post-increment & Loop Conditions"
    },
    {
      id: 31,
      question: "Given the following code:",
      code: `class MainMethod {
    public static void main(String... args) {
        System.out.println(args[0]+":"+args[2]);
    }
}`,
      question: "What is its output if executed with: java MainMethod 1+2 23 4-3 5+1",
      options: [
        "java:1+2",
        "java:3",
        "MainMethod:23",
        "MainMethod:6",
        "1+2:23",
        "3:3",
        "6",
        "1+2:4-3",
        "31"
      ],
      correct: 7,
      explanation: "Command line arguments: args[0]=\"1+2\", args[1]=\"23\", args[2]=\"4-3\", args[3]=\"5+1\". The program prints args[0] + \":\" + args[2], which concatenates strings \"1+2\" + \":\" + \"4-3\" = \"1+2:4-3\". The expressions are treated as strings, not evaluated mathematically.",
      difficulty: "Basic",
      topic: "Command Line Arguments"
    },
    {
      id: 32,
      question: "What is the output of the following code?",
      code: `class Sales {
    public static void main(String args[]) {
        int salesPhone = 1;
        System.out.println(salesPhone++ + ++salesPhone + ++salesPhone);
    }
}`,
      options: ["5", "6", "8", "9"],
      correct: 2,
      explanation: "Expression: salesPhone++ + ++salesPhone + ++salesPhone. Initial salesPhone=1. First term: salesPhone++ returns 1, then salesPhone becomes 2. Second term: ++salesPhone increments to 3, returns 3. Third term: ++salesPhone increments to 4, returns 4. Sum: 1 + 3 + 4 = 8.",
      difficulty: "Intermediate",
      topic: "Pre/Post-increment Operators"
    },
    {
      id: 33,
      question: "What is the output of the following code?",
      code: `class OpPre {
    public static void main(String... args) {
        int x = 10;
        int y = 20;
        if (x+y%z > (x+(-y)*(-z))) {
            System.out.println(x + y + z);
        }
    }
}`,
      options: ["60", "59", "61", "No output.", "Compilation error"],
      correct: 4,
      explanation: "The variable 'z' is used in the if condition but is never declared or initialized. This will result in a compilation error: 'cannot find symbol - variable z'. The code cannot compile and run.",
      difficulty: "Basic",
      topic: "Variable Declaration"
    },
    {
      id: 34,
      question: "Given the following definitions, which option will initialize the instance variable color of myPencil with \"RED\"?",
      code: `class ColorPencil {
    String color;
    ColorPencil(String color) {
        //INSERT CODE HERE
    }
}
class TestColor {
    ColorPencil myPencil = new ColorPencil("RED");
}`,
      options: [
        "this.color = color;",
        "color = color;",
        "color = RED;",
        "this.color = RED;"
      ],
      correct: 0,
      explanation: "this.color = color; correctly assigns the parameter 'color' to the instance variable 'color'. The 'this' keyword distinguishes between the parameter and instance variable with the same name. Option (b) color = color assigns parameter to itself, (c) RED is not a string literal, (d) assigns literal \"RED\" instead of the parameter value.",
      difficulty: "Basic",
      topic: "This Keyword & Constructors"
    },
    {
      id: 35,
      question: "What is the output of the following code?",
      code: `class Book {
    String ISBN;
    Book(String val) {
        ISBN = val;
    }
}
class TestEquals {
    public static void main(String... args) {
        Book b1 = new Book("1234-4657");
        Book b2 = new Book("1234-4657");
        System.out.print(b1.equals(b2) +":");
        System.out.print(b1 == b2);
    }
}`,
      options: [
        "true:false",
        "true:true",
        "false:true",
        "false:false",
        "Compilation error---there is no equals method in the class Book.",
        "Runtime exception"
      ],
      correct: 3,
      explanation: "b1.equals(b2) uses Object's default equals() method (inherited), which compares object references, not content. Since b1 and b2 are different objects, equals() returns false. b1 == b2 also compares references and returns false. Both objects have same ISBN content but are different instances in memory.",
      difficulty: "Intermediate",
      topic: "Object Equality & Reference Comparison"
    },
    {
      id: 36,
      question: "What is the output of the following code?",
      code: `class EIf {
    public static void main(String args[]) {
        boolean boolean = false;
        do {
            if (boolean = true)
                System.out.println("true");
            else
                System.out.println("false");
        }
        while(3.3 + 4.7 > 8);
    }
}`,
      options: [
        "The class will print true.",
        "The class will print false.",
        "The class will print true if the if condition is changed to boolean == true.",
        "The class will print false if the if condition is changed to boolean != true.",
        "The class won't compile.",
        "Runtime exception."
      ],
      correct: 4,
      explanation: "The code won't compile because 'boolean' is a reserved keyword in Java and cannot be used as a variable name. The line 'boolean boolean = false;' attempts to declare a variable with the reserved keyword 'boolean' as its name, which is illegal syntax.",
      difficulty: "Basic",
      topic: "Reserved Keywords"
    },
    {
      id: 37,
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
      id: 38,
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
