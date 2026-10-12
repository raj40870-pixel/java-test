export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  type: 'simple' | 'logical';
  explanation: string;
  unit: 1 | 2 | 3;
}

export const questionBank: Question[] = [
  // UNIT 1: Java Basics, Control Flow, Arrays (10 Questions)
  {
    id: "u1_1",
    unit: 1,
    type: "simple",
    question: "Which of the following is not a Java features?",
    options: ["Dynamic", "Architecture Neutral", "Use of pointers", "Object-oriented"],
    correctIndex: 2,
    explanation: "Java does not use pointers to ensure security and simplicity."
  },
  {
    id: "u1_2",
    unit: 1,
    type: "simple",
    question: "What is the return type of the hashCode() method in the Object class?",
    options: ["Object", "int", "long", "void"],
    correctIndex: 1,
    explanation: "The hashCode() method returns an integer representation of the object's memory address."
  },
  {
    id: "u1_3",
    unit: 1,
    type: "logical",
    question: "What is the output of the following code snippet?\n\nint x = 5;\nSystem.out.println(x++ + ++x);",
    options: ["10", "11", "12", "13"],
    correctIndex: 2,
    explanation: "x++ (5, then x becomes 6) + ++x (x becomes 7, then use 7). So 5 + 7 = 12."
  },
  {
    id: "u1_4",
    unit: 1,
    type: "simple",
    question: "Which package contains the Random class?",
    options: ["java.util", "java.lang", "java.io", "java.net"],
    correctIndex: 0,
    explanation: "The Random class is part of the java.util package."
  },
  {
    id: "u1_5",
    unit: 1,
    type: "logical",
    question: "What will be the output of this code?\n\nint arr[] = new int[5];\nSystem.out.println(arr[0]);",
    options: ["0", "null", "Runtime Error", "Garbage value"],
    correctIndex: 0,
    explanation: "In Java, int arrays are initialized with a default value of 0."
  },
  {
    id: "u1_6",
    unit: 1,
    type: "simple",
    question: "Which of these identifiers is NOT valid in Java?",
    options: ["$my_var", "_test", "2ndValue", "variable1"],
    correctIndex: 2,
    explanation: "Identifiers cannot start with a digit."
  },
  {
    id: "u1_7",
    unit: 1,
    type: "logical",
    question: "What is the result of 9 % 2 in Java?",
    options: ["4.5", "4", "1", "0"],
    correctIndex: 2,
    explanation: "The % operator returns the remainder of the division. 9 / 2 = 4 with remainder 1."
  },
  {
    id: "u1_8",
    unit: 1,
    type: "simple",
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "None of these"],
    correctIndex: 2,
    explanation: "do-while loops check the condition after the first execution."
  },
  {
    id: "u1_9",
    unit: 1,
    type: "logical",
    question: "What is the output of: System.out.println(10 > 5 && 3 < 1);",
    options: ["true", "false", "Compile Error", "1"],
    correctIndex: 1,
    explanation: "true && false results in false."
  },
  {
    id: "u1_10",
    unit: 1,
    type: "simple",
    question: "Which method is the entry point for any Java program?",
    options: ["start()", "init()", "main()", "run()"],
    correctIndex: 2,
    explanation: "The public static void main(String[] args) method is the entry point."
  },

  // UNIT 2: Classes, Objects, Constructors, Polymorphism (10 Questions)
  {
    id: "u2_1",
    unit: 2,
    type: "simple",
    question: "Which keyword is used to refer to the current class instance variable?",
    options: ["super", "this", "static", "final"],
    correctIndex: 1,
    explanation: "'this' keyword is used to refer to the current object."
  },
  {
    id: "u2_2",
    unit: 2,
    type: "simple",
    question: "Can a constructor be static?",
    options: ["Yes", "No", "Depends on the class", "Only if it is private"],
    correctIndex: 1,
    explanation: "Constructors cannot be static because they are called when an instance is created."
  },
  {
    id: "u2_3",
    unit: 2,
    type: "logical",
    question: "Which of these is used to differentiate between two methods with the same name but different parameters?",
    options: ["Method Overriding", "Method Overloading", "Inheritance", "Encapsulation"],
    correctIndex: 1,
    explanation: "Method Overloading allows multiple methods with the same name but different signatures."
  },
  {
    id: "u2_4",
    unit: 2,
    type: "simple",
    question: "What is the default access modifier for a class member?",
    options: ["public", "private", "protected", "package-private (default)"],
    correctIndex: 3,
    explanation: "If no modifier is specified, it is accessible within the same package."
  },
  {
    id: "u2_5",
    unit: 2,
    type: "logical",
    question: "What happens if a class has no constructor defined?",
    options: ["Compile error", "Runtime error", "Java provides a default constructor", "The class cannot be instantiated"],
    correctIndex: 2,
    explanation: "Java compiler automatically provides a no-argument default constructor if none is defined."
  },
  {
    id: "u2_6",
    unit: 2,
    type: "simple",
    question: "Static variables are also known as:",
    options: ["Instance variables", "Local variables", "Class variables", "Global variables"],
    correctIndex: 2,
    explanation: "Static variables belong to the class rather than any specific instance."
  },
  {
    id: "u2_7",
    unit: 2,
    type: "logical",
    question: "Method Overriding is an example of:",
    options: ["Compile-time polymorphism", "Runtime polymorphism", "Encapsulation", "Abstraction"],
    correctIndex: 1,
    explanation: "Overriding is resolved during runtime, hence runtime polymorphism."
  },
  {
    id: "u2_8",
    unit: 2,
    type: "simple",
    question: "Which keyword is used to call the constructor of the parent class?",
    options: ["this", "parent", "super", "extends"],
    correctIndex: 2,
    explanation: "super() is used to invoke the parent class constructor."
  },
  {
    id: "u2_9",
    unit: 2,
    type: "logical",
    question: "Can we overload the main() method in Java?",
    options: ["Yes", "No", "Only in Java 8+", "Only if it's not static"],
    correctIndex: 0,
    explanation: "Yes, we can overload main(), but the JVM will only call the standard String[] signature."
  },
  {
    id: "u2_10",
    unit: 2,
    type: "simple",
    question: "Which modifier makes a variable unchangeable after initialization?",
    options: ["static", "final", "private", "volatile"],
    correctIndex: 1,
    explanation: "A final variable's value cannot be changed once assigned."
  },

  // UNIT 3: Inheritance, Abstract Classes, Interfaces (10 Questions)
  {
    id: "u3_1",
    unit: 3,
    type: "simple",
    question: "Which keyword is used to inherit a class?",
    options: ["implements", "extends", "inherits", "using"],
    correctIndex: 1,
    explanation: "'extends' is used for class inheritance."
  },
  {
    id: "u3_2",
    unit: 3,
    type: "simple",
    question: "Can an interface have a constructor?",
    options: ["Yes", "No", "Only if it has default methods", "Only private constructors"],
    correctIndex: 1,
    explanation: "Interfaces cannot have constructors as they cannot be instantiated directly."
  },
  {
    id: "u3_3",
    unit: 3,
    type: "logical",
    question: "A class that is declared with 'abstract' keyword:",
    options: ["Must have all abstract methods", "Cannot be instantiated", "Cannot have any concrete methods", "Must be final"],
    correctIndex: 1,
    explanation: "Abstract classes cannot be instantiated using the 'new' keyword."
  },
  {
    id: "u3_4",
    unit: 3,
    type: "simple",
    question: "Which keyword prevents a method from being overridden?",
    options: ["static", "final", "private", "abstract"],
    correctIndex: 1,
    explanation: "A 'final' method cannot be overridden by subclasses."
  },
  {
    id: "u3_5",
    unit: 3,
    type: "logical",
    question: "Multiple inheritance in Java is achieved through:",
    options: ["Classes", "Interfaces", "Abstract Classes", "It is not possible in Java"],
    correctIndex: 1,
    explanation: "Java supports multiple inheritance only through interfaces."
  },
  {
    id: "u3_6",
    unit: 3,
    type: "simple",
    question: "All methods in an interface are implicitly:",
    options: ["private", "protected", "public and abstract", "static"],
    correctIndex: 2,
    explanation: "Interface methods are public and abstract by default (before Java 8)."
  },
  {
    id: "u3_7",
    unit: 3,
    type: "logical",
    question: "Can an abstract class implement an interface?",
    options: ["Yes", "No", "Only if the interface is empty", "Only if the class is not public"],
    correctIndex: 0,
    explanation: "Abstract classes can implement interfaces without providing all method bodies."
  },
  {
    id: "u3_8",
    unit: 3,
    type: "simple",
    question: "Which keyword is used by a class to use an interface?",
    options: ["extends", "implements", "imports", "includes"],
    correctIndex: 1,
    explanation: "The 'implements' keyword is used to realize an interface."
  },
  {
    id: "u3_9",
    unit: 3,
    type: "logical",
    question: "What is the relationship in inheritance?",
    options: ["Has-a", "Is-a", "Part-of", "None of these"],
    correctIndex: 1,
    explanation: "Inheritance represents an 'Is-a' relationship (e.g., Dog is an Animal)."
  },
  {
    id: "u3_10",
    unit: 3,
    type: "simple",
    question: "Which of these can be final in Java?",
    options: ["Class", "Method", "Variable", "All of the above"],
    correctIndex: 3,
    explanation: "Classes, methods, and variables can all be marked as final."
  }
];
