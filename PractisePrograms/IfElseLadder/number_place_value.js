const args = process.argv.slice(2);
let number = parseInt(args[0]);
let unit;

if (number <= 9)
    unit = "one";
else if (number < 100)
    unit = "ten";
else if (number < 1000)
    unit = "hundred";
else if (number < 10000)
    unit = "thousand";

console.log("The unit is " + unit);