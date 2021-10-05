const args = process.argv.slice(2);
let a = parseInt(args[0]);
let b = parseInt(args[1]);
let c = parseInt(args[2]);


minimum = Number.MAX_VALUE
maximum = Number.MIN_VALUE

for (let index = 0; index < 5; index++) {
    let digit = Math.floor(Math.random() * 1000);

}

let array = [a + b * c, c + a / b, a % b + c, a * b + c];
array.forEach(digit => {
    if (digit > maximum)
        maximum = digit
    if (digit < minimum)
        minimum = digit
});

console.log("Maximum = " + maximum, "\nMinimum = " + minimum)