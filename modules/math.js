// !common JS
// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// exports.subtract = (a, b) => {
//   console.log(a - b);
//   return a - b;
// };

// module.exports = { add };

// !ES6 Modules
// named exports
export function add(a, b) {
  console.log(a + b);
  return a + b;
}

export const subtract = (a, b) => {
  console.log(a - b);
  return a - b;
};

// default exports
export default function multiply(a, b) {
  console.log(a * b);
  return a * b;
}
