// const { add } = require("./math");
// add(12, 34);
// subtract.subtract(34, 12);
// const multiply = require("./math").default;
// multiply(2,5);

// *here multiply is default export so we can name it anything we want
// *but add and subtract are named exports so we have to use the same name

import multiply, { add, subtract } from "./math.js";
add(12, 34);
subtract(34, 12);
multiply(2, 5);

// print values from return of functions
console.log("Addition: ", add(5, 10));
console.log("Subtraction: ", subtract(10, 5));
console.log("Multiplication: ", multiply(5, 10));
