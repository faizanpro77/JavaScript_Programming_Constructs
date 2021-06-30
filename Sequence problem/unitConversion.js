//unit conversion 
let inch = 42;
let feet = inch/12;
console.log("42 inch = " + feet + " feet")

let lengthInfeet = 60;
let breadthInfeet = 40;
let lengthInMeter = lengthInfeet / 3.281;
let bredthInMeter = breadthInfeet / 3.281;

console.log("plot size : " + lengthInMeter + " meters " + bredthInMeter + " meters")

let plotes = 25;
let area = plotes* lengthInMeter * bredthInMeter;
console.log("Area of " + plotes + " plotes in acres " + area)
