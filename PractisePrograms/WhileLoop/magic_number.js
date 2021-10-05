const prompt = require("prompt-sync")({ sigint: true });
let lowerLimit = 0;
let higherLimit = 100;

let midvalue = (lowerLimit + higherLimit) / 2;
while (lowerLimit < higherLimit) {

    if (prompt("Is the number " + midvalue + ": ") == "y") {
        console.log("number found " + midvalue)
        break;
    }
    else if (prompt("Is the number in range " + lowerLimit + " to " + midvalue + " ") == "y") {
        higherLimit = midvalue;
    }
    else {
        lowerLimit = midvalue;
    }

    midvalue = parseInt((lowerLimit + higherLimit) / 2);
}