const args = process.argv.slice(2);
let number = parseInt(args[0]);
console.log("Factors of", number, "are: ");
let factorsArray = new Array();
while (number % 2 == 0) {
    factorsArray.push(2);
    number /= 2;
}
for (let i = 2; i * i <= number; i++) {
    while (number % i == 0) {
        if (number % i == 0) {
            factorsArray.push(i);
            number /= i;
        }
    }
}
if (number > 2) {
    factorsArray.push(number);
}

console.log(factorsArray);