let number = Math.floor(Math.random() * 10 );
console.log("single digit number : " + number);

//To print dice number
let dice = Math.floor(((Math.random() * 10) % 6) + 1);
console.log("dice number : " + dice);

//To print sum of dice 
let dice1 = Math.floor(((Math.random() * 10) %6) + 1);
let dice2 = Math.floor(((Math.random() * 10) %6) + 1);
let sumOfDice = dice1 + dice2;
console.log("Sum of dice : " + sumOfDice);

//To print sum and average
let diceNum1 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let diceNum2 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let diceNum3 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let diceNum4 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let diceNum5 = Math.floor((Math.random() * (99 - 10 + 1)) + 10);
let diceSum = diceNum1 + diceNum2 + diceNum3 + diceNum4 + diceNum5;
let average = sumOfDice/5;
console.log("Sum of dice : " + diceSum + " Average : " + average);


