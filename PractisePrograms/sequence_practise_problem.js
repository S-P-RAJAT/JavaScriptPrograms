let digit = Math.floor(Math.random() * 10);
console.log("Digit = " + digit);

let diceValue = 1 + Math.floor(Math.random() * 10) % 6;
console.log("Dice Roll = " + diceValue);

let diceValue1 = 1 + Math.floor(Math.random() * 10) % 6;
let diceValue2 = 1 + Math.floor(Math.random() * 10) % 6;
console.log("sum = " + (diceValue1 + diceValue2));

sum = 0
for (let i = 0; i < 5; i++)
    sum += Math.floor(Math.random() * 100);

let avg = sum / 5;
console.log("sum = " + sum + " average = " + avg);

let feetInInches = 12;
console.log("\n42 inches in feet = " + (1 / feetInInches) * 42);

let feetinCM = 30.48;
let areaInMeters = ((60 * feetinCM / 100) * (40 * feetinCM) / 100);
console.log("Plot area in meters = " + areaInMeters);

let squareMeterInAcre = 0.000247;
let areaInAcres = areaInMeters * squareMeterInAcre;
console.log("Plot area in Acres = " + areaInAcres);
console.log("Plot area of 25 such plots = " + 25 * areaInAcres);