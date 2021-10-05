const args = process.argv.slice(2);
let number = parseInt(args[0]);
let week;

if (number == 1)
    week = "Monday";
else if (number == 2)
    week = "Tuesday";
else if (number == 3)
    week = "Wednesday";
else if (number == 4)
    week = "thursday";
else if (number == 5)
    week = "Friday";
else if (number == 6)
    week = "Saturday";
else if (number == 7)
    week = "Sunday";

console.log("The week day is " + week);