// From function declarations to explicit and implicit return functions (one of each).

//function welcome() {
//  let welcome = 'Welcome to Appleseeds Bootcamp!';
//  return welcome;
//}

//function power(a) {
//  let myNumber = a;
//  let result = Math.pow(myNumber, 2);
//  return result;
//}

const welcome = (function () {
  let welcome = 'Welcome to Appleseeds Bootcamp!';
  return welcome;
})();

const power = (function (a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
})(2);

console.log(welcome);
console.log(power);

// From function expressions to IIFE functions.
//const squareRoot = (a) => Math.sqrt(a);
//const randomNumbers = (a, b) => Math.random() * (a - b) + b;

const squareRoot = ((a) => Math.sqrt(a))(2);
const randomNumbers = ((a, b) => Math.random() * (a - b) + b)(2, 3);

console.log(squareRoot);
console.log(randomNumbers);
