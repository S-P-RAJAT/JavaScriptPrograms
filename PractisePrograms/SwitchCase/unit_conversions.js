const args = process.argv.slice(2);
let number = parseInt(args[0]);
let operation = parseInt(args[1]);
let result;

switch (operation) {
    case 1:
        result = number * 12;
        break;
    case 2:
        result = number * 0.08333;
        break;
    case 3:
        result = number * 0.3048;
        break;
    case 4:
        result = number * 3.28084;
        break;

    default:
        break;
}

console.log("The result of operation = " + result);