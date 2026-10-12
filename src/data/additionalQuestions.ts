import type {Question} from './questionBank.js';

type QuestionDraft = Omit<Question, 'id'>;

export const additionalQuestions: QuestionDraft[] = [
  // Unit 1: Java foundations, operators, control flow, arrays, and collections
  {
    unit: 1, type: 'simple',
    question: 'Which component executes Java bytecode?',
    options: ['JVM', 'JDK', 'Javadoc', 'Java compiler'],
    correctIndex: 0,
    explanation: 'The Java Virtual Machine loads and executes compiled bytecode.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which tool is primarily used to compile a .java source file?',
    options: ['javac', 'java', 'jar', 'javadoc'],
    correctIndex: 0,
    explanation: 'javac compiles Java source code into bytecode class files.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which is the correct Java single-line comment marker?',
    options: ['//', '<!--', '#', '/*/'],
    correctIndex: 0,
    explanation: 'A double slash begins a single-line Java comment.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which primitive type stores a single 16-bit Unicode character?',
    options: ['char', 'byte', 'boolean', 'short'],
    correctIndex: 0,
    explanation: 'Java char is a 16-bit unsigned integral type representing a UTF-16 code unit.'
  },
  {
    unit: 1, type: 'simple',
    question: 'What is the default value of an instance variable of type boolean?',
    options: ['false', 'true', '0', 'null'],
    correctIndex: 0,
    explanation: 'Boolean instance fields are initialized to false; local variables have no default value.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which declaration creates a 32-bit signed integer variable?',
    options: ['int count;', 'byte count;', 'char count;', 'boolean count;'],
    correctIndex: 0,
    explanation: 'The Java int primitive is a 32-bit signed integer.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of 7 / 2 when both operands are int?',
    options: ['3', '3.5', '4', '2'],
    correctIndex: 0,
    explanation: 'Integer division discards the fractional part, so 7 / 2 evaluates to 3.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does 7 % 4 evaluate to in Java?',
    options: ['3', '1', '1.75', '0'],
    correctIndex: 0,
    explanation: 'The remainder after integer division of 7 by 4 is 3.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of the expression 2 + 3 * 4?',
    options: ['14', '20', '24', '9'],
    correctIndex: 0,
    explanation: 'Multiplication has higher precedence than addition: 2 + 12 = 14.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does !(5 > 2) evaluate to?',
    options: ['false', 'true', '5', 'Compile-time error'],
    correctIndex: 0,
    explanation: '5 > 2 is true, and the logical NOT operator changes it to false.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of (true || false) && false?',
    options: ['false', 'true', '0', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'The OR expression is true, and true && false evaluates to false.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which operator tests whether two primitive values are equal?',
    options: ['==', '=', '!=', 'equals'],
    correctIndex: 0,
    explanation: 'The == operator compares primitive values for equality; = is assignment.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which statement exits the nearest enclosing loop immediately?',
    options: ['break', 'continue', 'return;', 'skip'],
    correctIndex: 0,
    explanation: 'break terminates the nearest enclosing loop or switch.'
  },
  {
    unit: 1, type: 'simple',
    question: 'What does continue do inside a loop?',
    options: ['Skips to the next iteration', 'Exits the entire program', 'Restarts the JVM', 'Exits every enclosing loop'],
    correctIndex: 0,
    explanation: 'continue skips the rest of the current iteration and proceeds to the next one.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which construct selects one branch from several constant case labels?',
    options: ['switch', 'try', 'synchronized', 'package'],
    correctIndex: 0,
    explanation: 'A switch statement selects a branch according to the selector value.'
  },
  {
    unit: 1, type: 'logical',
    question: 'How many times does for (int i = 0; i < 4; i++) execute its body?',
    options: ['4', '3', '5', 'Infinite times'],
    correctIndex: 0,
    explanation: 'The body runs for i values 0, 1, 2, and 3.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is printed by int x = 3; System.out.print(++x);?',
    options: ['4', '3', '2', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'Prefix increment increases x first, then the expression uses the new value 4.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is printed by int x = 3; System.out.print(x++);?',
    options: ['3', '4', '2', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'Postfix increment yields the old value 3 and increments x afterward.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which keyword declares a value that cannot be reassigned after initialization?',
    options: ['final', 'static', 'volatile', 'transient'],
    correctIndex: 0,
    explanation: 'A final variable can be assigned once and cannot then be reassigned.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which Java type represents a sequence of characters as an immutable object?',
    options: ['String', 'StringBuilder', 'char[] only', 'Scanner'],
    correctIndex: 0,
    explanation: 'String objects are immutable sequences of characters.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of "Java".length()?',
    options: ['4', '3', '5', 'An error because length is a field'],
    correctIndex: 0,
    explanation: 'The String length() method returns the number of UTF-16 code units; here it is 4.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which method compares the contents of two String objects?',
    options: ['equals()', '==', 'compareAddress()', 'same()'],
    correctIndex: 0,
    explanation: 'String.equals compares character content; == compares object references.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the initial value of each element in a newly created int array?',
    options: ['0', '1', 'null', 'Unspecified garbage data'],
    correctIndex: 0,
    explanation: 'Array elements of integral primitive types are initialized to zero.'
  },
  {
    unit: 1, type: 'logical',
    question: 'If int[] values = new int[6], what is values.length?',
    options: ['6', '5', '0', 'It is a method that must be called'],
    correctIndex: 0,
    explanation: 'The length field of an array reports its fixed number of elements, which is 6.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the last valid index of an array whose length is 8?',
    options: ['7', '8', '6', '0'],
    correctIndex: 0,
    explanation: 'Java array indices start at zero, so the last index is length minus one.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which exception is thrown when code accesses an array index outside its bounds?',
    options: ['ArrayIndexOutOfBoundsException', 'NullPointerException', 'IOException', 'ClassCastException'],
    correctIndex: 0,
    explanation: 'An invalid array index causes ArrayIndexOutOfBoundsException at runtime.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which declaration creates a two-dimensional int array with 3 rows and 4 columns?',
    options: ['int[][] grid = new int[3][4];', 'int[3][4] grid;', 'int[] grid = new int[3,4];', 'int grid = new int[3][4];'],
    correctIndex: 0,
    explanation: 'A two-dimensional array is an array of arrays, declared with two pairs of brackets.'
  },
  {
    unit: 1, type: 'logical',
    question: 'For int[][] a = new int[2][5], what is a[1].length?',
    options: ['5', '2', '1', '10'],
    correctIndex: 0,
    explanation: 'Each of the two rows is created with five int elements.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which enhanced-for loop correctly visits each value in int[] nums?',
    options: ['for (int n : nums)', 'for (nums : int n)', 'foreach (int n in nums)', 'for (int n; nums)'],
    correctIndex: 0,
    explanation: 'Java enhanced-for syntax declares an element variable followed by a colon and the array.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which class provides a resizable list implementation?',
    options: ['ArrayList', 'Arrays', 'Array', 'LinkedHashMap'],
    correctIndex: 0,
    explanation: 'java.util.ArrayList is a resizable-array implementation of the List interface.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which package contains ArrayList?',
    options: ['java.util', 'java.lang', 'java.io', 'java.time'],
    correctIndex: 0,
    explanation: 'ArrayList is part of the java.util package.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which declaration creates a list of String values?',
    options: ['ArrayList<String> names = new ArrayList<>();', 'ArrayList names<String> = new ArrayList();', 'String<ArrayList> names;', 'ArrayList<char> names;'],
    correctIndex: 0,
    explanation: 'Generic type arguments go inside angle brackets after the collection type.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which ArrayList method appends one element to the end of a list?',
    options: ['add(element)', 'put(element)', 'appendAtEnd(element)', 'pushBack(element)'],
    correctIndex: 0,
    explanation: 'ArrayList.add(element) appends an element to the list.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which ArrayList method returns the number of elements?',
    options: ['size()', 'length', 'count()', 'capacity()'],
    correctIndex: 0,
    explanation: 'Collections such as ArrayList provide size(); arrays instead have a length field.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does an empty newly created ArrayList<String> contain?',
    options: ['No elements', 'One null element', 'One empty string', 'A fixed set of ten elements'],
    correctIndex: 0,
    explanation: 'A new ArrayList has size zero until elements are added.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which statement imports every public type in java.util?',
    options: ['import java.util.*;', 'include java.util;', 'using java.util.*;', 'package java.util.*;'],
    correctIndex: 0,
    explanation: 'The wildcard import syntax is import followed by the package name and .*.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which access level allows a member to be accessed from any package?',
    options: ['public', 'private', 'protected only', 'package-private'],
    correctIndex: 0,
    explanation: 'A public member is accessible wherever its containing type is accessible.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which access level restricts a class member to its declaring class?',
    options: ['private', 'public', 'protected', 'package-private'],
    correctIndex: 0,
    explanation: 'A private member is directly accessible only within its declaring top-level class.'
  },
  {
    unit: 1, type: 'simple',
    question: 'What is encapsulation in object-oriented programming?',
    options: ['Bundling state and behavior while controlling access', 'Executing code on multiple computers', 'Writing every method as static', 'Converting source code into bytecode'],
    correctIndex: 0,
    explanation: 'Encapsulation keeps data and related behavior together and controls how state is accessed.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which keyword creates a new object using a constructor?',
    options: ['new', 'create', 'this', 'class'],
    correctIndex: 0,
    explanation: 'The new operator allocates an object and invokes its constructor.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does the expression 10 >= 10 evaluate to?',
    options: ['true', 'false', '10', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'The greater-than-or-equal operator includes equality, so 10 >= 10 is true.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the result of 5 != 5?',
    options: ['false', 'true', '5', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'The two operands are equal, so the not-equal comparison is false.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which operator is the conditional AND operator with short-circuit behavior?',
    options: ['&&', '&', '||', '^'],
    correctIndex: 0,
    explanation: '&& skips evaluating its right operand when the left operand is false.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which operator is the conditional OR operator with short-circuit behavior?',
    options: ['||', '|', '&&', '!'],
    correctIndex: 0,
    explanation: '|| skips evaluating its right operand when the left operand is true.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does the ternary expression 4 > 2 ? "yes" : "no" produce?',
    options: ['yes', 'no', 'true', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'Because 4 > 2 is true, the conditional operator selects its first value.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which loop is usually most suitable when the number of iterations is known?',
    options: ['for', 'while', 'do-while', 'switch'],
    correctIndex: 0,
    explanation: 'A for loop groups initialization, condition, and update in one place.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which loop checks its condition before each execution of the body?',
    options: ['while', 'do-while only', 'Neither while nor for', 'switch'],
    correctIndex: 0,
    explanation: 'A while loop checks its condition before entering each iteration.'
  },
  {
    unit: 1, type: 'logical',
    question: 'If a while-loop condition is false before the first check, how many times does its body run?',
    options: ['0', '1', '2', 'It always runs once'],
    correctIndex: 0,
    explanation: 'A while loop may execute zero times because its condition is checked first.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which do-while syntax correctly ends the statement?',
    options: ['do { } while (condition);', 'do (condition) { }', 'while (condition) do { }', 'do { } until (condition)'],
    correctIndex: 0,
    explanation: 'A Java do-while loop places the condition after the body and ends with a semicolon.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of 1 << 3 for int operands?',
    options: ['8', '3', '6', '4'],
    correctIndex: 0,
    explanation: 'Left-shifting 1 by three bit positions gives 8.'
  },
  {
    unit: 1, type: 'simple',
    question: 'What does widening conversion from int to long do?',
    options: ['Converts the value without losing its integer magnitude', 'Always rounds the value', 'Converts it to text', 'Is forbidden without parsing'],
    correctIndex: 0,
    explanation: 'Every int value fits in long, so this widening primitive conversion is safe.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which cast converts a double expression to int explicitly?',
    options: ['(int) value', 'int(value)', 'value as int', 'toInt(value)'],
    correctIndex: 0,
    explanation: 'Java uses a cast expression such as (int) value for an explicit numeric conversion.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What value is assigned by int n = (int) 6.9;?',
    options: ['6', '7', '6.9', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'Casting a positive floating-point value to int truncates the fractional part toward zero.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which primitive type stores true or false?',
    options: ['boolean', 'byte', 'char', 'float'],
    correctIndex: 0,
    explanation: 'The boolean primitive represents one of the values true or false.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which is a valid Java identifier?',
    options: ['studentCount', '3students', 'class', 'student-count'],
    correctIndex: 0,
    explanation: 'An identifier may start with a letter and contain letters, digits, underscores, or currency symbols.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which word is a reserved Java keyword and cannot be used as a variable name?',
    options: ['class', 'className', 'ClassName', 'myClass'],
    correctIndex: 0,
    explanation: 'class is a reserved keyword used to declare a class.'
  },
  {
    unit: 1, type: 'logical',
    question: 'Java identifiers are case-sensitive. Are total and Total the same identifier?',
    options: ['No, they are different', 'Yes, they are identical', 'Only inside methods', 'Only on Windows'],
    correctIndex: 0,
    explanation: 'Java distinguishes uppercase and lowercase letters in identifiers.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which method reads the number of characters in an ArrayList named items?',
    options: ['items.size()', 'items.length', 'items.count', 'items.capacity()'],
    correctIndex: 0,
    explanation: 'ArrayList size() returns the number of elements currently stored.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which statement removes the element at index 0 of an ArrayList named items?',
    options: ['items.remove(0);', 'items.delete(0);', 'items.popIndex(0);', 'items.clear(0);'],
    correctIndex: 0,
    explanation: 'ArrayList.remove(int index) removes and returns the element at that position.'
  },
  {
    unit: 1, type: 'logical',
    question: 'After List<Integer> values = new ArrayList<>(); values.add(5);, what is values.get(0)?',
    options: ['5', '0', 'null', 'The index 0'],
    correctIndex: 0,
    explanation: 'The first inserted element is stored at index zero and get(0) returns it.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which Java type is the superclass of all reference types?',
    options: ['Object', 'Class', 'System', 'Runtime'],
    correctIndex: 0,
    explanation: 'Every class ultimately inherits from java.lang.Object unless another superclass is specified.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does the expression "A" + 2 evaluate to?',
    options: ['A2', '3', 'A', 'Compile-time error'],
    correctIndex: 0,
    explanation: 'When one operand of + is a String, Java concatenates the other operand as text.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which declaration is the conventional Java application entry point?',
    options: ['public static void main(String[] args)', 'public void start(String args)', 'static int main()', 'private static void run(String[] args)'],
    correctIndex: 0,
    explanation: 'The conventional launcher entry point is public static void main(String[] args).'
  },
  {
    unit: 1, type: 'simple',
    question: 'What does System.out.println do after printing its argument?',
    options: ['Moves to a new line', 'Clears the console', 'Stops the program', 'Reads keyboard input'],
    correctIndex: 0,
    explanation: 'println prints the value and then terminates the current output line.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which expression accesses the third element of an array named scores?',
    options: ['scores[2]', 'scores[3]', 'scores(2)', 'scores.get(2)'],
    correctIndex: 0,
    explanation: 'Array indexing starts at zero, so the third element has index 2.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What does new int[3] create?',
    options: ['An array with three int elements initialized to zero', 'An array with indices 1 through 3', 'A single int with value 3', 'An ArrayList containing three values'],
    correctIndex: 0,
    explanation: 'The array length is 3, its valid indices are 0 through 2, and int elements default to zero.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which ArrayList method replaces the element at a specified index?',
    options: ['set(index, element)', 'add(index)', 'replaceAll(index)', 'assign(index, element)'],
    correctIndex: 0,
    explanation: 'ArrayList.set(index, element) replaces the value at an existing position.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What happens when an int array variable is declared but not assigned inside a method?',
    options: ['Reading it before assignment is a compile-time error', 'It automatically contains zero', 'It automatically contains null', 'It contains a random number'],
    correctIndex: 0,
    explanation: 'Local variables do not receive default values and must be definitely assigned before use.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which keyword begins a conditional branch after an if block?',
    options: ['else', 'otherwise', 'then', 'case'],
    correctIndex: 0,
    explanation: 'The else keyword introduces the alternative branch of an if statement.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is printed by int x = 4; if (x % 2 == 0) System.out.print("E"); else System.out.print("O");?',
    options: ['E', 'O', 'EO', 'Nothing'],
    correctIndex: 0,
    explanation: '4 % 2 is zero, so the condition is true and the even branch prints E.'
  },
  {
    unit: 1, type: 'simple',
    question: 'Which statement terminates the current method and may return a value to its caller?',
    options: ['return', 'break', 'continue', 'yield only'],
    correctIndex: 0,
    explanation: 'return exits the current method and supplies its result when the method has a return value.'
  },
  {
    unit: 1, type: 'logical',
    question: 'What is the value of new boolean[2][3].length?',
    options: ['2', '3', '5', '6'],
    correctIndex: 0,
    explanation: 'The outer array has two row references, so its length is 2.'
  },

  // Unit 2: classes, objects, methods, constructors, static members, polymorphism
  {
    unit: 2, type: 'simple',
    question: 'What is a class in Java?',
    options: ['A blueprint that defines state and behavior for objects', 'A single primitive value', 'A package manager', 'A loop that creates objects'],
    correctIndex: 0,
    explanation: 'A class declares fields and methods from which objects can be created.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is an object?',
    options: ['An instance of a class', 'A Java keyword', 'A source-code comment', 'A primitive type'],
    correctIndex: 0,
    explanation: 'An object is a runtime instance of a class with its own state.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which member stores data associated with each object?',
    options: ['Instance field', 'Package declaration', 'Import statement', 'Method signature'],
    correctIndex: 0,
    explanation: 'Each object has its own instance fields unless a field is declared static.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What distinguishes a constructor from an ordinary method?',
    options: ['It has the class name and no return type', 'It must return int', 'It is always static', 'It must be named initialize'],
    correctIndex: 0,
    explanation: 'A constructor shares the class name and declares no return type.'
  },
  {
    unit: 2, type: 'simple',
    question: 'When is a default no-argument constructor supplied by the compiler?',
    options: ['When the class declares no constructor', 'Whenever a class has a field', 'Only when the class is abstract', 'Only for interfaces'],
    correctIndex: 0,
    explanation: 'The compiler supplies a default constructor only if no constructor is declared.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Can a constructor declare a return type such as void?',
    options: ['No', 'Yes, always', 'Only if it is public', 'Only if it is static'],
    correctIndex: 0,
    explanation: 'A constructor has no return type; adding one makes it an ordinary method instead.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is a parameterized constructor?',
    options: ['A constructor that accepts one or more arguments', 'A constructor declared static', 'A method that returns an object', 'A constructor with no body'],
    correctIndex: 0,
    explanation: 'A parameterized constructor accepts values to initialize a new object.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If a class declares only a constructor taking an int, is a no-argument constructor automatically added?',
    options: ['No', 'Yes, in every case', 'Only when the class is public', 'Only at runtime'],
    correctIndex: 0,
    explanation: 'Declaring any constructor prevents the compiler from supplying the default constructor.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which keyword refers to the current object?',
    options: ['this', 'super', 'self', 'current'],
    correctIndex: 0,
    explanation: 'this is a reference to the current object instance.'
  },
  {
    unit: 2, type: 'logical',
    question: 'In a constructor with parameter int age, what does this.age = age mean?',
    options: ['Assign the parameter age to the current object field age', 'Assign the field to the class name', 'Create a second constructor', 'Call the parent constructor'],
    correctIndex: 0,
    explanation: 'this.age selects the instance field, while age refers to the parameter.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Where must a call to this(...) appear inside a constructor?',
    options: ['As its first statement', 'As its last statement', 'Inside a static block', 'It may appear anywhere'],
    correctIndex: 0,
    explanation: 'A constructor delegation call using this(...) must be the constructor’s first statement.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does a static field belong to?',
    options: ['The class itself', 'Only the first object', 'Each method separately', 'The package at runtime'],
    correctIndex: 0,
    explanation: 'A static field is associated with the class rather than with each instance.'
  },
  {
    unit: 2, type: 'logical',
    question: 'How many copies of a static field are normally associated with a loaded class?',
    options: ['One shared class variable', 'One for every object', 'One for every method call', 'None; static fields cannot store values'],
    correctIndex: 0,
    explanation: 'A class has one shared static field, rather than a separate copy in each instance.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which kind of method can be called using the class name without creating an object?',
    options: ['static method', 'abstract instance method', 'private instance method', 'constructor'],
    correctIndex: 0,
    explanation: 'A static method belongs to the class and can be invoked with the class name.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Can a static method directly use this?',
    options: ['No, it has no current instance', 'Yes, this refers to the class', 'Only when it is public', 'Only inside a constructor'],
    correctIndex: 0,
    explanation: 'A static context is not associated with a particular object, so this is unavailable.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is method overloading?',
    options: ['Same method name with different parameter lists', 'Same method body in two files', 'A subclass replacing a parent implementation', 'Calling a method repeatedly'],
    correctIndex: 0,
    explanation: 'Overloaded methods share a name but differ in their parameter lists.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Can methods be overloaded by changing only their return type?',
    options: ['No', 'Yes, always', 'Only when both are static', 'Only in different packages'],
    correctIndex: 0,
    explanation: 'The parameter list must differ; return type alone does not distinguish an overload.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Which overload is chosen for call show(5) when candidates are show(int) and show(double)?',
    options: ['show(int)', 'show(double)', 'Both are called', 'The call is always ambiguous'],
    correctIndex: 0,
    explanation: 'The exact primitive match is preferred over a widening conversion.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is method overriding?',
    options: ['A subclass provides a compatible implementation of an inherited instance method', 'A class declares two fields with one name', 'A method changes its return type only', 'A constructor calls itself'],
    correctIndex: 0,
    explanation: 'Overriding lets a subclass specialize an inherited instance method.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which annotation asks the compiler to check that a method overrides a supertype method?',
    options: ['@Override', '@Overload', '@InheritedMethod', '@Replace'],
    correctIndex: 0,
    explanation: '@Override enables compile-time checking of the intended override.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does dynamic method dispatch select for an overridden instance method?',
    options: ['The implementation based on the runtime object type', 'Always the superclass implementation', 'The method alphabetically first', 'A method based on the variable name'],
    correctIndex: 0,
    explanation: 'At runtime, overridden instance-method calls dispatch to the actual object class.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If Animal a = new Dog() and Dog overrides speak(), which speak() runs for a.speak()?',
    options: ['Dog.speak()', 'Animal.speak() in all cases', 'Both methods automatically', 'Neither; the reference types differ'],
    correctIndex: 0,
    explanation: 'The runtime object is a Dog, so its overridden implementation is dispatched.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is compile-time polymorphism commonly associated with in Java?',
    options: ['Method overloading', 'Method overriding', 'Garbage collection', 'Interface fields'],
    correctIndex: 0,
    explanation: 'Overload selection is determined by the method signature and argument types at compile time.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is runtime polymorphism commonly associated with?',
    options: ['Overridden instance methods', 'Local variable declarations', 'Constructor names', 'Package imports'],
    correctIndex: 0,
    explanation: 'Overridden instance methods are selected by dynamic dispatch at runtime.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which access modifier makes a member available within its package and to subclasses under Java protected rules?',
    options: ['protected', 'private', 'public only', 'static'],
    correctIndex: 0,
    explanation: 'protected members are available within the package and to subclasses subject to access rules.'
  },
  {
    unit: 2, type: 'logical',
    question: 'May a public overriding method reduce the visibility of a public superclass method?',
    options: ['No', 'Yes, it may become private', 'Yes, it may become package-private', 'Only if it is static'],
    correctIndex: 0,
    explanation: 'An overriding method cannot be less accessible than the method it overrides.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does a getter method commonly do?',
    options: ['Returns or exposes a field value through a method', 'Deletes the current object', 'Compiles the class', 'Creates a package'],
    correctIndex: 0,
    explanation: 'A getter provides controlled read access to an object’s state.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does a setter method commonly do?',
    options: ['Updates a field through a method', 'Returns the class bytecode', 'Creates a subclass', 'Invokes the garbage collector'],
    correctIndex: 0,
    explanation: 'A setter provides controlled write access to an object’s state.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which keyword prevents a class from being subclassed?',
    options: ['final', 'static', 'abstract', 'native'],
    correctIndex: 0,
    explanation: 'A final class cannot be extended.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Can a final method be overridden in a subclass?',
    options: ['No', 'Yes, if the subclass is public', 'Yes, if the method returns void', 'Only by an abstract class'],
    correctIndex: 0,
    explanation: 'A final method is not permitted to be overridden.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Can a static method be overridden in the same polymorphic sense as an instance method?',
    options: ['No; static methods are hidden rather than overridden', 'Yes; dispatch always uses the runtime object', 'Only when marked final', 'Only when private'],
    correctIndex: 0,
    explanation: 'Static method selection is based on the class context; a same-signature subclass method hides it.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is a local variable?',
    options: ['A variable declared inside a method, constructor, or block', 'A field shared by every instance', 'A package name', 'A constructor parameter that becomes a field automatically'],
    correctIndex: 0,
    explanation: 'Local variables are declared within executable blocks and have block-limited scope.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Must a local variable be definitely assigned before it is read?',
    options: ['Yes', 'No, locals always default to zero', 'Only if it is static', 'Only in constructors'],
    correctIndex: 0,
    explanation: 'Java requires local variables to be definitely assigned before use.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which method signature distinguishes one overload from another?',
    options: ['Method name and parameter types/order', 'Return type only', 'Access modifier only', 'Method body text'],
    correctIndex: 0,
    explanation: 'Overload resolution is based on the name and parameter list, not return type alone.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Can a constructor be inherited by a subclass?',
    options: ['No', 'Yes, every constructor is inherited', 'Only if public', 'Only if it has no parameters'],
    correctIndex: 0,
    explanation: 'Constructors are not inherited; a subclass declares its own constructors.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which constructor call invokes another constructor in the same class?',
    options: ['this(...)', 'super(...)', 'new(...)', 'class(...)'],
    correctIndex: 0,
    explanation: 'this(...) delegates construction to another constructor in the same class.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which call explicitly invokes a superclass constructor?',
    options: ['super(...)', 'this(...)', 'parent(...)', 'base(...)'],
    correctIndex: 0,
    explanation: 'A constructor can use super(...) to invoke a superclass constructor.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Where must an explicit super(...) constructor call appear?',
    options: ['As the first statement of the constructor', 'As the final statement', 'Inside a static method', 'After this(...)'],
    correctIndex: 0,
    explanation: 'An explicit superclass constructor invocation must be the first constructor statement.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does the this reference represent inside an instance method?',
    options: ['The object on which the method was invoked', 'The superclass class object', 'The current package', 'The method return value'],
    correctIndex: 0,
    explanation: 'Inside an instance method, this refers to its current receiver object.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If a class has a static method and an instance method, which requires an object reference to call?',
    options: ['The instance method', 'The static method', 'Both always require an object', 'Neither can be called'],
    correctIndex: 0,
    explanation: 'An instance method operates in an object context and is called on an instance.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does the keyword new return after successful object construction?',
    options: ['A reference to the created object', 'The constructor source code', 'A class name string', 'Always an integer'],
    correctIndex: 0,
    explanation: 'An object-creation expression evaluates to a reference to the new instance.'
  },
  {
    unit: 2, type: 'logical',
    question: 'What does an uninitialized instance reference field contain by default?',
    options: ['null', '0', 'false', 'An empty object'],
    correctIndex: 0,
    explanation: 'Reference fields are initialized to null unless explicitly assigned.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which declaration hides direct field access and supports encapsulation?',
    options: ['private int balance;', 'public int balance;', 'global int balance;', 'package int balance;'],
    correctIndex: 0,
    explanation: 'A private field restricts direct access, allowing methods to enforce class invariants.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Two overloaded methods may differ by which property?',
    options: ['Number or types of parameters', 'Only the method body', 'Only the return type', 'Only the access modifier'],
    correctIndex: 0,
    explanation: 'Overloads must have distinguishable parameter lists.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What kind of return type may an overriding method use when the original returns a reference type?',
    options: ['The same type or a compatible covariant subtype', 'Any unrelated primitive type', 'Only void', 'No return type'],
    correctIndex: 0,
    explanation: 'Java permits covariant return types for overriding methods.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which method declaration is an instance method?',
    options: ['void print() { }', 'static void print() { }', 'new print() { }', 'class print() { }'],
    correctIndex: 0,
    explanation: 'A method without the static modifier is an instance method.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Can an instance method directly access a static field of its class?',
    options: ['Yes', 'No, static fields are inaccessible to instances', 'Only through reflection', 'Only from a constructor'],
    correctIndex: 0,
    explanation: 'Instance methods can access static members of their class.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is constructor overloading?',
    options: ['Declaring multiple constructors with different parameter lists', 'Overriding a constructor in a child class', 'Making a constructor static', 'Giving a constructor a return type'],
    correctIndex: 0,
    explanation: 'A class may declare multiple constructors distinguished by their parameter lists.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If a constructor has no explicit this(...) or super(...), what constructor call is inserted when possible?',
    options: ['A no-argument super() call', 'A recursive this(this) call', 'A static initializer call', 'No object initialization'],
    correctIndex: 0,
    explanation: 'Java inserts an implicit no-argument superclass constructor invocation when applicable.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which description best fits a reference variable?',
    options: ['A variable that can refer to an object or be null', 'A variable that stores only whole numbers', 'A method that returns void', 'A class constructor'],
    correctIndex: 0,
    explanation: 'Reference variables hold references to objects or the null reference.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What is an instance of a class commonly created with?',
    options: ['The new operator and a constructor', 'The import keyword', 'The extends keyword alone', 'A return statement only'],
    correctIndex: 0,
    explanation: 'The new operator invokes a constructor to create an instance.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Can a method be overloaded if only its parameter names change?',
    options: ['No', 'Yes, parameter names form the signature', 'Only if its return type changes', 'Only if it is private'],
    correctIndex: 0,
    explanation: 'Parameter names do not distinguish method signatures; parameter types and arity do.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does calling a method on a null object reference normally cause?',
    options: ['NullPointerException', 'ArrayStoreException', 'IOException', 'No effect'],
    correctIndex: 0,
    explanation: 'Dereferencing null to invoke an instance method causes NullPointerException.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which feature lets a method name represent different parameter lists?',
    options: ['Overloading', 'Encapsulation', 'Compilation', 'Aggregation'],
    correctIndex: 0,
    explanation: 'Method overloading uses one name for multiple parameter-list variants.'
  },
  {
    unit: 2, type: 'logical',
    question: 'In Java, are arguments passed to methods by value?',
    options: ['Yes; object references are also passed by value', 'No; all objects are passed by reference', 'Only primitives use pass-by-value', 'Only static methods use pass-by-value'],
    correctIndex: 0,
    explanation: 'Java passes every argument by value; for objects, the copied value is a reference.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does a copy of an object reference point to after assignment b = a?',
    options: ['The same object as a', 'A deep copy of the object automatically', 'A new object with default fields', 'The class definition only'],
    correctIndex: 0,
    explanation: 'Assigning a reference copies the reference value; it does not clone the object.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which method is conventionally used to provide a textual representation of an object?',
    options: ['toString()', 'asText()', 'printObject()', 'stringValueOnly()'],
    correctIndex: 0,
    explanation: 'Classes commonly override Object.toString() to provide a readable representation.'
  },
  {
    unit: 2, type: 'logical',
    question: 'What does == compare when both operands are object references?',
    options: ['Whether the references identify the same object', 'Whether every field is equal', 'Whether the objects have the same class name only', 'Their toString() contents'],
    correctIndex: 0,
    explanation: 'For references, == tests identity, not general object content equality.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which method is commonly overridden to define logical object equality?',
    options: ['equals(Object)', 'sameReference()', 'compareAddress()', 'identicalTo()'],
    correctIndex: 0,
    explanation: 'Classes implement equals(Object) to define value-based equality.'
  },
  {
    unit: 2, type: 'simple',
    question: 'What does the static keyword mean on a nested class member method?',
    options: ['It belongs to the class rather than an instance', 'It cannot be called', 'It is automatically final', 'It creates a new thread'],
    correctIndex: 0,
    explanation: 'A static member is associated with the class itself, not one object.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which statement about fields and local variables is correct?',
    options: ['Fields receive default values; local variables must be assigned before use', 'Both always start at zero', 'Local variables are always public', 'Fields can only be declared in methods'],
    correctIndex: 0,
    explanation: 'Java initializes fields to default values, but requires definite assignment for locals.'
  },
  {
    unit: 2, type: 'logical',
    question: 'Can a class declare both static and instance methods with the same name if their parameter lists differ?',
    options: ['Yes, they can be overloaded', 'No, any repeated method name is forbidden', 'Only if the class is abstract', 'Only if both return void'],
    correctIndex: 0,
    explanation: 'Methods can be overloaded by parameter list, regardless of static versus instance status.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Why might a constructor be declared private?',
    options: ['To restrict object creation to code controlled by the class', 'To make it inherited by all subclasses', 'To make it return a value', 'To allow direct access from every package'],
    correctIndex: 0,
    explanation: 'A private constructor can control or prevent construction from outside the class.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which statement about constructors is true?',
    options: ['They initialize a newly created instance', 'They are inherited like ordinary methods', 'They must always be public', 'They can be called on an existing object with dot syntax'],
    correctIndex: 0,
    explanation: 'Constructors initialize an instance as it is created.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If two overloads are equally applicable and neither is more specific, what may happen?',
    options: ['The call can be ambiguous and fail compilation', 'Both methods execute', 'The JVM chooses randomly', 'The return type decides automatically'],
    correctIndex: 0,
    explanation: 'If overload resolution cannot select a unique most-specific method, compilation fails.'
  },
  {
    unit: 2, type: 'logical',
    question: 'What does this(10) do when used as the first statement in a constructor?',
    options: ['Delegates to another constructor in the same class', 'Calls a superclass method named 10', 'Creates a second object', 'Assigns 10 to every field'],
    correctIndex: 0,
    explanation: 'A this(...) constructor invocation delegates initialization to another constructor of the same class.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which statement about a static field is correct?',
    options: ['It can be accessed through the class name', 'Every object must own a separate copy', 'It can only be declared inside a method', 'It must have type int'],
    correctIndex: 0,
    explanation: 'A static field belongs to its class and is commonly referenced using the class name.'
  },
  {
    unit: 2, type: 'logical',
    question: 'If a subclass declares a same-signature static method as its superclass, what occurs?',
    options: ['The subclass method hides the superclass method', 'The subclass overrides it using dynamic dispatch', 'Both execute on every call', 'Compilation always fails'],
    correctIndex: 0,
    explanation: 'Static methods are hidden, not overridden through runtime instance dispatch.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which access modifier allows a member to be used by unrelated classes in any package?',
    options: ['public', 'private', 'protected only', 'No modifier'],
    correctIndex: 0,
    explanation: 'A public member is accessible from any package when its declaring type is accessible.'
  },
  {
    unit: 2, type: 'logical',
    question: 'What does a no-argument constructor call like new Box() invoke?',
    options: ['A Box constructor with no parameters', 'The first method alphabetically', 'A superclass object only', 'The class static method main'],
    correctIndex: 0,
    explanation: 'Object creation resolves and invokes a constructor whose parameter list matches the supplied arguments.'
  },
  {
    unit: 2, type: 'simple',
    question: 'Which rule applies to a method that overrides a protected superclass method?',
    options: ['It cannot have more restrictive access', 'It must become private', 'It must become static', 'It must change its name'],
    correctIndex: 0,
    explanation: 'An overriding method may keep or widen access but cannot reduce visibility.'
  },
  {
    unit: 2, type: 'logical',
    question: 'What does a constructor initialize when new creates an object?',
    options: ['The new instance state as defined by its fields and constructor body', 'Every object in the program', 'Only static fields', 'The source file name'],
    correctIndex: 0,
    explanation: 'The constructor initializes the newly created instance after its fields receive default values.'
  },

  // Unit 3: Inheritance, abstract classes, final members, and interfaces
  {
    unit: 3, type: 'simple',
    question: 'Which keyword declares that a class inherits from another class?',
    options: ['extends', 'implements', 'inherits', 'super'],
    correctIndex: 0,
    explanation: 'A class uses extends to name its direct superclass.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which keyword declares that a class implements an interface?',
    options: ['implements', 'extends', 'inherits', 'interface'],
    correctIndex: 0,
    explanation: 'A class uses implements followed by one or more interface names.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which keyword declares an interface?',
    options: ['interface', 'implements', 'abstract', 'protocol'],
    correctIndex: 0,
    explanation: 'The interface keyword begins an interface declaration.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What relationship does inheritance commonly model?',
    options: ['Is-a', 'Has-only', 'Uses-a-file', 'Part-of-a-loop'],
    correctIndex: 0,
    explanation: 'A subclass is a more specialized kind of its superclass, an is-a relationship.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which inheritance form has one class extending another class?',
    options: ['Single inheritance', 'Multiple class inheritance', 'Circular inheritance', 'Hybrid primitive inheritance'],
    correctIndex: 0,
    explanation: 'Single inheritance describes one direct superclass for a class.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is multilevel inheritance?',
    options: ['A class extends a class that itself extends another class', 'One class extends several classes', 'An interface contains fields only', 'A method has several overloads'],
    correctIndex: 0,
    explanation: 'Multilevel inheritance forms a chain of superclass and subclass relationships.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is hierarchical inheritance?',
    options: ['Multiple subclasses share the same superclass', 'A class directly extends two classes', 'A method calls itself', 'An interface extends a class'],
    correctIndex: 0,
    explanation: 'In hierarchical inheritance, multiple child classes derive from one parent.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can a Java class directly extend two classes at once?',
    options: ['No', 'Yes, by listing both after extends', 'Only if both are abstract', 'Only when both are final'],
    correctIndex: 0,
    explanation: 'A Java class has at most one direct superclass.'
  },
  {
    unit: 3, type: 'simple',
    question: 'How can a Java class inherit behavior contracts from multiple types?',
    options: ['By implementing multiple interfaces', 'By extending multiple classes', 'By declaring multiple package names', 'By using several constructors'],
    correctIndex: 0,
    explanation: 'A class can implement multiple interfaces even though it extends only one class.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which keyword refers to the superclass portion of the current object?',
    options: ['super', 'this', 'parent', 'base'],
    correctIndex: 0,
    explanation: 'super provides access to superclass constructors and members.'
  },
  {
    unit: 3, type: 'logical',
    question: 'What does super.method() request in a subclass?',
    options: ['Invoke the superclass implementation of method when accessible', 'Create a new superclass object', 'Call every overriding method', 'Make method static'],
    correctIndex: 0,
    explanation: 'super.method() explicitly calls the superclass version of an instance method.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is an abstract class?',
    options: ['A class that cannot be instantiated directly and may declare abstract methods', 'A class whose fields are all private', 'A class that has no methods', 'A class that cannot be extended'],
    correctIndex: 0,
    explanation: 'An abstract class is incomplete by design and cannot be instantiated directly.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Can an abstract class contain concrete methods?',
    options: ['Yes', 'No, every method must be abstract', 'Only if it has no fields', 'Only if it is final'],
    correctIndex: 0,
    explanation: 'Abstract classes can mix abstract declarations with implemented methods.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What must a concrete subclass do with inherited abstract methods?',
    options: ['Implement them or remain abstract', 'Delete them at runtime', 'Make them static automatically', 'Turn them into fields'],
    correctIndex: 0,
    explanation: 'A non-abstract subclass must provide implementations for inherited abstract methods.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can an abstract class have a constructor?',
    options: ['Yes, it can initialize superclass state for subclasses', 'No, constructors are forbidden in abstract classes', 'Only a private constructor', 'Only if it contains no methods'],
    correctIndex: 0,
    explanation: 'Abstract-class constructors run as part of constructing a concrete subclass.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Can an abstract class be declared final?',
    options: ['No, those purposes conflict', 'Yes, every abstract class is final', 'Only when it implements an interface', 'Only if it has a constructor'],
    correctIndex: 0,
    explanation: 'An abstract class requires subclassing to instantiate, while final prevents subclassing.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does a final class prevent?',
    options: ['Subclassing', 'Object creation', 'Method calls', 'Field initialization'],
    correctIndex: 0,
    explanation: 'A class declared final cannot be extended.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does a final instance method prevent?',
    options: ['Overriding by subclasses', 'Calling the method', 'Returning a value', 'Overloading another method'],
    correctIndex: 0,
    explanation: 'Subclasses cannot override a final method.'
  },
  {
    unit: 3, type: 'logical',
    question: 'What does final mean for a local int variable after it is assigned?',
    options: ['It cannot be assigned a different value', 'It becomes a class field', 'It becomes zero', 'It can only be read from a subclass'],
    correctIndex: 0,
    explanation: 'A final local variable may be assigned once and cannot then be reassigned.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is the usual purpose of an interface?',
    options: ['To specify a contract that implementing types provide', 'To create objects directly with new', 'To store only constructor implementations', 'To replace every class'],
    correctIndex: 0,
    explanation: 'An interface defines a contract that classes can implement.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Can an interface be instantiated directly with new?',
    options: ['No', 'Yes, for every interface', 'Only if it has no methods', 'Only from a static method'],
    correctIndex: 0,
    explanation: 'An interface is a type contract, not a directly instantiable class.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can an interface contain a default method with a method body?',
    options: ['Yes', 'No, interfaces can never have method bodies', 'Only before Java 8', 'Only if the method is private abstract'],
    correctIndex: 0,
    explanation: 'Interfaces support default methods with implementations.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What modifier is required to call an interface static method?',
    options: ['Use the interface name', 'Use an instance only', 'Use the implementing class constructor', 'Use super only'],
    correctIndex: 0,
    explanation: 'An interface static method is called using the interface name.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What are interface fields implicitly?',
    options: ['public static final', 'private transient', 'protected volatile', 'Instance fields'],
    correctIndex: 0,
    explanation: 'Fields declared in an interface are constants and implicitly public, static, and final.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can a class implement two interfaces that declare compatible abstract methods with the same signature?',
    options: ['Yes', 'No, duplicate method names are always illegal', 'Only if one interface is final', 'Only if the class is abstract'],
    correctIndex: 0,
    explanation: 'One implementing method can satisfy compatible method contracts from both interfaces.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Can an interface extend another interface?',
    options: ['Yes', 'No, interfaces cannot have parent types', 'Only if it is a functional interface', 'Only by using implements'],
    correctIndex: 0,
    explanation: 'An interface can extend one or more other interfaces.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which keyword does one interface use to inherit another interface?',
    options: ['extends', 'implements', 'super', 'inherits'],
    correctIndex: 0,
    explanation: 'An interface extends its parent interface or interfaces.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can an abstract class implement an interface without implementing every interface method?',
    options: ['Yes, it may remain abstract', 'No, abstract classes must implement all methods', 'Only if the interface has no methods', 'Only if all methods are static'],
    correctIndex: 0,
    explanation: 'An abstract class can defer interface method implementations to a concrete subclass.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does an upcast from a subclass reference to a superclass reference do?',
    options: ['Treats the object through its superclass type', 'Changes the actual object into a superclass object', 'Copies every field into a new object', 'Deletes subclass behavior'],
    correctIndex: 0,
    explanation: 'Upcasting changes the reference’s static type; the runtime object remains the same.'
  },
  {
    unit: 3, type: 'logical',
    question: 'After Animal a = new Dog(), what is the runtime class of the object?',
    options: ['Dog', 'Animal', 'Object only', 'It changes depending on the method called'],
    correctIndex: 0,
    explanation: 'The object was constructed as a Dog, even though the reference type is Animal.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which operator tests whether an object is compatible with a specified reference type?',
    options: ['instanceof', 'typeof', 'is', 'compatible'],
    correctIndex: 0,
    explanation: 'instanceof checks whether an object is an instance of a class or interface type.'
  },
  {
    unit: 3, type: 'logical',
    question: 'What does an invalid checked reference cast generally throw at runtime?',
    options: ['ClassCastException', 'IOException', 'ArithmeticException', 'ArrayIndexOutOfBoundsException'],
    correctIndex: 0,
    explanation: 'A cast incompatible with the actual runtime object type throws ClassCastException.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which members are not overridden through normal instance-method overriding?',
    options: ['Constructors', 'Public instance methods', 'Protected instance methods', 'Abstract instance methods'],
    correctIndex: 0,
    explanation: 'Constructors are not inherited and therefore are not overridden.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which method annotation identifies an intended override?',
    options: ['@Override', '@Extends', '@Super', '@Implements'],
    correctIndex: 0,
    explanation: '@Override documents intent and lets the compiler verify the override.'
  },
  {
    unit: 3, type: 'logical',
    question: 'May an overriding method use a more accessible access modifier than its superclass method?',
    options: ['Yes', 'No, visibility must be exactly identical', 'Only if the method is static', 'Only when the return type is void'],
    correctIndex: 0,
    explanation: 'An overriding method may widen access, but it may not reduce access.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which kind of inheritance supports several types without multiple superclass inheritance?',
    options: ['Implementing multiple interfaces', 'Extending multiple classes', 'Declaring multiple constructors', 'Using nested packages'],
    correctIndex: 0,
    explanation: 'Java allows a class to implement multiple interfaces.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is the superclass of a class that does not explicitly extend another class?',
    options: ['Object', 'Class', 'System', 'String'],
    correctIndex: 0,
    explanation: 'A class with no explicit superclass implicitly extends java.lang.Object.'
  },
  {
    unit: 3, type: 'logical',
    question: 'If a subclass constructor does not explicitly call a superclass constructor, what is attempted?',
    options: ['A no-argument superclass constructor call', 'A call to every superclass constructor', 'No superclass initialization', 'A static method call'],
    correctIndex: 0,
    explanation: 'Java implicitly invokes the superclass no-argument constructor when one is available.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Why must an abstract method have no method body in its declaration?',
    options: ['Its implementation is deferred to a concrete subtype', 'It is automatically final', 'It is never callable', 'It represents a field'],
    correctIndex: 0,
    explanation: 'An abstract method declares the required signature while leaving implementation to subclasses.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can a class be both abstract and final?',
    options: ['No', 'Yes, all abstract classes should be final', 'Only if it implements an interface', 'Only if it has no constructor'],
    correctIndex: 0,
    explanation: 'abstract requires a subclass to complete it, while final forbids subclasses.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which declaration makes a class abstract?',
    options: ['abstract class Shape { }', 'class abstract Shape { }', 'interface class Shape { }', 'final abstract Shape { }'],
    correctIndex: 0,
    explanation: 'The abstract modifier appears before the class keyword.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What must a concrete class do when it implements an interface with an abstract method?',
    options: ['Provide a compatible implementation', 'Delete the interface method', 'Declare itself final automatically', 'Turn the method into a constructor'],
    correctIndex: 0,
    explanation: 'A concrete implementing class must implement the required abstract interface methods.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which form declares that class Circle extends Shape and implements Drawable?',
    options: ['class Circle extends Shape implements Drawable', 'class Circle implements Shape extends Drawable', 'class Circle inherits Shape, Drawable', 'interface Circle extends Shape implements Drawable'],
    correctIndex: 0,
    explanation: 'A class names its one superclass with extends before listing interfaces with implements.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can an interface contain a private helper method in modern Java?',
    options: ['Yes', 'No, interfaces can never declare private methods', 'Only when it is abstract', 'Only when it is a field'],
    correctIndex: 0,
    explanation: 'Modern Java interfaces may declare private helper methods for use by their methods.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does a default method in an interface provide?',
    options: ['An inherited method implementation that implementing classes may use or override', 'A constructor for the interface', 'An instance field for each implementation', 'A final class declaration'],
    correctIndex: 0,
    explanation: 'A default method provides an implementation as part of the interface contract.'
  },
  {
    unit: 3, type: 'logical',
    question: 'If a subclass overrides a superclass method, what does super.method() call from that subclass?',
    options: ['The superclass version', 'The subclass version recursively in every case', 'Every interface default method', 'A static constructor'],
    correctIndex: 0,
    explanation: 'super.method() explicitly invokes the accessible superclass implementation.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is a direct superclass?',
    options: ['The class named immediately after extends', 'Any class loaded by the JVM', 'The first interface in an import', 'A constructor parameter'],
    correctIndex: 0,
    explanation: 'The direct superclass is the immediate parent class declared with extends.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can a subclass access a superclass private field directly by its name?',
    options: ['No', 'Yes, private means visible to all subclasses', 'Only from a static method', 'Only through an interface'],
    correctIndex: 0,
    explanation: 'Private fields are not directly accessible in a subclass; accessible methods can expose needed behavior.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which modifier allows a superclass method to be overridden by a subclass?',
    options: ['A non-final, non-private instance method', 'A private constructor', 'A final method', 'A static initializer'],
    correctIndex: 0,
    explanation: 'Overriding applies to inherited instance methods that are not final or private.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does the final modifier on a reference variable guarantee?',
    options: ['The variable cannot refer to a different object after assignment', 'The referenced object is always immutable', 'The variable is static', 'The object cannot be garbage collected'],
    correctIndex: 0,
    explanation: 'A final reference cannot be reassigned, though the referenced object may still be mutable.'
  },
  {
    unit: 3, type: 'logical',
    question: 'If a final reference points to a mutable object, can the object’s state still change?',
    options: ['Yes, final prevents reassignment of the reference, not mutation of the object', 'No, the object becomes deeply immutable', 'Only if the reference is static', 'Only after casting'],
    correctIndex: 0,
    explanation: 'final constrains the reference variable; it does not automatically make the referenced object immutable.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which statement describes an interface reference?',
    options: ['It can refer to an object whose class implements that interface', 'It can refer only to another interface declaration', 'It creates an interface instance directly', 'It can store only primitive values'],
    correctIndex: 0,
    explanation: 'An interface-typed reference can hold any object whose class implements that interface.'
  },
  {
    unit: 3, type: 'logical',
    question: 'If a superclass reference refers to a subclass object, which inherited field access is selected?',
    options: ['Field access is resolved using the reference’s compile-time type', 'Field access always dispatches like an overridden method', 'It is selected randomly', 'All fields with that name are combined'],
    correctIndex: 0,
    explanation: 'Field hiding is not dynamically dispatched; the reference’s declared type determines field access.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is method hiding?',
    options: ['A subclass declares a static method with a matching signature to a superclass static method', 'A method is moved into a package', 'A final method is overridden', 'An abstract method gets a body'],
    correctIndex: 0,
    explanation: 'A same-signature static method in a subclass hides rather than overrides the superclass method.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which keyword is used to call a superclass constructor from a subclass constructor?',
    options: ['super', 'this', 'extends', 'implements'],
    correctIndex: 0,
    explanation: 'super(...) invokes a constructor of the direct superclass.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can this(...) and super(...) both be explicit constructor calls in the same constructor?',
    options: ['No, either call must be first and one constructor cannot use both', 'Yes, if super(...) comes last', 'Yes, when the class implements an interface', 'Only in an abstract class'],
    correctIndex: 0,
    explanation: 'Both forms require the first statement position, so a constructor cannot explicitly use both.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is the key difference between an abstract class and an interface in typical use?',
    options: ['An abstract class can hold shared instance state; an interface primarily defines a contract', 'An interface can be instantiated but an abstract class cannot', 'An abstract class cannot have methods', 'An interface must extend a concrete class'],
    correctIndex: 0,
    explanation: 'Abstract classes can maintain instance state and constructors, while interfaces describe capabilities/contracts.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Can an abstract class implement multiple interfaces?',
    options: ['Yes', 'No, only concrete classes can implement interfaces', 'Only if it extends multiple classes', 'Only when all interface methods are static'],
    correctIndex: 0,
    explanation: 'An abstract class can implement multiple interfaces and defer some implementations.'
  },
  {
    unit: 3, type: 'logical',
    question: 'What happens if a concrete subclass does not implement an inherited abstract method?',
    options: ['The class must be declared abstract or compilation fails', 'The method becomes private', 'The JVM invents a method body', 'The superclass is automatically instantiated'],
    correctIndex: 0,
    explanation: 'A non-abstract class must implement all inherited abstract methods.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which inheritance form describes A extends B, B extends C?',
    options: ['Multilevel inheritance', 'Multiple inheritance of classes', 'Hierarchical inheritance only', 'Method overloading'],
    correctIndex: 0,
    explanation: 'A chain of parent-child classes is multilevel inheritance.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which relationship does a class implementing an interface express?',
    options: ['The class promises to provide the interface contract', 'The interface becomes the class superclass', 'The class becomes an interface', 'The interface constructs the class'],
    correctIndex: 0,
    explanation: 'implements declares that the class conforms to the interface contract.'
  },
  {
    unit: 3, type: 'logical',
    question: 'What is the result of "dog instanceof Animal" when dog refers to a Dog object and Dog extends Animal?',
    options: ['true', 'false', 'Compile-time error in every case', 'The result is the string "Animal"'],
    correctIndex: 0,
    explanation: 'A Dog object is also an instance of its superclass Animal.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which statement about a final class is correct?',
    options: ['It can still have constructors and be instantiated', 'It cannot have any methods', 'It is automatically abstract', 'It cannot declare fields'],
    correctIndex: 0,
    explanation: 'final prevents extension; it does not prevent constructing instances of the class.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What is the purpose of an abstract method declaration?',
    options: ['Require subclasses to provide behavior without defining it here', 'Make a method private automatically', 'Prevent all subclassing', 'Create a constructor'],
    correctIndex: 0,
    explanation: 'An abstract method specifies a required operation while deferring the implementation.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does a subclass inherit from an accessible non-private superclass method?',
    options: ['The method contract and implementation unless it overrides it', 'Only the method name, never its implementation', 'A new constructor with the same parameters', 'A copy of the superclass object'],
    correctIndex: 0,
    explanation: 'Subclasses inherit accessible methods and may override eligible instance methods.'
  },
  {
    unit: 3, type: 'logical',
    question: 'When an overridden method is called through a superclass reference, which implementation normally runs?',
    options: ['The runtime object class implementation', 'Always the superclass implementation', 'The implementation in Object', 'The implementation chosen by the variable name'],
    correctIndex: 0,
    explanation: 'Instance method overriding uses runtime dispatch regardless of the reference’s static type.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which members are inherited from a superclass but cannot be directly accessed by subclass code when private?',
    options: ['Private members', 'Public members', 'Protected members', 'Accessible package members in the same package'],
    correctIndex: 0,
    explanation: 'Private members belong to the superclass but are not directly accessible by subclass source code.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which interface method kind can have a body and be inherited by implementing classes?',
    options: ['default method', 'abstract method only', 'constructor method', 'package method'],
    correctIndex: 0,
    explanation: 'A default method has a body that implementing classes inherit unless they override it.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can an interface declare a constructor?',
    options: ['No', 'Yes, but it must be private', 'Yes, exactly one', 'Only if it extends Object explicitly'],
    correctIndex: 0,
    explanation: 'Interfaces are not instantiated directly and cannot declare constructors.'
  },
  {
    unit: 3, type: 'simple',
    question: 'Which access level may an overriding method use if the original method is protected?',
    options: ['protected or public', 'private only', 'package-private only', 'No access modifier is allowed'],
    correctIndex: 0,
    explanation: 'An override may preserve or widen visibility, but cannot reduce it.'
  },
  {
    unit: 3, type: 'simple',
    question: 'What does the extends keyword do in an interface declaration?',
    options: ['Declares a parent interface', 'Declares an implementing class', 'Creates a class instance', 'Marks all methods final'],
    correctIndex: 0,
    explanation: 'An interface extends one or more parent interfaces.'
  },
  {
    unit: 3, type: 'logical',
    question: 'Can a subclass override a private superclass method?',
    options: ['No, the private method is not inherited for overriding', 'Yes, private methods are always virtual', 'Only if the subclass is abstract', 'Only if it has the same return type'],
    correctIndex: 0,
    explanation: 'A private method is not visible to subclasses and is not overridden by a same-signature method.'
  },
];
