const args = process.argv.slice(2);
let number = parseInt(args[0]);
let week;

if (number == 1)
    week = "Monday";

switch (number) {
    case 1:
        week = "Monday";
        break;
    case 2:
        week = "Tuesday";
        break;
    case 3:
        week = "Wednesday";
        break;
    case 4:
        week = "Thursday";
        break;
    case 5:
        week = "Friday";
        break;
    case 6:
        week = "Saturday";
        break;
    case 7:
        week = "Sunday";
        break;

    default:
        break;
}

console.log("The week day is " + week);