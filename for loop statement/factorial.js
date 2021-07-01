const prompt = require('prompt-sync')();
let number = Number(prompt("Enter number "));

let factorial = 1;

for (let count = 1; count <= number; count++) {
    factorial = factorial * count;
}
console.log(`Factorial is ${factorial}`);