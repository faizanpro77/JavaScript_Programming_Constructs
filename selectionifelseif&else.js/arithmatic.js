
const prompt = require('prompt-sync')();

let a = prompt("Enter number  ");
let b = prompt("Enter  number ");
let c = prompt("Enter  number ");

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

let maximum = Math.max(operation1, operation2, operation3, operation4);
let minimum = Math.min(operation1, operation2, operation3, operation4);

console.log("Maximum numbre is " + maximum);
console.log("Minimum number is " + minimum);
