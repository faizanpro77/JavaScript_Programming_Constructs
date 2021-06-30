//Write a program that takes day and month from the command line and prints true ifday of month is between March 20 and June 20, false otherwise.
const readline = require("prompt-sync");
const prompt=readline();

let day = prompt("Enter a date ");
let month = prompt("Enter a month ");
if ((month == 3 && day > 20 && day <= 31) || (month == 4 && day >= 1 && day <= 30) || (month == 5 && day >= 1 && day <= 31) || (month == 6 && day >= 1 && day < 20))
    console.log("true");
else
    console.log("flase");


