
### Personalized JS bootcamp
### lessons - holds all my progress
##### working on implementing projects into personal portfolio sreenaina.com

## Lesson 0 Environment Setup

    Install
        Node.js
        NPM
        VS Code
        Git
    VS Code Extensions
        Git Lens
        Indent rainbow
        JavaScript ES6 code snippets
        Live Server
        Prettier
        Rest Client
        Auto Open Markdown Preview
        Quokka
    Install Nodemon
        npm i nodemon -g
    Other ways to write JS on browser
        JSbin
        Codepen
        JSFiddle
    Create a Github Repo
    Install JSON-Server
        npm install -g json-server JSON Server

## Lesson 1 JavaScript

    History
    Useful Links
        https://babeljs.io/
        https://caniuse.com/
        https://html5test.com/
        https://developer.mozilla.org/en-US/docs/Web/JavaScript
        https://github.com/lukehoban/es6features
        http://es6-features.org/#Constants

## Lesson 2 Comments

    single line comment // one line comment
    multi line comment /* multi line comment */

## Hashbang syntax

    hashbang syntax
    #!/usr/bin/env

## Lesson 3 Variables

    JavaScript has three kinds of variable declarations.
    var - Declares a variable, optionally initializing it to a value.
    let - Declares a block-scoped, local variable, optionally initializing it to a value.
    const - Declares a block-scoped, read-only named constant.

    You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

    A JavaScript identifier must start with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0–9).

    Because JavaScript is case sensitive, letters include the characters "A" through "Z" (uppercase) as well as "a" through "z" (lowercase).

    You can use most of ISO 8859-1 or Unicode letters such as å and ü in identifiers. (For more details, see this blog post.) You can also use the Unicode escape sequences as characters in identifiers.

    Some examples of legal names are Number_hits, temp99, $credit, and _name.

## Lesson 4 Grammer and Types
### 6 Data Types (Primitives) operator typeof

        1. undefined
        2. boolean ex: true
        3. number ex: 10
        4. string ex: 'Hello'
        5. bigint ex: 10n
        6. symbol

### 2 Structural Types instanceof operator

        1. object (Object, Array, Map, Set, WeakMap, WeakSet, Date all made with new keyword)
        2. function

### 1 Structural Root Primitive

        1. null

### Type Conversion

        JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

        So, for example, you could define a variable as follows:

        var answer = 42;
        And later, you could assign the same variable a string value, for example:
        answer = 'Thanks for all the fish...';

        Numbers and the '+' operator
        x = 'The answer is ' + 42 // "The answer is 42"
        y = 42 + ' is the answer' // "42 is the answer"
        '37' - 7 // 30
        '37' + 7 // "377"

    Converting strings to numbers
        In the case that a value representing a number is in memory as a string, there are methods for conversion.

        parseInt()
        parseFloat()
        parseInt only returns whole numbers, so its use is diminished for decimals.

        Note: Additionally, a best practice for parseInt is to always include the radix parameter. The radix parameter is used to specify which numerical system is to be used.

        parseInt('101', 2) // 5
        An alternative method of retrieving a number from a string is with the + (unary plus) operator:

        '1.1' + '1.1' // '1.11.1'
        (+'1.1') + (+'1.1') // 2.2
        // Note: the parentheses are added for clarity, not required.

### Literals

        Array literals let coffees = ['French Roast', 'Colombian', 'Kona'];
        Boolean literals true, false
        Floating-point literals 1.0, 4.33
        Numeric literals -
            Number and BigInt types can be written in
            decimal (base 10),
            hexadecimal (base 16),
            octal (base 8) and
            binary (base 2).
            A decimal numeric literal is a sequence of digits without a leading 0 (zero).
            A leading 0 (zero) on a numeric literal, or a leading 0o (or 0O) indicates it is in octal. Octal numerics can include only the digits 0–7.
            A leading 0x (or 0X) indicates a hexadecimal numeric type. Hexadecimal numerics can include digits (0–9) and the letters a–f and A–F. (The case of a character does not change its value. Therefore: 0xa = 0xA = 10 and 0xf = 0xF = 15.)
            A leading 0b (or 0B) indicates a binary numeric literal. Binary numerics can only include the digits 0 and 1

            Some examples of numeric literals are:

            0, 117, -345, 123456789123456789n             (decimal, base 10)
            015, 0001, -0o77, 0o777777777777n             (octal, base 8)
            0x1123, 0x00111, -0xF1A7, 0x123456789ABCDEFn  (hexadecimal, "hex" or base 16)
            0b11, 0b0011, -0b11, 0b11101001010101010101n  (binary, base 2)
        Floating-point literals
            A floating-point literal can have the following parts:

            A decimal integer which can be signed (preceded by "+" or "-"),
            A decimal point ("."),
            A fraction (another decimal number),
            An exponent.
            The exponent part is an "e" or "E" followed by an integer, which can be signed (preceded by "+" or "-"). A floating-point literal must have at least one digit, and either a decimal point or "e" (or "E").

            More succinctly, the syntax is:

            [(+|-)][digits].[digits][(E|e)[(+|-)]digits]
            For example:

            3.1415926
            -.123456789
            -3.1E+12
            .1e-23
        Object literals {}
        RegExp literals var re = /ab+c/;
        String literals
        Template literals
        Unicode (amazing)

