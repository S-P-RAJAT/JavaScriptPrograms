let toss;
let countHeads = 0;
let countTails = 0;
let won;
while (countHeads < 11 && countTails < 11) {
    toss = Math.floor(Math.random() * 10) % 2;
    if (toss == 0) {
        countHeads++;
        won = "Heads";
    }
    else {
        countTails++;
        won = "Tails";
    }
}
console.log(countHeads + " " + countTails + " " + won);
