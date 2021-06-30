const prompt = require('prompt-sync')();

let year = prompt("Enter Year : ");

if (year >= 1000 && year <= 9999) {
if (year % 4 == 0) {
if (year % 100 == 0) {
if (year % 400 == 0)
    console.log("Leap year");
else
    console.log("Not a Leap year");
}
else
    console.log("Leap year");
}
else
    console.log("Not a Leap year");
}
else
    console.log("Not a four digit year");
