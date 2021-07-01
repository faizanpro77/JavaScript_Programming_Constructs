//Read a Number and Display the week day (Sunday, Monday,...)
const prompt = require('prompt-sync')();

let Number = prompt("Enter Weekday Number : ");

let weekDay;

if (Number >= 1 && Number <= 7) {
    if (Number == 1)
        weekDay = "Sunday";
    else if (Number == 2)
        weekDay = "Monday";
    else if (Number == 3)
        weekDay = "Tuesday";
    else if (Number == 4)
        weekDay = "Wednesady";
    else if (Number == 5)
        weekDay = "Thursday";
    else if (Number == 6)
        weekDay = "Friday";
    else if (Number == 7)
        weekDay = "Saturday";
    console.log(`Weekday number = ${Number}, weekday = ${weekDay} `);
}
else
    console.log("Invalid number");