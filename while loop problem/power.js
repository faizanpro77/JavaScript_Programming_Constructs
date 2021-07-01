const prompt = require('prompt-sync')();
let number = Number(prompt("Enter number : "));

let count=0
let limit=9
while ( count < number && count < limit ){
        power=2**count
        console.log("2" +"^" +count + " = " +power)
        count++;
}