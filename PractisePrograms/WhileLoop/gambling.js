const STAKE = 100;
const BET_EVERY_GAME = 1;

let remainingMoney = STAKE;
let numberOfWins = 0;
let numberOfBets = 0;

while (remainingMoney < 200 && remainingMoney > 0) {
    numberOfBets++;
    let betResult = Math.floor(Math.random() * 10) % 2;
    if (betResult == 1) {
        remainingMoney += BET_EVERY_GAME;
        numberOfWins++;
    }
    else {
        remainingMoney -= BET_EVERY_GAME;

    }
}

console.log("Number of bets made " + numberOfBets)
if (remainingMoney == 0) {
    console.log("player lost")

}
else {
    console.log("player won")
    console.log("games won " + numberOfWins)

}