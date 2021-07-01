const prompt = require('prompt-sync')();

function getDegC(degF) {
    return (degF - 32) * (5/9);
 }

 function getDegF(degC) {
     return (degC * 9/5) + 32;
 }
 let i = 0;
 while (i == 0) {
 console.log("your choice \n1. convert to degC \n2. Convert to degF \n3.exit");
 let choice = Number(prompt("your choice "));
 let value = 0;

 switch (choice) {
     case 1:
         value = Number(prompt("Enter value between 32deF and 212degF"));
         console.log(getDegC(value));
         break;
    case 2:
        value = Number(prompt("Enter value between 0degC and 100degC "));
        console.log(getDegF(value));
        break;
    case 3:
        i=-1;
    default:
        console.log("Invalid choice");
 }
}