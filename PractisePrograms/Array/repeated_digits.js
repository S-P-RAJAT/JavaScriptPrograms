let repeatedDigitsArray = new Array();
let unitDigit;
let tensDigit;
let lowerLimit = 0;
let upperLimit = 100;

for (let index = lowerLimit; index <= upperLimit; index++) {
    if (index > 9) {
        unitDigit = index % 10;
        tensDigit = parseInt(index / 10);
        if (unitDigit == tensDigit) {
            repeatedDigitsArray.push(index)
        }
    }

}
console.log(repeatedDigitsArray)