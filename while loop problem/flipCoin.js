//the Flip Coin problem till either Heads or Tails wins 11 times.
const HEAD = 0;
let head = 0;
let tail = 0;

while (head != 11 && tail != 11) {
    let toss = Math.floor(Math.random() * 10) % 2;
    if (toss == HEAD)
        head++;
    else
        tail++;
}

console.log("Head count " + head);
console.log("Tail count " + tail);
