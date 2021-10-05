const prompt = require("prompt-sync")({ sigint: true });

function getPalindrome(number) {
    var remainder, reversedNumber = 0;

    while (number > 0) {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }

    return reversedNumber
}


function isPrime(number) {
    let isPrime = true;

    if (number === 1) {
        isPrime = false;
    }

    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime
}

let number = parseInt(prompt("Enter number: "))
if (isPrime(number)) {
    console.log("Given number is prime ");
}
else {
    console.log("Given number is not prime ");
}

if (isPrime(getPalindrome(number))) {
    console.log("Given number's palindrome is prime ");
}
else {
    console.log("Given number's palindrome is not prime ");

}
