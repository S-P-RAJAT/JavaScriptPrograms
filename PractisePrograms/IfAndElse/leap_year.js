const args = process.argv.slice(2);
let year = parseInt(args[0]);

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("The Year " + year + " is a leap year");
        }
        else {
            console.log("The Year " + year + " is not a leap year");
        }
    }
    else {
        console.log("The Year " + year + " is a leap year");
    }

} else {
    console.log("The Year " + year + " is not a leap year");
}