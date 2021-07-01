let winningCount = 0;
let totalBetscount = 0;
let balance = 100;


while (balance > 0 && balance < 200) {
    let bet = Math.floor(Math.random() * 10) % 2;
    if (bet == 0)
        balance--;
    else {
        balance++;
        winningCount++;
    }
    totalBetscount++;
}

console.log("Total wining = " + winningCount);
console.log("balance = " + balance);
console.log("Total bets = " + totalBetscount);

