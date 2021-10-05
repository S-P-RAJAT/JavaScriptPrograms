minimum = Number.MAX_VALUE
maximum = Number.MIN_VALUE

for (let index = 0; index < 5; index++) {
    let digit = Math.floor(Math.random() * 1000);
    maximum = (digit > maximum) ? digit : maximum;
    minimum = (digit < minimum) ? digit : minimum;
}

console.log("Maximum = "+maximum,"\nMinimum = "+minimum)