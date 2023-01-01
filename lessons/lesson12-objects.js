/*

Objects in JavaScript can be compared and understood using tangible objects in real life. 
For example, a cup is an object with properties such as color, design, and weight. Properties
define objects' characteristics. A property is also an association between a key and value. 
A property can be seen as the variable attached to the object. You can access properties of
an object with dot-notation (ex. objectName.propertyName). Names are also case-sensitive.

Example Object: myCar with properties make, model, and year:

const myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

Could also be written using an object initializer (comma-delimited list of properties).

const myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

Unassigned properties are undefined, not null. 

Properties of JavaScript objects can also be accessed or set using a bracket notation (dynamic), 
or by storing properties in a variable with a string value:

myCar['make'] = 'Ford';

let propertyName = 'make';
myCar[propertyName] = 'Ford';

You can use the bracket notation with (for...in) to iterate over all the enumerable properties of an object.

There are three native ways to list/traverse object properties:
1) for-in loops to traverse all enumerable properties of an object
2) Object.keys(i) to return an array with all enumerable property names of object i
3) Object.getOwnPropertyNames(i) to return an array with all property names of object i

Use "this" to assign values to the object's properties based on the values passed to the function.

Creating object:

const myCar = new Car('Eagle', 'Talon TSi', 1993);

Objects can be included inside objects as properties

The method Object.create() can be very useful, because it allows you to choose the prototype 
object for the object you want to create, without having to define a constructor function.

* Learn Inheritance (important) -- advanced section of JS guide

All objects in JavaScript inherit from at least one other object. You can refer to a property 
of an object either by its property name or by its ordinal index. You can add a property to a 
previously defined object type by using the prototype property.

A method is a function associated with an object, or, put differently, a method is a 
property of an object that is a function. A getter is a method that gets the value of a 
specific property. A setter is a method that sets the value of a specific property. You
can delete properties with "delete" operator.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

*/