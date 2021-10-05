minimum = Number.MAX_VALUE
maximum = Number.MIN_VALUE

for (let index = 0; index < 5; index++) {
    let digit = Math.floor(Math.random() * 1000);
    if (digit > maximum)
        maximum = digit
    if (digit < minimum)
        minimum = digit
}

console.log("Maximum = " + maximum, "\nMinimum = " + minimum)