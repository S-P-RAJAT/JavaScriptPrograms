const FREEZING_POINT_IN_CELSIUS = 0;
const FREEZING_POINT_IN_FAHRENHEIT = 32;
const BOILING_POINT_IN_CELSIUS = 100;
const BOILING_POINT_IN_FAHRENHEIT = 212;
const prompt = require("prompt-sync")({ sigint: true });
function convertTemperature(choice) {
    let convertedValue = -1;

    let temperature = parseFloat(prompt("Enter temperature to convert"))

    while (convertedValue == -1) {

        switch (choice) {
            case 1:
                if (temperature > FREEZING_POINT_IN_CELSIUS && temperature < BOILING_POINT_IN_CELSIUS) {
                    convertedValue = temperature * 9 / 5 + 32;
                }

                break;
            case 2:
                if (temperature > FREEZING_POINT_IN_FAHRENHEIT && temperature < BOILING_POINT_IN_FAHRENHEIT) {
                    convertedValue = (temperature - 32) * 5 / 9;
                }
        }
        if (convertedValue == -1) {
            console.log("Input temperature within freezing point and boiling point")
            temperature = parseFloat(prompt("Enter temperature to convert"))
        }
    }
    console.log("Converted value " + convertedValue)

}

let choice = parseInt(prompt("Enter 1 to convert from celsius to fahrenheit or 2 to convert from fahrenheit to celsius"))

convertTemperature(choice)