## Lesson 5 Control flow and error handling

    Block statement
    Conditional statements
    Falsy values - The following values evaluate to false (also known as Falsy values):
        false
        undefined
        null
        0
        NaN
        the empty string ("")
    switch statement
        break statement
    Exception handling statements
        throw statement
        try...catch statement
        The finally block
    Loops and iteration
        for statement
        do...while statement
        while statement
        labeled statement
        break statement
        continue statement
        for...in statement
        for...of statement

## Lesson 6 Functions

    Function declarations
    Function expressions
    Calling functions
    Function scope
    Recursion
    Nested functions and closures
    Preservation of variables
    Multiply-nested functions
    Name conflicts
    Closures
    Using the arguments object
    Function parameters
        Default parameters
        With default parameters (post-ECMAScript 2015)
        Rest parameters
    Arrow functions
    Shorter functions
    No separate this
    Predefined functions
    Getter
    Setter

## Lesson 7 Expressions and operators

    Operators
    Return value and chaining
    Destructuring
    Comparison operators
    Arithmetic operators
    Bitwise operators
    Bitwise logical operators
    Bitwise shift operators
    Logical operators
    Short-circuit evaluation
    String operators
    Conditional (ternary) operator
    Comma operator
    Unary operators
        typeof
        void
    Relational operators
        in
        instanceof
    Operator precedence
    Expressions
        Primary expressions
        this
    Grouping operator
    Left-hand-side expressions
        new
        super

## Lesson 8 Numbers and Dates

    Learn methods

## Lesson 9 Text Formatting

    Learn String Methods

## Lesson 10 Regular Expressions

## Lesson 11 Indexed Collections

    Learn Array methods (important)

## Lesson 12 Working with Objects

    Learn Inheritance (important)
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model

## Lesson 13 Object Model

## Lesson 14 HTTP - Ajax to Await

    XMLHttpRequest - Ajax & Callback
    Fetch API
    Promises
    Async & Await
    Axios Library

## Lesson 15 JS Modules

## Others - Pending

    Symbols
    Declarative and Functional JavaScript Principles

## HTML

    Semantic Markup
    Document Structure
    Basic HTML Document
        Events
        Updating simple DOM

## CSS/SASS

    Basic CSS
        Media Query
    Basic Animations
    CSS Counter

## Built in Objects

    Document
    Window
    Screen
    Location
    History
    Popup
    Timing
    Cookies
    Navigator
    HTML5 APIs
        Storage
        DragNDrop        
        Console
        Canvas
        Clipboard
        File System API
        Network
        Page Visibility
        Resize Observer (Container Queries)
        Intersection Observer
        Socket API

## DOM

    Traversing
    Selection
    Create Elements
    Remove, Replace Elements
    Events
    Mouse Events
    Keyboard Events
    Event Bubbling and Delegation
    How the DOM Really Works
    Styles, Attributes and Classes
    Implementing Smooth Scrolling
    Types of Events and Event Handlers
    Event Propagation: Bubbling and Capturing
    Event Propagation in Practice
    Event Delegation: Implementing Page Navigation
    DOM Traversing
    Building a Tabbed Component
    Passing Arguments to Event Handlers
    Implementing a Sticky Navigation: The Scroll Event
    A Better Way: The Intersection Observer API
    Revealing Elements on Scroll
    Lazy Loading Images
    Building a Slider Component: Part 1
    Building a Slider Component: Part 2
    Lifecycle DOM Events
    Efficient Script Loading: defer and async

## Storage

    Session
    Local

## Patterns

    What Are Patterns?
    Module & Revealing Module Pattern
    Singleton Pattern
    Factory Pattern
    Observer Pattern
    Mediator Pattern

## Webpack

    Setup

## React
