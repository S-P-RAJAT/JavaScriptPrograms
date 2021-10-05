let digit = Math.floor(Math.random() * 10);
console.log("Digit = "+digit);

let diceValue = 1 + Math.floor(Math.random() * 10)%6;
console.log("Dice Roll = "+diceValue);

let diceValue1 = 1 + Math.floor(Math.random() * 10)%6;
let diceValue2 = 1 + Math.floor(Math.random() * 10)%6;
console.log("sum = "+(diceValue1+diceValue2));

sum = 0
for(let i=0; i<5;i++)
    sum += Math.floor(Math.random() * 100);

let avg = sum/5;
console.log("sum = "+sum+" average = "+avg);