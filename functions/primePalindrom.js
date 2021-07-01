const prompt = require('prompt-sync')();

function checkPrime(number) {
    let count;
        for (count = 2; count < number; count++) {
            if (number % count == 0) {
            break;
        }
    }
    if (count == number)
        return true;
    else
        return false;
}

function getPalindrome(number) {
    let reversedNumber = 0;
    while (number > 0) {
        let remainder = number % 10;
        reversedNumber = reversedNumber * 10 + remainder;
        number = Math.floor(number / 10);
    }
    return reversedNumber;
}

let userInput = prompt("Enter a number ");
if (checkPrime(userInput)) {
    console.log("It is a prime number");
    let palindrome = getPalindrome(userInput);
    console.log("Palindrome number is " + palindrome);
    if (checkPrime(palindrome))
        console.log("Palindrome number is also  prime number");
}
else
    console.log("It is not a prime number");
