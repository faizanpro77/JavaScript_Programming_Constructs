//program that takes a input and determines if the number is a prime.
const prompt = require('prompt-sync')();

let number = Number(prompt("Enter a number : "));
let index;
    for (index = 2; index < number; index++) {
        if (number % index == 0) {
            break;
        }
    }
    if (index == number)
        console.log("prime number");
    else
        console.log("Not Prime number");

