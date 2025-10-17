// In JavaScript, an object is a standalone entity that groups related data and functionality. It is a complex, non-primitive data type used to store collections of key-value pairs.These key-value pairs are called properties, and if the value is a function, it is called a method.

// Object properties
// Properties are the characteristics of an object.
// A property has a key, which is a string or a symbol, and a value, which can be any JavaScript data type.

// Accessing properties
// Dot notation    used when property name is valid identifier
// Bracket notation    used when property name contains special characters, spaces, stats with number or is sorted variable

let Student = {
  name: "John",
  age: 30,
  "last-name": "Doe",
};

// Access with dot notation
console.log(Student.name); // Output: John

// Access with bracket notation

console.log(Student["age"]); // Output: 30
console.log(Student["last-name"]); // Output: Doe

// Use a variable with bracket notation
let prop = "name";
console.log(Student[prop]); // Output: John

// Object methods
// Methods are functions stored as object properties that define the actions an object can perform.
// The this keyword inside a method refers to the object the method belongs to.

let Tutor = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(Tutor.fullName()); // Output: "John Doe"

// Ways to create objects

// 1. Object literal syntax

// This is the simplest and most common method, using curly braces {} to define the object and its properties.
const car = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// 2. Constructor functions

// This method is used when you need to create multiple
// objects of the same type. The new keyword is used to
// create a new instance of the object type.
function Automobile(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const myCar = new Automobile("Eagle", "Talon TSi", 1993);

// 3. ES6 Classes

// The class syntax, introduced in ECMAScript 2015 (ES6),
// is modern, cleaner syntax for creating constructor functions.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

const person1 = new Person("Alice", 30);
console.log(person1.greet()); // Output: "Hello, my name is Alice."

// 4. Object.create()
// This method creates a new object using an existing object as
// the prototype of the newly created object,
// enabling prototypal inheritance.
const vehiclePrototype = {
  drive() {
    console.log("Driving...");
  },
};

const myRide = Object.create(vehiclePrototype);
myRide.drive(); // Output: "Driving..."

// Mutable and passed by reference: Objects are mutable,
// meaning their properties can be changed. When you assign an object
// to a new variable, you are copying the reference, not the object
// itself. Changes made through one variable will affect the other.

// Dynamic: You can add, modify, and delete properties on an object
// at any time after it is created.

// Encapsulation: Objects bundle data (properties) and
// behavior (methods) together, representing real-world entities
// in a single entity.





// let bottle_name = ''
// let bottle_capacity  = '1000ml'

// let bottle = {
//     name: '',
//     capacity :'100ml',
//     color:[]
// }

// object literal -> {}

// let person = {
//     name:John Doe'
// }

// new keyword (object constructor)\

// let product = new Object()



// let person = {
//     name:John Doe',
//     password:'1234r',
//     gender:''
// }

// console.log(person.address.district)
// console.log(person['address']['district'])

//! adding properties
// person.name = 'abc'
// product.name = 'xyz'
// person.email = 'johndoe@gmail.com'

//! reading/accessing values
//* dot notation
// const person_name = person.email
// console.log(person.full name)
// console.log(person.email)

//* bracket notation
// console.log(person['name'])

// let read_key = 'email'

// console.log(person.read_key) // undefined
// console.log(person[read_key])


//! modify properties
// person.name = 'abc'
// console.log(person)

// person['name'] = 'xyz'


// console.log(person)



// delete

// delete person.read_key

// console.log(person)


// console.log(person.hasOwnProperty('age'))

// if(!person.hasOwnProperty('age')){
//     person.age = 30
// }


// console.log(person)



// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person)) //[ [name, xyz],[]]

// const entries = Object.entries(person)

// console.log(entries)
// console.log(Object.fromEntries(entries))


// const obj = {
//     name:'xyz',
//     greet:function(){
//             console.log('good morning')
//     }
// }

// obj.greet()

let bottle = {
  name: "abc",
  capacity: "100ml",
  colour: "red",
};


let key = "capacity";
// dot , bracket
console.log(bottle.name);
console.log(bottle["capacity"]);
console.log(bottle[key]) // 100ml , undefined
