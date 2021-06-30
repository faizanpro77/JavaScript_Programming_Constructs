//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let value1 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let value2 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let value3 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let value4 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);
let value5 = Math.floor((Math.random() * (999 - 100 + 1)) + 100);

console.log("values are : " + value1 + " " + value2 + " " + value3 + " " + value4 + " " + value5);

let maximum = value1;
let minimum = value2;

if (value2 > maximum)
    maximum = value2;
else
    minimum = value2
if (value3 > maximum)
    maximum = value3;
else
    minimum = value3;
if (value4 > maximum) 
    maximum = value4;
else
    minimum = value4;
if (value5 > maximum)
    maximum = value5;
else
    minimum = value5;

console.log("maximum value is : " + maximum + "  minimum value is : " + minimum);