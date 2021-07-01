const prompt = require('prompt-sync')();

    let startNumber = Number(prompt("Enter starting number "));
    let endNumber = Number(prompt("Enter ending number "));
    let counter;
    let count;
    for (counter = startNumber; counter <= endNumber; counter++)
    {
        for (count = 2; count < counter; count++) {
            if (counter % count == 0) {
            break;
        }
    }
    if (counter == count)
        console.log("prime number " + counter);
        }
   