const prompt = require("prompt-sync")({ sigint: true });

function isPalindrome(number) {
    var remainder, originalNumber, reversedNumber = 0;

    originalNumber = number;
    while (number > 0) {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber * 10 + remainder;
    }
    if (reversedNumber == originalNumber) {
        return true
    }
    else {
        return false
    }
}

let number = parseInt(prompt("Enter number"))
if (isPalindrome(number)) {
    console.log("Given number is palindrome")
}
else {
    console.log("Given number is not palindrome")

}