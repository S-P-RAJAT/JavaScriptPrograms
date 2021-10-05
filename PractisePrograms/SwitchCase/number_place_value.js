const args = process.argv.slice(2);
let number = parseInt(args[0]);
let unit;

switch (number) {
    case 1:
        unit = "one";
        break;
    case 10:
        unit = "ten";
        break;
    case 100:
        unit = "hundred";
        break;
    case 1000:
        unit = "thousand";
        break;

    default:
        break;
}

console.log("The unit is " + unit);